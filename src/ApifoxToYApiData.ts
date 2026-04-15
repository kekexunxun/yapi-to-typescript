import axios from 'axios'
import {
  Category,
  CategoryConfig,
  Interface,
  InterfaceList,
  Method,
  Project,
  RequestBodyType,
  RequestFormItemType,
  RequestParamType,
  RequestQueryType,
  Required,
  ResponseBodyType,
  SyntheticalConfig,
} from './types'
import { getFilteredCat } from './utils'

export interface ApifoxToYApiDataOptions {
  token: string
  projectId: number
  categories: CategoryConfig[]
  serverUrl: string
  addFoldersToTags?: boolean
  oasVersion?: string
  exportFormat?: 'JSON' | 'YAML'
}

interface OpenAPIInfo {
  title: string
  description?: string
  version: string
}

interface OpenAPISchema {
  type?: string
  format?: string
  description?: string
  properties?: Record<string, OpenAPISchema>
  required?: string[]
  items?: OpenAPISchema
  $ref?: string
  enum?: string[]
  example?: any
  examples?: any[]
}

interface OpenAPIParameter {
  name: string
  in: 'path' | 'query' | 'header' | 'cookie'
  description?: string
  required?: boolean
  schema?: OpenAPISchema
  example?: string
}

interface OpenAPIRequestBody {
  content?: Record<
    string,
    {
      schema?: OpenAPISchema
    }
  >
}

interface OpenAPIResponse {
  description: string
  content?: Record<
    string,
    {
      schema?: OpenAPISchema
      examples?: Record<
        string,
        {
          summary?: string
          value?: any
        }
      >
    }
  >
}

interface OpenAPIOperation {
  'summary': string
  'description'?: string
  'deprecated'?: boolean
  'tags'?: string[]
  'x-apifox-folder'?: string
  'parameters'?: OpenAPIParameter[]
  'requestBody'?: OpenAPIRequestBody
  'responses'?: Record<string, OpenAPIResponse>
  'security'?: any[]
}

interface OpenAPIPath {
  get?: OpenAPIOperation
  post?: OpenAPIOperation
  put?: OpenAPIOperation
  delete?: OpenAPIOperation
  patch?: OpenAPIOperation
  head?: OpenAPIOperation
  options?: OpenAPIOperation
}

interface OpenAPITag {
  name: string
  description?: string
}

interface OpenAPIDocument {
  openapi: string
  info: OpenAPIInfo
  tags?: OpenAPITag[]
  paths: Record<string, OpenAPIPath>
  components?: {
    schemas?: Record<string, OpenAPISchema>
    securitySchemes?: Record<string, any>
  }
  servers?: Array<{
    url: string
    description?: string
  }>
}

export type TProjectInfo = Project & {
  cats: Category[]
  getMockUrl: () => string
  getDevUrl: (value: string) => string
  getProdUrl: (value: string) => string
}

export class ApifoxToYApiData {
  private openApiDoc: OpenAPIDocument | null = null

  private options: ApifoxToYApiDataOptions

  private project: Project = {
    _id: 0,
    _url: '',
    name: 'ApifoxProject',
    desc: '',
    basepath: '',
    tag: [],
    env: [{ name: '', domain: '' }],
  }

  private schemas: Record<string, OpenAPISchema> = {}

  private interfaceIdCounter = 0

  constructor(options: ApifoxToYApiDataOptions) {
    this.options = options
  }

  private resolveRef(ref: string): OpenAPISchema | null {
    if (!ref.startsWith('#/components/schemas/')) {
      return null
    }
    const schemaName = ref.replace('#/components/schemas/', '')
    return this.schemas[schemaName] || null
  }

  private resolveSchema(
    schema: OpenAPISchema | undefined,
  ): OpenAPISchema | undefined {
    if (!schema) return undefined
    if (schema.$ref) {
      return this.resolveRef(schema.$ref) || schema
    }
    return schema
  }

  private getSchemaType(schema: OpenAPISchema | undefined): string {
    if (!schema) return 'string'
    const resolved = this.resolveSchema(schema)
    if (!resolved) return 'string'
    return resolved.type || 'string'
  }

  private convertParametersToReqParams(
    parameters: OpenAPIParameter[] = [],
    type: 'path' | 'query',
  ): Interface['req_params'] | Interface['req_query'] {
    if (type === 'path') {
      return parameters
        .filter(p => p.in === 'path')
        .map(p => ({
          name: p.name,
          desc: p.description || '',
          example: p.example || '',
          required: p.required ? Required.true : Required.false,
          type:
            this.getSchemaType(p.schema) === 'string'
              ? RequestParamType.string
              : RequestParamType.number,
        }))
    }
    return parameters
      .filter(p => p.in === 'query')
      .map(p => ({
        name: p.name,
        desc: p.description || '',
        example: p.example || '',
        required: p.required ? Required.true : Required.false,
        type:
          this.getSchemaType(p.schema) === 'string'
            ? RequestQueryType.string
            : RequestQueryType.number,
      }))
  }

  private convertRequestBody(requestBody: OpenAPIRequestBody | undefined): {
    req_body_type: RequestBodyType
    req_body_is_json_schema: boolean
    req_body_form: Interface['req_body_form']
    req_body_other: string
    contentType: string
  } {
    if (!requestBody?.content) {
      return {
        req_body_type: RequestBodyType.none,
        req_body_is_json_schema: false,
        req_body_form: [],
        req_body_other: '',
        contentType: '',
      }
    }

    const contentTypes = Object.keys(requestBody.content)
    const jsonContentType = contentTypes.find(ct =>
      ct.includes('application/json'),
    )
    const formContentType = contentTypes.find(
      ct =>
        ct.includes('application/x-www-form-urlencoded') ||
        ct.includes('multipart/form-data'),
    )

    if (jsonContentType) {
      const schema = requestBody.content[jsonContentType].schema
      return {
        req_body_type: RequestBodyType.json,
        req_body_is_json_schema: true,
        req_body_form: [],
        req_body_other: schema
          ? JSON.stringify(this.normalizeSchema(schema))
          : '',
        contentType: jsonContentType,
      }
    }

    if (formContentType) {
      const schema = requestBody.content[formContentType].schema
      const resolvedSchema = this.resolveSchema(schema)
      const formItems: Interface['req_body_form'] = []

      if (resolvedSchema?.properties) {
        const requiredFields = resolvedSchema.required || []
        for (const [name, prop] of Object.entries(resolvedSchema.properties)) {
          const resolvedProp = this.resolveSchema(prop)
          formItems.push({
            name,
            type:
              resolvedProp?.type === 'file' || resolvedProp?.format === 'binary'
                ? RequestFormItemType.file
                : RequestFormItemType.text,
            desc: resolvedProp?.description || '',
            example: resolvedProp?.example || '',
            required: requiredFields.includes(name)
              ? Required.true
              : Required.false,
          })
        }
      }

      return {
        req_body_type: RequestBodyType.form,
        req_body_is_json_schema: false,
        req_body_form: formItems,
        req_body_other: '',
        contentType: formContentType,
      }
    }

    return {
      req_body_type: RequestBodyType.raw,
      req_body_is_json_schema: false,
      req_body_form: [],
      req_body_other: '',
      contentType: contentTypes[0] || '',
    }
  }

  private normalizeSchema(schema: OpenAPISchema): OpenAPISchema {
    const result: OpenAPISchema = { ...schema }

    if (schema.$ref) {
      const resolved = this.resolveRef(schema.$ref)
      if (resolved) {
        return this.normalizeSchema(resolved)
      }
    }

    if (schema.properties) {
      result.properties = {}
      for (const [key, value] of Object.entries(schema.properties)) {
        if (value) {
          result.properties[key] = this.normalizeSchema(value)
        }
      }
    }

    if (schema.items) {
      result.items = this.normalizeSchema(schema.items)
    }

    delete result.$ref
    return result
  }

  private convertResponse(responses: Record<string, OpenAPIResponse> = {}): {
    res_body_type: ResponseBodyType
    res_body_is_json_schema: boolean
    res_body: string
  } {
    const successResponse =
      responses['200'] || responses['201'] || responses['204']

    if (!successResponse?.content) {
      return {
        res_body_type: ResponseBodyType.json,
        res_body_is_json_schema: false,
        res_body: '',
      }
    }

    const jsonContent = successResponse.content['application/json']
    if (jsonContent?.schema) {
      return {
        res_body_type: ResponseBodyType.json,
        res_body_is_json_schema: true,
        res_body: JSON.stringify(this.normalizeSchema(jsonContent.schema)),
      }
    }

    return {
      res_body_type: ResponseBodyType.json,
      res_body_is_json_schema: false,
      res_body: '',
    }
  }

  private generateInterfaceId(): number {
    this.interfaceIdCounter += 1
    return this.interfaceIdCounter
  }

  /**
   * 获取接口所属的目录名称
   * Apifox 优先使用 x-apifox-folder 字段，其次才用 tags[0]
   */
  private getOperationFolder(operation: OpenAPIOperation): string {
    // 优先使用 x-apifox-folder
    if (operation['x-apifox-folder']) {
      return operation['x-apifox-folder']
    }
    // 其次使用 tags[0]
    if (operation.tags && operation.tags.length > 0) {
      return operation.tags[0]
    }
    return 'default'
  }

  private convertOperationToInterface(
    path: string,
    method: string,
    operation: OpenAPIOperation,
    categoryName: string,
    categoryId: number,
  ): Interface {
    const parameters = operation.parameters || []
    const pathParams = this.convertParametersToReqParams(
      parameters,
      'path',
    ) as Interface['req_params']
    const queryParams = this.convertParametersToReqParams(
      parameters,
      'query',
    ) as Interface['req_query']

    // const headerParams = parameters.filter(p => p.in === 'header')
    const reqHeaders: Interface['req_headers'] = []

    const requestBodyInfo = this.convertRequestBody(operation.requestBody)
    if (requestBodyInfo.contentType) {
      reqHeaders.push({
        name: 'Content-Type',
        value: requestBodyInfo.contentType,
        desc: '',
        example: '',
        required: Required.true,
      })
    }

    const responseInfo = this.convertResponse(operation.responses)

    // 获取接口所属目录：优先使用 x-apifox-folder，其次用 tags
    const folderName = this.getOperationFolder(operation)
    const interfaceTags = operation.tags?.length
      ? operation.tags
      : folderName !== 'default'
      ? [folderName]
      : []

    return {
      _id: this.generateInterfaceId(),
      _category: {
        _id: categoryId,
        _url: '',
        name: categoryName,
        desc: '',
        add_time: 0,
        up_time: 0,
      },
      _project: { ...this.project },
      _url: '',
      title: operation.summary || path,
      status: operation.deprecated ? 'undone' : 'done',
      markdown: operation.description || '',
      path,
      method: method.toUpperCase() as Method,
      project_id: this.options.projectId,
      catid: categoryId,
      tag: interfaceTags,
      req_headers: reqHeaders,
      req_params: pathParams,
      req_query: queryParams,
      req_body_type: requestBodyInfo.req_body_type,
      req_body_is_json_schema: requestBodyInfo.req_body_is_json_schema,
      req_body_form: requestBodyInfo.req_body_form,
      req_body_other: requestBodyInfo.req_body_other,
      res_body_type: responseInfo.res_body_type,
      res_body_is_json_schema: responseInfo.res_body_is_json_schema,
      res_body: responseInfo.res_body,
      add_time: Math.floor(Date.now() / 1000),
      up_time: Math.floor(Date.now() / 1000),
      uid: 0,
    }
  }

  async getProjectInfo(): Promise<TProjectInfo> {
    const baseUrl = this.options.serverUrl.replace(/\/$/, '')
    const response = await axios.post(
      `${baseUrl}/v1/projects/${this.options.projectId}/export-openapi?locale=zh-CN`,
      {
        scope: {
          type: 'ALL',
          excludedByTags: [],
        },
        options: {
          includeApifoxExtensionProperties: true,
          addFoldersToTags: this.options.addFoldersToTags ?? true,
        },
        oasVersion: this.options.oasVersion ?? '3.0',
        exportFormat: this.options.exportFormat ?? 'JSON',
      },
      {
        headers: {
          'Authorization': `Bearer ${this.options.token}`,
          'X-Apifox-Api-Version': '2024-03-28',
          'Content-Type': 'application/json',
        },
      },
    )

    this.openApiDoc = response.data

    if (this.openApiDoc?.components?.schemas) {
      this.schemas = this.openApiDoc.components.schemas
    }

    this.project._id = this.options.projectId
    this.project.name = this.openApiDoc?.info?.title || 'ApifoxProject'
    this.project.desc = this.openApiDoc?.info?.description || ''

    return {
      ...this.project,
      cats: [],
      getMockUrl: () => '',
      getDevUrl: () => '',
      getProdUrl: () => '',
    }
  }

  private getTagId(tagName: string): number {
    let hash = 0
    for (let i = 0; i < tagName.length; i++) {
      const char = tagName.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }
    return Math.abs(hash)
  }

  /**
   * 从 OpenAPI tags 中获取目录对应的 tag
   * 如果 x-apifox-folder 在 tags 中存在，则返回对应的 tag；否则返回 x-apifox-folder 本身
   */
  private getMatchingTag(xApifoxFolder: string): string | null {
    if (!this.openApiDoc?.tags) return null
    // 先精确匹配
    const exactMatch = this.openApiDoc.tags.find(
      tag => tag.name === xApifoxFolder,
    )
    if (exactMatch) return exactMatch.name
    // 如果 addFoldersToTags=true，可能目录名被添加到 tag 描述或其他地方
    // 或者 tag.name 本身就包含了目录路径
    return null
  }

  getCats(cats: CategoryConfig): number[] {
    const categoryIds = getFilteredCat(cats, [], true)
    if (categoryIds.length === 0 || categoryIds.includes(0)) {
      if (!this.openApiDoc?.tags) {
        return []
      }
      const tagIds = this.openApiDoc.tags.map(tag => this.getTagId(tag.name))
      return tagIds
    }
    return categoryIds
  }

  async getInterfaceList(
    syntheticalConfig: SyntheticalConfig,
  ): Promise<InterfaceList> {
    if (!this.openApiDoc?.paths) return []

    const catId = syntheticalConfig.id as number
    const interfaces: InterfaceList = []
    // 用于去重：基于 path + method
    const seenKeys = new Set<string>()

    // 调试：获取 tag 名称
    // let tagName = 'unknown'
    // if (this.openApiDoc?.tags) {
    //   const tag = this.openApiDoc.tags.find(
    //     t => this.getTagId(t.name) === catId,
    //   )
    //   tagName = tag?.name || `unknown(${catId})`
    // }

    const methods = [
      'get',
      'post',
      'put',
      'delete',
      'patch',
      'head',
      'options',
    ] as const

    for (const [path, pathItem] of Object.entries(this.openApiDoc.paths)) {
      for (const method of methods) {
        const operation = pathItem[method]
        if (!operation) continue

        // 获取接口的目录信息：优先使用 x-apifox-folder
        const xApifoxFolder = this.getOperationFolder(operation)
        const tagId = this.getTagId(xApifoxFolder)

        if (tagId === catId) {
          // 去重：基于 path + method
          const key = `${method.toUpperCase()}:${path}`
          if (seenKeys.has(key)) {
            continue
          }
          seenKeys.add(key)

          // 根据实际的目录名称来确定分类
          const categoryTag = xApifoxFolder

          const interfaceInfo = this.convertOperationToInterface(
            path,
            method,
            operation,
            categoryTag,
            catId,
          )
          interfaces.push(interfaceInfo)
        }
      }
    }

    return interfaces
  }
}

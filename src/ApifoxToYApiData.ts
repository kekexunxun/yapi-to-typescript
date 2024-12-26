import axios from 'axios'
import {
  Category,
  CategoryConfig,
  Interface,
  InterfaceList,
  Method,
  Project,
  RequestBodyType,
  RequestParamType,
  RequestQueryType,
  Required,
  ResponseBodyType,
  SyntheticalConfig,
} from './types'
import { getFilteredCat } from './utils'

export interface ApifoxToYApiDataOptions {
  /** 这里的token等同于apifox的shareId */
  token: string
  /** 判断要获取哪些category */
  categories: CategoryConfig[]
}

interface ApifoxFolderTreeFolder {
  id: number
  name: string
  docId: number
  editorId: number
  parentId: number
  projectBranchId: number
  shareSettings: object
  visibility: 'INHERITED'
  type: 'http'
}

interface ApifoxTreeFolderApi {
  id: number
  name: string
  method: string
  path: string
  folderId: number
  tags: string[]
  status: string
  responsibleId: number
  customApiFields: object
  visibility: 'INHERITED'
  type: 'http'
}

interface ApifoxFolderTreeChildren {
  key: string
  type: 'apiDetailFolder' | 'apiDetail'
  name: string
  api: ApifoxTreeFolderApi
  children: ApifoxFolderTreeChildren[]
  folder?: ApifoxFolderTreeFolder
}

interface ApifoxFolderTree {
  key: string
  type: 'apiDetailFolder' | 'apiDetail'
  name: string
  children: ApifoxFolderTreeChildren[]
  folder: ApifoxFolderTreeFolder
}

type ApifoxFolderData = ApifoxFolderTree[]

type ApifoxSchemaTreeProperty = Record<
  string,
  {
    'title': string
    'type': string
    'format'?: string
    'description'?: string
    'properties'?: ApifoxSchemaTreeProperty
    'x-apifox-orders'?: string[]
    'items'?: {
      'type': string
      'properties': ApifoxSchemaTreeProperty
      'x-apifox-orders': string[]
      '$ref'?: string
    }
  } | null
>
interface ApifoxJsonSchema {
  'properties': ApifoxSchemaTreeProperty
  'title'?: string
  'type': string
  'required'?: string[]
  'x-apifox-orders'?: string[]
  'x-apifox-refs'?: Record<
    string,
    {
      '$ref': string
      'required': string[]
      'x-apifox-overrides': ApifoxSchemaTreeProperty
    }
  >
}
interface ApifoxSchemaTree {
  createdAt: string
  creatorId: number
  description: string
  displayName: string
  editorId: number
  folderId: number
  id: number
  jsonSchema: ApifoxJsonSchema
  name: string
  ordering: number
  projectId: number
  updatedAt: string
  visibility: 'INHERITED'
}
type ApifoxSchemaData = ApifoxSchemaTree[]

interface ApifoxApiDataResponse {
  code: number
  contentType: string
  defaultEnable: boolean
  description: string
  headers: string[]
  id: number
  jsonSchema: ApifoxJsonSchema
  mediaType: string
  name: string
  ordering: number
}

interface ApifoxApiDataRequestParameters {
  description: string
  enable: boolean
  example: string
  id: string
  name: string
  required: boolean
  schema: { format: string; type: string }
  type: string
}

interface ApifoxApiData {
  advancedSettings: { disabledSystemHeaders: object }
  auth: object
  codeSamples: string[]
  commonParameters: {
    body: string[]
    cookie: string[]
    query: string[]
    header: string[]
  }
  commonResponseStatus: object
  createdAt: string
  creatorId: number
  customApiFields: object
  description: string
  editorId: number
  folderId: number
  id: number
  inheritPostProcessors: object
  inheritPreProcessors: object
  method: 'get' | 'post' | 'put'
  mockScript: object
  name: string
  operationId: string
  ordering: number
  parameters: {
    path: ApifoxApiDataRequestParameters[]
    cookie: string[]
    query: ApifoxApiDataRequestParameters[]
    header: string[]
  }
  path: string
  postProcessors: object
  preProcessors: object
  projectId: number
  requestBody: {
    example: string
    parameters: string[]
    type: string
    jsonSchema?: ApifoxJsonSchema
  }
  responseChildren: string[]
  responseExamples: Record<
    number,
    { data: string; id: number; name: string; ordering: number }
  >
  responses: ApifoxApiDataResponse[]
  responsibleId: number
  serverId: number
  sourceUrl: string
  status: 'developing' | 'finis'
  tags: string[]
  updatedAt: string
  visibility: 'INHERITED'
  type: 'http'
}

export type TProjectInfo = Project & {
  cats: Category[]
  getMockUrl: () => string
  getDevUrl: (value: string) => string
  getProdUrl: (value: string) => string
}

export class ApifoxToYApiData {
  private schemas: Record<string | number, ApifoxSchemaTree['jsonSchema']>

  private folders: ApifoxFolderData

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

  constructor(options: ApifoxToYApiDataOptions) {
    this.schemas = {}
    this.folders = []
    this.options = options
  }

  /**
   * http-api-tree 这个接口拿到所有的folder（category）
   * data-schemas 这个接口拿到所用通用的schema
   */
  async getProjectInfo(): Promise<TProjectInfo> {
    const folders: { data: { success: boolean; data: ApifoxFolderData } } =
      await axios.get(
        `https://apifox.com/api/v1/shared-docs/${this.options.token}/http-api-tree`,
      )
    const schemas: { data: { success: boolean; data: ApifoxSchemaData } } =
      await axios.get(
        `https://apifox.com/api/v1/shared-docs/${this.options.token}/data-schemas`,
      )
    // 初始化
    schemas.data.data.forEach(item => {
      this.schemas[item.id] = item.jsonSchema
    })
    this.folders = folders.data.data

    // const categoryIds = getFilteredCat(this.options, [])

    // 由于这里面所有的cats是递归的，所以涉及到多层级的cats如果判定权限。这里先做一遍过滤，后续就不再做了
    // const cats: Category[] = folders.data.data.map(item => ({
    //   _id: item.folder.id,
    //   _url: '',
    //   name: item.name,
    //   desc: item.key,
    //   list: [],
    //   add_time: 0,
    //   up_time: 0,
    // }))

    this.project._id = schemas.data.data[0].projectId

    return {
      ...this.project,
      cats: [],
      getMockUrl: () => '',
      getDevUrl: () => '',
      getProdUrl: () => '',
    }
  }

  /**
   * 根据筛选后的权限目录，对当前folder进行筛选
   * 如果传入的cats为空，表明获取所有
   */
  private getValidCat(cats: number[], allFolders = this.folders) {
    const folders: number[] = []
    allFolders.forEach(item => {
      if (item.type !== 'apiDetailFolder') return
      if (cats.length && !cats.includes(item.folder.id)) return

      folders.push(item.folder.id)
      if (item.type === 'apiDetailFolder' && item.children.length) {
        folders.push(...this.getValidCat(cats, item.children as any))
      }
    })
    return folders
  }

  /**
   * 根据传入的目录配置，返回有效的目录列表
   */
  getCats(cats: CategoryConfig) {
    const categoryIds = getFilteredCat(cats, [])
    // 对cat进行有效性过滤
    return this.getValidCat(categoryIds)
  }

  /**
   * 通过目录的ID查找目录
   */
  findCats(id: number, folders = this.folders): ApifoxFolderTree | null {
    let folder: ApifoxFolderTree | null = null
    folders.forEach(item => {
      if (folder) return
      if (item.type === 'apiDetailFolder' && item.folder.id === id) {
        folder = item
        return
      }
      if (item.type === 'apiDetailFolder' && item.children) {
        folder = this.findCats(id, item.children as any)
      }
    })
    return folder
  }

  /**
   * 由于yapi中基本没有处理ref的方案
   * 都是直接由具体的参数值管理，所以这里需要对所有的ref进行转换
   *
   * 在apifox中，对于cat来说，cat的children有可能是folder，对于folder，我们要过滤掉
   */
  async getInterfaceList(
    syntheticalConfig: SyntheticalConfig,
  ): Promise<InterfaceList> {
    // syntheticalConfig.id 就是catId
    const cat = this.findCats(syntheticalConfig.id as number)
    if (!cat) return []

    const transformRefToSchema = (refString: string) => {
      const refId = refString.split('/').pop()!
      return this.schemas[refId]
    }

    return Promise.all(
      cat.children
        .filter(child => child.type === 'apiDetail')
        .map<Promise<Interface>>(async child => {
          const result: {
            data: { success: boolean; data: ApifoxApiData }
          } = await axios.get(
            `https://apifox.com/api/v1/shared-docs/${this.options.token}/http-apis/${child.api.id}`,
          )
          const resultData = result.data.data

          // 根据result对应的param查询制定的schema
          const resbodyIndex = resultData.responses.findIndex(
            item => item.code === 200,
          )
          // 处理response重可能存在ref
          const respref =
            resultData.responses[resbodyIndex].jsonSchema?.properties?.data
              ?.items?.$ref
          if (respref) {
            // @ts-ignore
            resultData.responses[
              resbodyIndex
            ].jsonSchema.properties.data.items = transformRefToSchema(respref)
          }

          // 处理data中可能存在ref的问题
          // 这里只考虑了一层，如果存在多层，需要递归处理
          const dataProperties =
            resultData.responses[resbodyIndex].jsonSchema?.properties?.data
              ?.properties
          if (dataProperties) {
            for (const item in dataProperties) {
              // @ts-ignore
              const dataPropRef = dataProperties[item].items?.['$ref']
              // @ts-ignore
              if (dataProperties[item].type === 'array' && dataPropRef) {
                // @ts-ignore
                resultData.responses[
                  resbodyIndex
                ].jsonSchema.properties.data.properties[item].items =
                  transformRefToSchema(dataPropRef)
              }
            }
          }

          // 处理request中可能存在的ref
          if (
            resultData.requestBody.jsonSchema?.['x-apifox-refs'] &&
            resultData.requestBody.jsonSchema?.['x-apifox-orders']
          ) {
            // @ts-ignore
            const reqref =
              resultData.requestBody.jsonSchema['x-apifox-refs'][
                resultData.requestBody.jsonSchema['x-apifox-orders'][0]
              ]
            resultData.requestBody.jsonSchema.properties = transformRefToSchema(
              reqref['$ref'],
            ).properties
            // @ts-ignore
            resultData.requestBody.jsonSchema['required'] = reqref.required

            delete resultData.requestBody.jsonSchema['x-apifox-refs']
            delete resultData.requestBody.jsonSchema['x-apifox-orders']
          }

          return {
            _id: resultData.id,
            _category: {
              _id: syntheticalConfig.id as number,
              _url: '',
              name: cat.name,
              desc: '',
              add_time: 0,
              up_time: 0,
              list: [],
            },
            _project: { ...this.project },
            _url: '',
            title: resultData.name,
            status: 'undone',
            markdown: resultData.operationId,
            path: resultData.path,
            method: resultData.method.toUpperCase() as Method,
            project_id: resultData.projectId,
            catid: syntheticalConfig.id as number,
            tag: resultData.tags,
            req_headers: resultData.requestBody.type
              ? [
                  {
                    name: 'Content-Type',
                    value: resultData.requestBody.type,
                    desc: '',
                    example: '',
                    required: Required.true,
                  },
                ]
              : [],
            req_params:
              resultData.parameters.path?.map(item => ({
                name: item.name,
                desc: item.description,
                example: '',
                required: item.required ? Required.true : Required.false,
                type:
                  item.type === 'string'
                    ? RequestParamType.string
                    : RequestParamType.number,
              })) || [],
            req_query:
              resultData.parameters.query?.map(item => ({
                name: item.name,
                desc: item.description,
                example: '',
                required: item.required ? Required.true : Required.false,
                type:
                  item.type === 'string'
                    ? RequestQueryType.string
                    : RequestQueryType.number,
              })) || [],
            req_body_type: resultData.requestBody.jsonSchema
              ? RequestBodyType.json
              : RequestBodyType.raw,
            req_body_is_json_schema: !!resultData.requestBody.jsonSchema,
            req_body_form: [],
            req_body_other: resultData.requestBody.jsonSchema
              ? JSON.stringify(resultData.requestBody.jsonSchema)
              : '',
            res_body_type: ResponseBodyType.json,
            res_body_is_json_schema: true,
            res_body: JSON.stringify(
              resultData.responses[resbodyIndex].jsonSchema,
            ),
            add_time: Math.floor(
              new Date(resultData.createdAt).getTime() / 1000,
            ),
            up_time: Math.floor(
              new Date(resultData.updatedAt).getTime() / 1000,
            ),
            uid: 0,
          }
        }),
    )
  }
}

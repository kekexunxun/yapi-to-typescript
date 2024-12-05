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

export interface ApifoxToYApiDataOptions {
  /** 这里的token等同于apifox的shareId */
  token: string
  /** 判断要获取哪些category */
  categories: CategoryConfig[]
}

interface ApifoxFolderData {
  key: string
  type: string
  name: string
  children: {
    key: string
    type: string
    name: string
    children: any[]
    api: {
      id: number
      name: string
      type: string
      method: string
      path: string
      folderId: number
      tags: string[]
      status: string
      responsibleId: number
      customApiFields: object
      visibility: string
    }
  }[]
  folder: {
    id: number
    name: string
    docId: number
    parentId: number
    projectBranchId: number
    shareSettings: object
    visibility: string
    type: string
  }
}

interface ApifoxSchemaDataProp {
  type: string
  title: string
  format?: string
  description?: string
}

interface ApifoxSchemaData {
  id: number
  name: string
  displayName: string
  jsonSchema: {
    type: string
    properties: {
      account: ApifoxSchemaDataProp
      charge: ApifoxSchemaDataProp
      description: ApifoxSchemaDataProp
      email: ApifoxSchemaDataProp
      icon: ApifoxSchemaDataProp
      id: ApifoxSchemaDataProp
      name: ApifoxSchemaDataProp
      publicShow: ApifoxSchemaDataProp
      receiveAccount: ApifoxSchemaDataProp
      receiveType: ApifoxSchemaDataProp
      server: ApifoxSchemaDataProp
      serverId: ApifoxSchemaDataProp
      showId: ApifoxSchemaDataProp
      status: ApifoxSchemaDataProp
      subTime: ApifoxSchemaDataProp
      subscribeFee: ApifoxSchemaDataProp
      upperLimit: ApifoxSchemaDataProp
      userId: ApifoxSchemaDataProp
      verifyStatus: ApifoxSchemaDataProp
      verifyTime: ApifoxSchemaDataProp
      verifyUser: ApifoxSchemaDataProp
    }
    title: string
  }
  folderId: number
  description: string
  projectId: number
  ordering: number
  creatorId: number
  editorId: number
  createdAt: string
  updatedAt: string
  visibility: string
}

interface ApifoxInterfaceData {
  id: number
  name: string
  type: string
  serverId: string
  preProcessors: any[]
  postProcessors: any[]
  inheritPreProcessors: {}
  inheritPostProcessors: {}
  description: string
  operationId: string
  sourceUrl: string
  method: string
  path: string
  tags: string[]
  status: string
  requestBody: {
    type: string
    parameters: any[]
    jsonSchema: {
      'title': string
      'type': string
      'properties': {}
      'x-apifox-refs'?: {}
      'x-apifox-orders'?: []
    }
    example: string
  }
  parameters: {
    query: {
      description: string
      enable: boolean
      id: string
      name: string
      required: boolean
      schema: { type: string; format: string }
      type: string
    }[]
    path: {
      description: string
      enable: boolean
      id: string
      name: string
      required: boolean
      schema: { type: string; format: string }
      type: string
    }[]
    cookie: any[]
    header: any[]
  }
  commonParameters: {
    query: any[]
    body: any[]
    cookie: any[]
    header: any[]
  }
  auth: {}
  responses: {
    id: number
    name: string
    code: number
    contentType: string
    jsonSchema: {
      type: string
      properties: {
        code: { type: string }
        msg: { type: string }
        data: { items?: { $ref?: string }; properties?: {} }
      }
      required: string[]
    }
    defaultEnable: boolean
    ordering: number
    description: string
    mediaType: string
    headers: any[]
  }[]
  responseExamples: {
    id: number
    name: string
    responseId: number
    data: string
    ordering: number
  }[]
  codeSamples: any[]
  projectId: number
  folderId: number
  ordering: number
  responsibleId: number
  commonResponseStatus: {}
  advancedSettings: { disabledSystemHeaders: {} }
  customApiFields: {}
  mockScript: {}
  createdAt: string
  updatedAt: string
  creatorId: number
  editorId: number
  responseChildren: string[]
  visibility: string
}

export type TProjectInfo = Project & {
  cats: Category[]
  getMockUrl: () => string
  getDevUrl: (value: string) => string
  getProdUrl: (value: string) => string
}

export class ApifoxToYApiData {
  private schemas: Record<string | number, ApifoxSchemaData['jsonSchema']>

  private folders: ApifoxFolderData[]

  private project: Project = {
    _id: 0,
    _url: '',
    name: 'ApifoxProject',
    desc: '',
    basepath: '',
    tag: [],
    env: [{ name: '', domain: '' }],
  }

  constructor(private readonly options: ApifoxToYApiDataOptions) {
    this.schemas = {}
    this.folders = []
  }

  /**
   * http-api-tree 这个接口拿到所有的folder（category）
   * data-schemas 这个接口拿到所用通用的schema
   */
  async getProjectInfo(): Promise<TProjectInfo> {
    const folders: { data: { success: boolean; data: ApifoxFolderData[] } } =
      await axios.get(
        `https://apifox.com/api/v1/shared-docs/${this.options.token}/http-api-tree`,
      )
    const schemas: { data: { success: boolean; data: ApifoxSchemaData[] } } =
      await axios.get(
        `https://apifox.com/api/v1/shared-docs/${this.options.token}/data-schemas`,
      )
    // 初始化
    // this.schemas = schemas.data.data
    schemas.data.data.forEach(item => {
      this.schemas[item.id] = item.jsonSchema
    })
    this.folders = folders.data.data

    const cats: Category[] = folders.data.data.map(item => ({
      _id: item.folder.id,
      _url: '',
      name: item.name,
      desc: item.key,
      list: [],
      add_time: 0,
      up_time: 0,
    }))

    this.project._id = schemas.data.data[0].projectId

    return {
      ...this.project,
      cats,
      getMockUrl: () => '',
      getDevUrl: () => '',
      getProdUrl: () => '',
    }
  }

  /**
   * 由于yapi中基本没有处理ref的方案
   * 都是直接由具体的参数值管理，所以这里需要对所有的ref进行转换
   * TODO：目前这里只考虑了一个层级，如果是多个层级，需要再递归处理
   */
  async getInterfaceList(
    syntheticalConfig: SyntheticalConfig,
  ): Promise<InterfaceList> {
    // syntheticalConfig.id 就是catId
    const cat = this.folders.find(
      item => item.folder.id === syntheticalConfig.id,
    )
    if (!cat) return []

    const transformRefToSchema = (refString: string) => {
      const refId = refString.split('/').pop()!
      return this.schemas[refId]
    }

    return Promise.all(
      cat.children.map<Promise<Interface>>(async item => {
        const result: {
          data: { success: boolean; data: ApifoxInterfaceData }
        } = await axios.get(
          `https://apifox.com/api/v1/shared-docs/${this.options.token}/http-apis/${item.api.id}`,
        )
        const resultData = result.data.data

        // 根据result对应的param查询制定的schema
        const resbodyIndex = resultData.responses.findIndex(
          item => item.code === 200,
        )
        // 处理response重可能存在ref
        const respref =
          resultData.responses[resbodyIndex].jsonSchema?.properties?.data?.items
            ?.$ref
        if (respref) {
          // @ts-ignore
          resultData.responses[resbodyIndex].jsonSchema.properties.data.items =
            transformRefToSchema(respref)
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
        if (resultData.requestBody.jsonSchema?.['x-apifox-refs']) {
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
          add_time: Math.floor(new Date(resultData.createdAt).getTime() / 1000),
          up_time: Math.floor(new Date(resultData.updatedAt).getTime() / 1000),
          uid: 0,
        }
      }),
    )
  }
}

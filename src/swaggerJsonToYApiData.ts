// @ts-nocheck
// ref: https://github.com/YMFE/yapi/blob/master/exts/yapi-plugin-import-swagger/run.js

import dayjs from 'dayjs'
import swagger from 'swagger-client'
import { Category, Interface, Project } from './types'
import { each, find } from './mini-ut'
import { OpenAPIV2 as SwaggerType } from 'openapi-types'

let SwaggerData, isOAS3

function handlePath(path) {
  if (path === '/') return path
  if (path.charAt(0) !== '/') {
    path = `/${path}`
  }
  if (path.charAt(path.length - 1) === '/') {
    path = path.substr(0, path.length - 1)
  }
  return path
}

/** OpenAPI 3.x 媒体类型的优先级，用于从 content 中挑选请求/响应体 */
const PREFERRED_MEDIA_TYPES = [
  'application/json',
  'application/hal+json',
  'application/problem+json',
  'application/geo+json',
  'text/json',
  '*/*',
]

/**
 * 从 content 映射中挑选优先级最高的媒体类型对应的内容对象。
 *
 * @param content OpenAPI 3.x 的 content 映射
 * @param jsonOnly 是否只接受 JSON 类的媒体类型（请求体场景，保持与原有行为一致）
 */
function pickContentByMediaType(content, jsonOnly = false) {
  if (!content || typeof content !== 'object') return null

  const mediaTypes = Object.keys(content).filter(type => {
    const value = content[type]
    return value && typeof value === 'object'
  })
  const candidates = jsonOnly
    ? mediaTypes.filter(
        type => type === '*/*' || type.includes('json') || type.includes('*'),
      )
    : mediaTypes
  if (!candidates.length) return null

  const matched =
    PREFERRED_MEDIA_TYPES.find(type => candidates.includes(type)) ||
    candidates.find(type => type.includes('json')) ||
    candidates[0]

  return content[matched]
}

/** 兼容 Swagger 2.0 的 schema 与 OpenAPI 3.x 的 content，取出其中的 JSONSchema */
function getJsonSchemaFromContent(target, jsonOnly = false) {
  if (!target || typeof target !== 'object') return null
  if (target.schema) return target.schema

  const content = pickContentByMediaType(target.content, jsonOnly)
  return content && content.schema ? content.schema : null
}

function openapi2swagger(data) {
  data.swagger = '2.0'
  each(data.paths, apis => {
    each(apis, api => {
      each(api.responses, res => {
        const content = pickContentByMediaType(res && res.content)
        if (content) {
          Object.assign(res, content)
          delete res.content
        }
      })
      if (api.requestBody) {
        if (!api.parameters) api.parameters = []
        const body = {
          type: 'object',
          name: 'body',
          in: 'body',
        }
        const requestBodyContent = pickContentByMediaType(
          api.requestBody.content,
          true,
        )
        body.schema = (requestBodyContent && requestBodyContent.schema) || {}

        api.parameters.push(body)
      }
    })
  })

  return data
}

async function handleSwaggerData(res) {
  return new Promise(resolve => {
    const data = swagger({
      spec: res,
    })

    data.then(res => {
      resolve(res.spec)
    })
  })
}

async function run(res): {
  apis: Interface[]
  cats: Category[]
  basePath: string
  swaggerData: SwaggerType.Document
} {
  const interfaceData = { apis: [], cats: [], basePath: '', swaggerData: {} }
  if (typeof res === 'string' && res) {
    try {
      res = JSON.parse(res)
    } catch (e) {
      console.error('json 解析出错', e.message)
    }
  }

  isOAS3 = res.openapi && String(res.openapi).startsWith('3.')
  if (isOAS3) {
    res = openapi2swagger(res)
  }
  res = await handleSwaggerData(res)
  SwaggerData = res
  interfaceData.swaggerData = SwaggerData

  interfaceData.basePath = res.basePath || ''

  if (res.tags && Array.isArray(res.tags)) {
    res.tags.forEach(tag => {
      interfaceData.cats.push({
        name: tag.name,
        desc: tag.description,
      })
    })
  } else {
    res.tags = []
  }

  each(res.paths, (apis, path) => {
    // parameters is common parameters, not a method
    delete apis.parameters
    each(apis, (api, method) => {
      api.path = path
      api.method = method
      let data = null
      try {
        data = handleSwagger(api, res.tags)
        if (data.catname) {
          if (!find(interfaceData.cats, item => item.name === data.catname)) {
            if (res.tags.length === 0) {
              interfaceData.cats.push({
                name: data.catname,
                desc: data.catname,
              })
            }
          }
        }
      } catch (err) {
        data = null
      }
      if (data) {
        interfaceData.apis.push(data)
      }
    })
  })

  interfaceData.cats = interfaceData.cats.filter(catData => {
    const catName = catData.name
    return find(interfaceData.apis, apiData => {
      return apiData.catname === catName
    })
  })

  return interfaceData
}

function handleSwagger(data, originTags = []) {
  const api = {}
  //处理基本信息
  api.method = data.method.toUpperCase()
  api.title = data.summary || data.path
  api.desc = data.description
  api.catname = null
  if (data.tags && Array.isArray(data.tags)) {
    api.tag = data.tags
    for (let i = 0; i < data.tags.length; i++) {
      if (/v[0-9.]+/.test(data.tags[i])) {
        continue
      }

      // 如果根路径有 tags，使用根路径 tags,不使用每个接口定义的 tag 做完分类
      if (
        originTags.length > 0 &&
        find(originTags, item => {
          return item.name === data.tags[i]
        })
      ) {
        api.catname = data.tags[i]
        break
      }

      if (originTags.length === 0) {
        api.catname = data.tags[i]
        break
      }
    }
  }

  api.path = handlePath(data.path)
  api.req_params = []
  api.req_body_form = []
  api.req_headers = []
  api.req_query = []
  api.req_body_type = 'raw'
  api.res_body_type = 'raw'

  if (data.produces && data.produces.indexOf('application/json') > -1) {
    api.res_body_type = 'json'
    api.res_body_is_json_schema = true
  }

  if (data.consumes && Array.isArray(data.consumes)) {
    if (
      data.consumes.indexOf('application/x-www-form-urlencoded') > -1 ||
      data.consumes.indexOf('multipart/form-data') > -1
    ) {
      api.req_body_type = 'form'
    } else if (data.consumes.indexOf('application/json') > -1) {
      api.req_body_type = 'json'
      api.req_body_is_json_schema = true
    }
  }

  //处理response
  api.res_body = handleResponse(data.responses)
  try {
    JSON.parse(api.res_body)
    api.res_body_type = 'json'
    api.res_body_is_json_schema = true
  } catch (e) {
    api.res_body_type = 'raw'
  }
  //处理参数
  function simpleJsonPathParse(key, json) {
    if (
      !key ||
      typeof key !== 'string' ||
      key.indexOf('#/') !== 0 ||
      key.length <= 2
    ) {
      return null
    }
    let keys = key.substr(2).split('/')
    keys = keys.filter(item => {
      return item
    })
    for (let i = 0, l = keys.length; i < l; i++) {
      try {
        json = json[keys[i]]
      } catch (e) {
        json = ''
        break
      }
    }
    return json
  }

  if (data.parameters && Array.isArray(data.parameters)) {
    data.parameters.forEach(param => {
      if (param && typeof param === 'object' && param.$ref) {
        param = simpleJsonPathParse(param.$ref, {
          parameters: SwaggerData.parameters,
        })
      }
      const defaultParam = {
        name: param.name,
        desc: param.description,
        required: param.required ? '1' : '0',
      }

      if (param.in) {
        switch (param.in) {
          case 'path':
            defaultParam.type = param.type
            api.req_params.push(defaultParam)
            break
          case 'query':
            defaultParam.type = param.type
            api.req_query.push(defaultParam)
            break
          case 'body':
            handleBodyPamras(param.schema, api)
            break
          case 'formData':
            defaultParam.type = param.type === 'file' ? 'file' : 'text'
            if (param.example) {
              defaultParam.example = param.example
            }
            api.req_body_form.push(defaultParam)
            break
          case 'header':
            api.req_headers.push(defaultParam)
            break
          default:
            break
        }
      } else {
        api.req_query.push(defaultParam)
      }
    })
  }

  return api
}

function isJson(json) {
  try {
    return JSON.parse(json)
  } catch (e) {
    return false
  }
}

/**
 * 断开 JSONSchema 中的循环引用（如树形结构自引用），避免 JSON.stringify 抛错。
 * swagger-client 解析 $ref 后会把引用展开成共享对象，其中指向祖先的引用即为循环。
 */
function disconnectCycles(node, ancestors = new Set()) {
  if (!node || typeof node !== 'object') return node
  if (ancestors.has(node)) {
    return { type: 'object', description: '存在循环引用，已截断' }
  }
  ancestors.add(node)

  let result
  if (Array.isArray(node)) {
    result = node.map(item => disconnectCycles(item, ancestors))
  } else {
    result = {}
    Object.keys(node).forEach(key => {
      // $$ref 是 swagger-client 解析 $ref 后留下的标记，对类型生成无意义
      if (key === '$$ref') return
      result[key] = disconnectCycles(node[key], ancestors)
    })
  }
  ancestors.delete(node)

  return result
}

/** 序列化 JSONSchema，遇到循环引用时自动断开，保证不会因抛错而丢失整个接口 */
function stringifyJsonSchema(schema) {
  try {
    // 顺手剔除 swagger-client 留下的 $$ref 标记
    return JSON.stringify(
      schema,
      (key, value) => (key === '$$ref' ? undefined : value),
      2,
    )
  } catch (e) {
    return JSON.stringify(disconnectCycles(schema), null, 2)
  }
}

function handleBodyPamras(data, api) {
  api.req_body_other = stringifyJsonSchema(data)
  if (isJson(api.req_body_other)) {
    api.req_body_type = 'json'
    api.req_body_is_json_schema = true
  }
}

/** 状态码的取值优先级：200 > 其他 2xx > default > 其他 */
function responseCodeWeight(code) {
  if (code === '200') return 0
  if (/^2\d\d$/.test(code)) return 1
  if (code === 'default') return 2
  return 3
}

function handleResponse(api) {
  let res_body = ''
  if (!api || typeof api !== 'object') {
    return res_body
  }
  const codes = Object.keys(api)
  if (!codes.length) {
    return res_body
  }

  const sortedCodes = [...codes].sort(
    (a, b) => responseCodeWeight(a) - responseCodeWeight(b),
  )

  // 优先取真正带有 schema 的状态码，避免 204 等仅有描述的响应导致类型退化为 any
  for (const code of sortedCodes) {
    const res = api[code]
    const schema =
      res && typeof res === 'object' ? getJsonSchemaFromContent(res) : null
    if (schema) {
      return stringifyJsonSchema(schema)
    }
  }

  const res = api[sortedCodes[0]]
  if (typeof res === 'string') {
    res_body = res
  } else if (res && typeof res === 'object' && res.description) {
    res_body = res.description
  }

  return res_body
}

export async function swaggerJsonToYApiData(data: any): Promise<{
  project: Project
  cats: Category[]
  interfaces: Interface[]
}> {
  const yapiData = await run(data)

  // 兼容没有分类的情况
  if (!yapiData.cats.length) {
    yapiData.cats = [
      {
        name: 'default',
        desc: 'default',
      },
    ]
    yapiData.apis.forEach(api => {
      api.catname = 'default'
    })
  }

  const currentTime = dayjs().unix()
  const project: Project = {
    _id: 0,
    name: yapiData.swaggerData.info.title,
    desc: yapiData.swaggerData.info.description || '',
    basepath: yapiData.swaggerData.basePath || '',
    tag: [],
    env: [
      {
        name: 'local',
        domain: `${yapiData.swaggerData.schemes?.[0] || 'http'}://${
          yapiData.swaggerData.host || '127.0.0.1'
        }`,
      },
    ],
  }
  const cats = yapiData.cats.map<Category>((cat, index) => ({
    _id: index + 1,
    name: cat.name,
    desc: cat.desc,
    add_time: currentTime,
    up_time: currentTime,
  }))
  const interfaces = yapiData.apis.map<Interface>((api, index) => ({
    ...api,
    _id: index + 1,
    project_id: 0,
    catid: cats.find(cat => cat.name === api.catname)?._id || -1,
    tag: api.tag || [],
    add_time: currentTime,
    up_time: currentTime,
  }))

  return { project, cats, interfaces }
}

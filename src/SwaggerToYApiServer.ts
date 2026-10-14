import fs from 'fs-extra'
import getAvailablePort from 'get-port'
import http from 'http'
import { onExit } from 'signal-exit'
import path from 'path'
import url from 'url'
import { AsyncReturnType, isEmpty } from './mini-ut'
import { httpGet } from './utils'
import { swaggerJsonToYApiData } from './swaggerJsonToYApiData'
import { OpenAPIV2 as SwaggerType } from 'openapi-types'

export interface SwaggerToYApiServerOptions {
  /** 远程 Swagger/OpenAPI JSON 地址（serverType = 'swagger' 时使用） */
  swaggerJsonUrl?: string
  /** 本地 Swagger/OpenAPI JSON 文件路径（serverType = 'local' 时使用） */
  swaggerJsonPath?: string
}

/** OpenAPI 3.x 中 components 下的各个引用分区 */
const COMPONENT_SECTIONS = [
  'schemas',
  'responses',
  'parameters',
  'examples',
  'requestBodies',
  'headers',
  'securitySchemes',
  'links',
  'callbacks',
]

/** Swagger 2.0 中与 components 各分区对应的根级字段 */
const SWAGGER_ROOT_SECTIONS = [
  'definitions',
  'responses',
  'parameters',
  'securityDefinitions',
]

/**
 * 合并两份 OpenAPI/Swagger 文档的引用表。
 *
 * 必须合并 components 下的所有分区（而不仅是 schemas）：接口常以
 * `$ref: '#/components/responses/Xxx'` 引用响应定义，一旦该分区丢失，
 * 对应的 $ref 无法解析，生成的响应类型会退化为 any。
 */
function mergeReferenceSections(acc: any, doc: any) {
  const merged: any = { ...acc }
  for (const section of COMPONENT_SECTIONS) {
    const docSection = doc.components?.[section]
    if (docSection) {
      merged.components = {
        ...(merged.components || {}),
        [section]: {
          ...(merged.components?.[section] || {}),
          ...docSection,
        },
      }
    }
  }
  for (const section of SWAGGER_ROOT_SECTIONS) {
    if (doc[section]) {
      merged[section] = { ...(merged[section] || {}), ...doc[section] }
    }
  }
  return merged
}

export class SwaggerToYApiServer {
  private port = 0

  private swaggerJson: SwaggerType.Document = {} as any

  private httpServer: http.Server | null = null

  private yapiData: AsyncReturnType<typeof swaggerJsonToYApiData> = {} as any

  constructor(private readonly options: SwaggerToYApiServerOptions) {}

  async getPort(): Promise<number> {
    if (this.port === 0) {
      this.port = await getAvailablePort({
        port: 50505,
      })
    }
    return this.port
  }

  async getUrl(): Promise<string> {
    return `http://127.0.0.1:${await this.getPort()}`
  }

  async getSwaggerJson(): Promise<SwaggerType.Document> {
    if (isEmpty(this.swaggerJson)) {
      if (this.options.swaggerJsonPath) {
        const absPath = path.resolve(this.options.swaggerJsonPath)
        if (!(await fs.pathExists(absPath))) {
          throw new Error(`本地 OpenAPI/Swagger JSON 文件不存在: ${absPath}`)
        }
        const stat = await fs.stat(absPath)
        if (stat.isDirectory()) {
          // 目录模式：读取并合并目录内所有 JSON 文件
          const files = (await fs.readdir(absPath))
            .filter(f => f.endsWith('.json'))
            .sort()
          if (files.length === 0) {
            throw new Error(`目录中没有找到 JSON 文件: ${absPath}`)
          }
          const docs = await Promise.all(
            files.map(async f => {
              const raw = await fs.readFile(path.join(absPath, f), 'utf-8')
              try {
                return JSON.parse(raw)
              } catch (err) {
                throw new Error(
                  `解析本地 OpenAPI/Swagger JSON 失败: ${path.join(absPath, f)}\n${
                    (err as Error).message
                  }`,
                )
              }
            }),
          )
          // 以第一个文件为骨架，合并 paths、components 引用表以及根级 tags。
          // 根级 tags 必须一起合并并按 name 去重：swaggerJsonToYApiData.handleSwagger
          // 只在接口 tag 命中根 tags 时才赋予 catname，否则接口会被下游按分类过滤丢弃，
          // 表现为目录模式下只产出首个 JSON 对应的那一份模块文件。
          this.swaggerJson = docs.reduce((acc, doc, i) => {
            if (i === 0) return { ...doc }
            const accTags = Array.isArray(acc.tags) ? acc.tags : []
            const docTags = Array.isArray(doc.tags) ? doc.tags : []
            const seen = new Set(accTags.map((t: any) => t?.name))
            const mergedTags = [
              ...accTags,
              ...docTags.filter((t: any) => t?.name && !seen.has(t.name)),
            ]
            return mergeReferenceSections(
              {
                ...acc,
                paths: { ...acc.paths, ...doc.paths },
                tags: mergedTags,
              },
              doc,
            )
          }) as SwaggerType.Document
        } else {
          // 单文件模式
          const raw = await fs.readFile(absPath, 'utf-8')
          try {
            this.swaggerJson = JSON.parse(raw)
          } catch (err) {
            throw new Error(
              `解析本地 OpenAPI/Swagger JSON 失败: ${absPath}\n${
                (err as Error).message
              }`,
            )
          }
        }
      } else if (this.options.swaggerJsonUrl) {
        const res = await httpGet<SwaggerType.Document>(
          this.options.swaggerJsonUrl,
        )
        this.swaggerJson = res
      } else {
        throw new Error(
          'SwaggerToYApiServer: 必须提供 swaggerJsonUrl 或 swaggerJsonPath',
        )
      }
    }
    return this.swaggerJson
  }

  async getYApiData(): Promise<AsyncReturnType<typeof swaggerJsonToYApiData>> {
    if (isEmpty(this.yapiData)) {
      this.yapiData = await swaggerJsonToYApiData(await this.getSwaggerJson())
    }
    return this.yapiData
  }

  async start(): Promise<string> {
    const yapiData = await this.getYApiData()

    await new Promise<void>(async resolve => {
      this.httpServer = http
        .createServer(async (req, res) => {
          const { pathname } = url.parse(req.url || '')
          res.setHeader('Content-Type', 'application/json')
          if (pathname!.includes('/api/plugin/export')) {
            res.end(
              JSON.stringify(
                yapiData.cats.map(cat => ({
                  ...cat,
                  list: yapiData.interfaces.filter(
                    item => item.catid === cat._id,
                  ),
                })),
              ),
            )
          } else if (pathname!.includes('/api/interface/getCatMenu')) {
            res.end(
              JSON.stringify({
                errcode: 0,
                errmsg: '成功！',
                data: yapiData.cats,
              }),
            )
          } else if (pathname!.includes('/api/project/get')) {
            res.end(
              JSON.stringify({
                errcode: 0,
                errmsg: '成功！',
                data: yapiData.project,
              }),
            )
          } else {
            res.end('404')
          }
        })
        .listen(await this.getPort(), '127.0.0.1', () => {
          onExit(() => {
            void this.stop()
          })
          resolve()
        })
    })
    return this.getUrl()
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.httpServer) {
        resolve()
      } else {
        this.httpServer.close(err => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
      }
    })
  }
}

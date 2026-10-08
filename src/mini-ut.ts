/**
 * 轻量内部工具集。仅提供本项目实际使用的类型与基础函数，
 * 语义与 `lodash`/同名的实现保持一致，避免引入重型依赖。
 *
 * 该文件属于内部实现，不通过 `index.ts` 对外暴露。
 */

/* -------------------------------------------------------------------------- */
/*                                  类型工具                                   */
/* -------------------------------------------------------------------------- */

/** 同步或异步返回值。 */
export type AsyncOrSync<T> = PromiseLike<T> | T

/** 解包 Promise 返回类型的异步函数返回值类型。 */
export type AsyncReturnType<T extends (...args: any) => PromiseLike<any>> =
  T extends (...args: any) => PromiseLike<infer R> ? R : never

/** 排除 `undefined` 后的类型。 */
export type Defined<T> = Exclude<T, undefined>

/**
 * 字面量联合类型。既能获得字面量自动补全，又允许同基础类型的其它值。
 */
export type LiteralUnion<LiteralType, BaseType extends string | number> =
  LiteralType | (BaseType & { _?: never })

/** 严格约束 `K` 必须是 `T` 的键的 `Omit`。 */
export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/** 同 `T | T[]`。 */
export type OneOrMore<T> = T | T[]

/* -------------------------------------------------------------------------- */
/*                                 基础判断                                    */
/* -------------------------------------------------------------------------- */

/** 是否为数组。 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

/** 是否为函数（对齐 `lodash.isFunction`，`class` 也视为函数）。 */
export function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === 'function'
}

/** 是否为对象（`lodash.isObject` 语义：非 `null` 的 `object` 或 `function`）。 */
export function isObject(value: any): value is Record<string, any> {
  return (
    value !== null && (typeof value === 'object' || typeof value === 'function')
  )
}

/** 是否为纯对象（构造器为 `Object` 或原型为 `null`）。 */
export function isPlainObject(value: any): value is Record<string, any> {
  if (value === null || typeof value !== 'object') return false
  const proto = Object.getPrototypeOf(value)
  return proto === null || proto === Object.prototype
}

/** 是否为类 Promise 对象。 */
export function isPromiseLike<T = any>(value: any): value is PromiseLike<T> {
  return (
    value != null &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof value.then === 'function'
  )
}

/**
 * 是否为空（对齐 `lodash.isEmpty`）：
 * - `null`/`undefined` -> `true`
 * - 数组 / 字符串 -> `length === 0`
 * - Map / Set -> `size === 0`
 * - 纯对象 -> 没有可枚举自有键
 * - 数字 / 布尔 / 函数 -> `true`
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true
  if (isArray(value) || typeof value === 'string') return value.length === 0
  if (value instanceof Map || value instanceof Set) return value.size === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return true
}

/* -------------------------------------------------------------------------- */
/*                                 集合操作                                    */
/* -------------------------------------------------------------------------- */

/** 将任意值转为数组（`lodash.castArray` 语义）。 */
export function castArray<T>(value?: T | T[] | readonly T[]): T[] {
  if (value === undefined) return [] as unknown as T[]
  return isArray(value) ? (value.slice() as T[]) : [value as T]
}

/** 返回数组最后一项，非数组或空数组返回 `undefined`。 */
export function last<T>(list?: readonly T[] | null): T | undefined {
  return isArray(list) && list.length ? list[list.length - 1] : undefined
}

/** 数组去重（保持首次出现顺序）。 */
export function uniq<T>(list?: readonly T[] | null): T[] {
  return list ? Array.from(new Set(list)) : []
}

/** `Object.values` 的宽松版：非对象返回 `[]`。 */
export function values<T>(obj: Record<string, T> | null | undefined): T[] {
  if (obj === null || obj === undefined) return []
  return Object.keys(obj).map(k => (obj as any)[k])
}

/**
 * 遍历集合（`lodash.forEach` 语义）。
 * - 数组：`(value, index)`
 * - 对象：`(value, key)`
 * 回调显式返回 `false` 时中断遍历。
 */
export function each<T>(
  collection: readonly T[] | null | undefined,
  iteratee: (value: T, key: number) => any,
): void
export function each<T>(
  collection: Record<string, T> | null | undefined,
  iteratee: (value: T, key: string) => any,
): void
export function each(
  collection: any,
  iteratee: (value: any, key: any) => any,
): void {
  if (collection === null || collection === undefined) return
  if (isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (iteratee(collection[i], i) === false) return
    }
  } else if (typeof collection === 'object') {
    for (const key of Object.keys(collection)) {
      if (iteratee(collection[key], key) === false) return
    }
  }
}

/** 遍历对象自有可枚举键（`lodash.forOwn` 语义）。 */
export function forOwn<T>(
  obj: Record<string, T> | null | undefined,
  iteratee: (value: T, key: string) => any,
): void {
  if (obj === null || obj === undefined) return
  for (const key of Object.keys(obj)) {
    if (iteratee(obj[key], key) === false) return
  }
}

/**
 * 查找集合中第一个满足条件的项（`lodash.find` 语义，支持函数 predicate）。
 * 本项目实际调用均为数组或对象 + 函数式 predicate。
 */
export function find<T>(
  collection: readonly T[] | null | undefined,
  predicate: (value: T, key: number) => boolean,
): T | undefined
export function find<T>(
  collection: Record<string, T> | null | undefined,
  predicate: (value: T, key: string) => boolean,
): T | undefined
export function find(
  collection: any,
  predicate: (value: any, key: any) => boolean,
): any {
  if (collection === null || collection === undefined) return undefined
  if (isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i)) return collection[i]
    }
  } else if (typeof collection === 'object') {
    for (const key of Object.keys(collection)) {
      if (predicate(collection[key], key)) return collection[key]
    }
  }
  return undefined
}

/** 按 `iteratee` 结果分组（`lodash.groupBy` 语义）。 */
export function groupBy<T>(
  list: readonly T[] | null | undefined,
  iteratee: (value: T) => string | number,
): Record<string, T[]> {
  const result: Record<string, T[]> = {}
  if (!list) return result
  for (const item of list) {
    const key = String(iteratee(item))
    if (!Object.prototype.hasOwnProperty.call(result, key)) result[key] = []
    result[key].push(item)
  }
  return result
}

/** 浅拷贝对象，剔除指定顶层键（`lodash.omit` 简化版，够用即可）。 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Omit<T, K> {
  if (obj === null || obj === undefined) return obj as any
  const result: any = {}
  const drop = new Set<string>(keys as any)
  for (const key of Object.keys(obj)) {
    if (!drop.has(key)) result[key] = obj[key]
  }
  return result
}

/** 基于 `iteratee` 重映射对象的键（`lodash.mapKeys` 简化版）。 */
export function mapKeys<T>(
  obj: Record<string, T> | null | undefined,
  iteratee: (value: T, key: string) => string,
): Record<string, T> {
  const result: Record<string, T> = {}
  if (!obj) return result
  for (const key of Object.keys(obj)) {
    result[iteratee(obj[key], key)] = obj[key]
  }
  return result
}

/** 空函数，常用于 `.catch(noop)` 吞掉错误。 */
export function noop(): void {
  /* 空实现 */
}

/* -------------------------------------------------------------------------- */
/*                                 克隆与遍历                                  */
/* -------------------------------------------------------------------------- */

/**
 * 深克隆（对齐 vtils `cloneDeepFast`：只处理普通对象 / 数组 / Date，
 * 其它引用值按浅拷贝，性能优于 JSON 版）。
 */
export function cloneDeepFast<T>(value: T): T {
  if (value === null || typeof value !== 'object') return value
  if (value instanceof Date) return new Date(value.getTime()) as any
  if (isArray(value))
    return (value as any[]).map(item => cloneDeepFast(item)) as any
  const o2: Record<string, any> = {}
  for (const key of Object.keys(value as any)) {
    o2[key] = cloneDeepFast((value as any)[key])
  }
  return o2 as any
}

/**
 * 深度遍历（对齐 vtils `traverse`：数组按 index、纯对象按 key 递归；
 * 回调形如 `(value, key, parent)`）。
 */
export function traverse(
  value: any,
  callback: (value: any, key: any, parent: any) => void,
): void {
  if (isArray(value)) {
    value.forEach((item, index) => {
      callback(item, index, value)
      if (value[index] !== undefined) traverse(item, callback)
    })
  } else if (isPlainObject(value)) {
    forOwn(value, (item, key) => {
      callback(item, key, value)
      if (Object.prototype.hasOwnProperty.call(value, key))
        traverse(item, callback)
    })
  }
}

/* -------------------------------------------------------------------------- */
/*                            文本、函数、异步辅助                              */
/* -------------------------------------------------------------------------- */

/**
 * 空行 / 缩进剥离（对齐 vtils `dedent`）：
 * - 支持模板字符串标签用法：`dedent\`...\``
 * - 支持字符串参数用法：`dedent(text)`
 * 行为：移除首尾空行，按最短公共前导空白对齐去缩进。
 */
export function dedent(
  input: string | TemplateStringsArray,
  ...values: any[]
): string {
  let text: string
  if (typeof input === 'string') {
    text = input
  } else {
    // 模板字符串：把 substitutions 拼回字符串
    text = input.reduce(
      (acc, chunk, i) =>
        acc + chunk + (i < values.length ? String(values[i]) : ''),
      '',
    )
  }

  const lines = text.split('\n')
  let commonLeadingWhitespace: string | null = null
  let firstLineIndex: number | null = null
  let lastLineIndex: number | null = null

  for (let index = 0; index < lines.length; index++) {
    const leading = lines[index].match(/^\s*/)![0]
    // 纯空白行（包括空行）不参与最短缩进计算
    if (leading.length !== lines[index].length) {
      lastLineIndex = index
      if (firstLineIndex === null) firstLineIndex = index
      if (
        commonLeadingWhitespace === null ||
        leading.length < commonLeadingWhitespace.length
      ) {
        commonLeadingWhitespace = leading
      }
    }
  }

  if (
    commonLeadingWhitespace === null ||
    firstLineIndex === null ||
    lastLineIndex === null
  ) {
    return text
  }
  return lines
    .slice(firstLineIndex, lastLineIndex + 1)
    .map(line => line.substr(commonLeadingWhitespace!.length))
    .join('\n')
}

/**
 * 缓存函数结果（对齐 `lodash.memoize` 简化版）。
 * - 未传 `resolver` 时以第一个入参做 Map key；
 * - 传入 `resolver` 时以 `resolver(...args)` 的结果做 Map key。
 */
export function memoize<F extends (...args: any[]) => any>(
  fn: F,
  resolver?: (...args: Parameters<F>) => any,
): F {
  const cache = new Map<any, any>()
  const wrapped = function (this: any, ...args: any[]) {
    const key = resolver ? resolver.apply(this, args as any) : args[0]
    if (cache.has(key)) return cache.get(key)
    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
  }
  return wrapped as F
}

/**
 * 以 Go 风格返回 `[err, value]`（对齐 vtils `run`）。
 * 支持同步 / 异步函数；出错时 err 有值，value 为 `undefined`。
 */
export function run<T>(
  fn: () => T | PromiseLike<T>,
): Promise<[null, T] | [any, undefined]> {
  return new Promise(resolve => {
    try {
      const res = fn()
      if (!isPromiseLike(res)) return resolve([null, res as T])
      Promise.resolve(res as PromiseLike<T>).then(
        value => resolve([null, value]),
        err => resolve([err, undefined]),
      )
    } catch (err) {
      resolve([err, undefined])
    }
  })
}

/** 等待一段时间的 Promise，附带 `.cancel()`（对齐 vtils `wait`）。 */
export function wait<T = void>(
  milliseconds: number,
  value?: T,
): Promise<T> & {
  cancel: () => void
} {
  let timer: any
  const promise: any = new Promise(resolve => {
    timer = setTimeout(() => resolve(value as T), milliseconds)
  })
  promise.cancel = () => clearTimeout(timer)
  return promise
}

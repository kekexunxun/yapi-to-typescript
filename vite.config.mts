import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// 使用 import.meta.dirname 而非 __dirname：配置文件以 .mts（原生 ESM）加载时 __dirname 不存在
const dirname = import.meta.dirname

// 外部化策略：任何 node_modules 裸包（含 node: 内置模块）都外部化，
// 仅保留 src 内部相对/绝对模块（对齐原 haoma：不打包任何第三方代码）
function isExternal(id: string): boolean {
  if (id.startsWith('\0') || id.startsWith('.') || path.isAbsolute(id)) {
    return false
  }
  return true
}

// 为 CLI 产物注入 shebang 并赋予可执行权限（在 closeBundle 阶段后处理，避免打包器二次解析报错）
function cliShebang(outDir: string) {
  return {
    name: 'cli-shebang',
    closeBundle() {
      const cliPath = path.resolve(dirname, outDir, 'cli.js')
      if (!fs.existsSync(cliPath)) return
      const code = fs.readFileSync(cliPath, 'utf-8')
      const withShebang = code.startsWith('#!')
        ? code
        : `#!/usr/bin/env node\n${code}`
      fs.writeFileSync(cliPath, withShebang)
      fs.chmodSync(cliPath, 0o755)
    },
  }
}

export default defineConfig(({ mode }) => {
  const isCjs = mode === 'cjs'
  const outDir = isCjs ? 'lib/cjs' : 'lib/esm'

  return {
    // 保持与旧 haoma 一致的按源文件分模块产出（而非 bundle 成单文件）
    build: {
      target: 'es2022',
      outDir,
      emptyOutDir: true,
      minify: false,
      sourcemap: false,
      lib: {
        entry: {
          index: path.resolve(dirname, 'src/index.ts'),
          cli: path.resolve(dirname, 'src/cli.ts'),
        },
        formats: isCjs ? ['cjs'] : ['es'],
      },
      rollupOptions: {
        external: isExternal,
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
        },
      },
    },
    plugins: [
      cliShebang(outDir),
      // 类型声明仅在 esm 构建产出，cjs 复用（对齐原 rollupDts/emitDts 语义）
      ...(isCjs
        ? []
        : [
            dts({
              entryRoot: 'src',
              // 默认写入 vite build.outDir（此分支为 lib/esm），无需再指定 outDir
              include: ['src/**/*.ts'],
              exclude: ['src/api/**'],
            }),
          ]),
    ],
  }
})

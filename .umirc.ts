import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'YTT',
  description: '一个 YApi 和 Apifox 代码生成工具',
  favicon:
    'https://cdn.jsdelivr.net/gh/fjc0k/yapi-to-typescript/assets/logo.png',
  logo: 'https://cdn.jsdelivr.net/gh/fjc0k/yapi-to-typescript/assets/logo.png',
  locales: [['zh-CN', '中文']],
  outputPath: 'docs/dist',
  ssr: {},
  exportStatic: {
    htmlSuffix: true,
  },
  base: '/yapi-to-typescript/handbook/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  styles: [`.__dumi-default-badge:first-child { margin-left: 0; }`],
})

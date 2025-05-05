import { defineConfig } from 'father'

export default defineConfig({
  // 以下为 esm 配置项
  esm: {
    input: 'src', // 默认编译目录
    platform: 'node', // 默认构建为 Node.js 环境的产物
    transformer: 'esbuild', // 使用 esbuild 以获得更快的构建速度
  },
  // 以下为 cjs 配置项
  cjs: {
    input: 'src', // 默认编译目录
    platform: 'node', // 默认构建为 Node.js 环境的产物
    transformer: 'esbuild', // 使用 esbuild 以获得更快的构建速度
  },
})

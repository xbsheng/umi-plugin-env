import { defineConfig } from 'father'

export default defineConfig({
  // 以下为 esm 配置项
  esm: {
    input: 'src',
    platform: 'node',
    transformer: 'babel',
    output: 'lib',
  },
  // 以下为 cjs 配置项
  cjs: {
    input: 'src',
    platform: 'node',
    transformer: 'babel',
    output: 'lib',
  },
})

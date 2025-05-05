# umi-plugin-env

[![CI](https://github.com/xbsheng/umi-plugin-env/workflows/CI/badge.svg)](https://github.com/xbsheng/umi-plugin-env/actions)
[![npm version](https://img.shields.io/npm/v/@xbsheng/umi-plugin-env.svg)](https://www.npmjs.com/package/@xbsheng/umi-plugin-env)
[![npm downloads](https://img.shields.io/npm/dm/@xbsheng/umi-plugin-env.svg)](https://www.npmjs.com/package/@xbsheng/umi-plugin-env)

一个用于在 Umi 项目中基于环境变量加载不同环境配置文件的插件。

## 安装

```bash
# 推荐使用 pnpm
pnpm add @xbsheng/umi-plugin-env -D

# 或者使用 npm
npm install @xbsheng/umi-plugin-env --save-dev

# 或者使用 yarn
yarn add @xbsheng/umi-plugin-env --dev
```

## 配置

在你的 Umi 配置中(.umirc.ts 或 config/config.ts)启用此插件：

```typescript
export default {
  plugins: ['@xbsheng/umi-plugin-env'],
  env: {
    // 可选：自定义环境变量键名（默认为 UMI_ENV）
    envKey: 'MY_CUSTOM_ENV',
  },
}
```

## 使用方法

1. 创建对应环境的配置文件，例如：`.env.dev`、`.env.test`、`.env.prod`

2. 运行 Umi 应用时设置环境变量：

```bash
# 使用默认环境变量键 UMI_ENV
UMI_ENV=dev umi dev

# 或者使用自定义环境变量键
MY_CUSTOM_ENV=prod umi build
```

该插件会自动加载对应的环境文件（例如：`.env.dev`）中的环境变量到 `process.env` 中。

## 示例

`.env.dev` 文件内容：

```
UMI_APP_API_URL=https://dev-api.example.com
UMI_APP_ENABLE_MOCK=true
```

`.env.prod` 文件内容：

```
UMI_APP_API_URL=https://api.example.com
UMI_APP_ENABLE_MOCK=false
```

在应用中使用：

```typescript
// 根据运行环境自动获取不同的API URL
const apiUrl = process.env.UMI_APP_API_URL
```

## 特性

- 支持多环境配置
- 自定义环境变量键名
- 环境变量优先级：命令行 > .env.[env] > 已存在的环境变量

## 开发

本项目使用以下工具：

- [father](https://github.com/umijs/father) - 构建工具
- [vitest](https://vitest.dev/) - 测试框架
- [pnpm](https://pnpm.io/) - 包管理器
- [prettier](https://prettier.io/) - 代码格式化工具
- [eslint](https://eslint.org/) - 代码质量检查工具

```bash
# 安装依赖
pnpm install

# 构建
pnpm run build

# 运行测试
pnpm test

# 检查代码规范
pnpm run lint

# 格式化代码
pnpm run format

# 自动修复 ESLint 错误
pnpm run lint:fix
```

## 许可证

MIT

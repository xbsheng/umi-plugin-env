# 贡献指南

感谢您对umi-plugin-env项目的关注！我们欢迎各种形式的贡献，包括但不限于提交错误报告、功能请求、改进文档或提交代码。

## 开发流程

1. Fork本项目
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建一个Pull Request

## 提交规范

我们使用[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)来规范提交信息。提交信息应该遵循以下格式：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

示例：

```
feat: 添加多语言支持
```

```
fix(config): 修复配置解析错误

修复了在特定环境下配置解析可能导致的崩溃问题。

Fixes #123
```

常用类型：

- `feat`：新功能
- `fix`：缺陷修复
- `docs`：文档更新
- `style`：不影响代码含义的更改（空格，格式化，缺少分号等）
- `refactor`：既不修复缺陷也不添加功能的代码更改
- `perf`：提高性能的代码更改
- `test`：添加或修正测试
- `build`：影响构建系统或外部依赖的更改（例如：gulp，broccoli，npm）
- `ci`：CI配置文件和脚本的更改
- `chore`：其他不修改src或测试文件的更改

## 拉取请求流程

1. 确保您的代码遵循项目的代码风格
2. 确保所有测试通过
3. 更新文档（如有必要）
4. 创建一个PR，描述您的更改并链接相关的issue
5. 等待审核和合并

## 开发设置

```bash
# 安装依赖
pnpm install

# 构建
pnpm run build

# 运行测试
pnpm test

# 格式化代码
pnpm run format

# 检查代码风格
pnpm run lint
```

## 问题和讨论

- 使用[GitHub Issues](https://github.com/xbsheng/umi-plugin-env/issues)报告问题
- 加入讨论或提问

再次感谢您的贡献！

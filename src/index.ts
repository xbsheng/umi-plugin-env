import { IApi } from '@umijs/max'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

interface IEnvPluginOptions {
  envKey?: string
}

/**
 * 插件key
 */
const PLUGIN_KEY = 'env'

/**
 * 默认环境变量key
 */
const DEFAULT_ENV_KEY = 'UMI_ENV'

// 使用命名导出和默认导出，确保兼容性
export function env(api: IApi) {
  api.describe({
    key: PLUGIN_KEY,
    config: {
      schema({ zod }) {
        return zod.object({
          envKey: zod.string().optional(),
        })
      },
    },
    enableBy: api.EnableBy.config,
  })

  const { envKey = DEFAULT_ENV_KEY } = api.userConfig[PLUGIN_KEY] as IEnvPluginOptions

  api.onStart(() => {
    api.logger.info(`正在加载环境变量 ${envKey}...`)

    const env = process.env[envKey]

    if (!env) {
      api.logger.error(`${envKey} 环境变量未设置, 跳过加载环境变量文件`)
      return
    }

    const envFile = path.resolve(api.cwd, `.env.${env}`)

    if (fs.existsSync(envFile)) {
      const result = dotenv.config({
        path: envFile,
        override: true,
      })
      if (result.error) {
        api.logger.error(`加载环境变量文件失败: ${envFile}`)
      } else {
        api.logger.info(`已加载环境变量文件: ${envFile}`)

        // 可视化打印加载的环境变量
        const loadedEnv = result.parsed || {}
        api.logger.info('加载的环境变量内容如下:')
        console.table(loadedEnv) // 使用 console.table 打印环境变量
      }
    } else {
      api.logger.warn(`未找到环境变量文件: ${envFile}`)
    }
  })
}

export default env

// src/index.ts
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
var PLUGIN_KEY = "env";
var DEFAULT_ENV_KEY = "UMI_ENV";
var src_default = (api) => {
  api.describe({
    key: PLUGIN_KEY,
    config: {
      schema({ zod }) {
        return zod.object({
          envKey: zod.string().optional()
        });
      }
    },
    enableBy: api.EnableBy.config
  });
  const { envKey = DEFAULT_ENV_KEY } = api.userConfig[PLUGIN_KEY];
  api.onStart(() => {
    api.logger.info(`正在加载环境变量 ${envKey}...`);
    const env = process.env[envKey];
    if (!env) {
      api.logger.error(`${envKey} 环境变量未设置, 跳过加载环境变量文件`);
      return;
    }
    const envFile = path.resolve(api.cwd, `.env.${env}`);
    if (fs.existsSync(envFile)) {
      const result = dotenv.config({
        path: envFile,
        override: true
      });
      if (result.error) {
        api.logger.error(`加载环境变量文件失败: ${envFile}`);
      } else {
        api.logger.info(`已加载环境变量文件: ${envFile}`);
        const loadedEnv = result.parsed || {};
        api.logger.info("加载的环境变量内容如下:");
        console.table(loadedEnv);
      }
    } else {
      api.logger.warn(`未找到环境变量文件: ${envFile}`);
    }
  });
};
export {
  src_default as default
};

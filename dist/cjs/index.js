var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_dotenv = __toESM(require("dotenv"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
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
    const envFile = import_path.default.resolve(api.cwd, `.env.${env}`);
    if (import_fs.default.existsSync(envFile)) {
      const result = import_dotenv.default.config({
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

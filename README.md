# 自定义配置

## 安装react-app-rewired

```shell
yarn add react-app-rewired customize-cra

由于新的 react-app-rewired@2.x 版本的关系，还需要安装 customize-cra。
```

## 修改命令

```json
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
```

## 创建config-overrides.js 用于添加或覆盖默认配置

```javascript
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

## antd按需加载

```javascript
// config-overrides.js
// yarn add babel-plugin-import


const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
)
```

## 修改antd默认主题

```javascript
// config-overrides.js

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 更改antd的主题色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#1DA57A'
    },
  }),
```

## 使用.env环境变量

```javascript
// yarn add cra-define-override
// config-overrides.js
const { overridePassedProcessEnv } = require("cra-define-override");

module.exports = override(
  overridePassedProcessEnv(["BASE_URL", "OTHER_ENV_NAME"])
);

// src/config.js
export default {
  baseUrl: process.env.BASE_URL || "https://default.fox.mn"
};
```
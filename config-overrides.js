// 引用env变量
const { overridePassedProcessEnv } = require("cra-define-override");
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
  overridePassedProcessEnv(["SERVER_URL", "SERVER_TEST"])
);
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const themeVars = require("./antd-theme");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVars
  })
);

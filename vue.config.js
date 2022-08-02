const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    //全局配置utils.scss,详细配置参考vue-cli官网
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/utils.scss";`,
      },
    },
  },
});

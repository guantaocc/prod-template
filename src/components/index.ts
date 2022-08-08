import Vue from "vue";

const toCamelCase = (str: string) => {
  return str.replace(/(A-Z)/, (match, p1) => {
    return "-" + p1.toLowerCase();
  });
};

const files = require.context("./", false, /\.vue/);
files.keys().forEach((key) => {
  const name = key.replace(/\.\/(.*)\.vue$/, (match, p1) => {
    return p1;
  });
  Vue.component(toCamelCase(name), files(key).default);
});

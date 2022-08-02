<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script>
import BasicLayout from "@/layouts/BasicLayout";
export default {
  components: {
    BasicLayout,
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100vh;
}
</style>

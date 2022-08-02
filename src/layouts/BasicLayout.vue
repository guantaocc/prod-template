<template>
  <div class="basic-layout">
    <div class="aside-content">
      <SideBar class="side-bar" :routes="routes"> </SideBar>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import { routes } from "@/router";
export default {
  name: "BasicLayout",
  computed: {
    routes() {
      return routes;
    },
  },
  components: {
    SideBar,
  },
};
</script>

<style lang="less">
.basic-layout {
  display: flex;
  height: 100%;
  .aside-content {
    width: 256px;
    height: 100%;
    .side-bar {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    flex: 1;
  }
}
</style>

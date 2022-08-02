<template>
  <div class="basic-layout">
    <SideBar :routes="routes"> </SideBar>
    <router-view />
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
}
</style>

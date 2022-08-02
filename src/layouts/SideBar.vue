<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :item="item"
      :basePath="item.path"
    ></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from "./components/SidebarItem.vue";
export default {
  name: "SideBar",
  components: {
    SidebarItem,
  },
  props: {
    routes: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item v-for="item in routes" :key="item.path" :index="item.path">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    routes: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped></style>

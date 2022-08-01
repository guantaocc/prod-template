<template>
  <el-tooltip placement="top">
    <div slot="content">{{ text }}</div>
    <i class="el-icon-question form-tooltip"></i>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
  },
};
</script>

<style lang="less" scoped>
.form-tooltip {
  margin-inline-start: 4px;
  cursor: help;
  font-size: 14px;
  display: inline-block;
}
</style>

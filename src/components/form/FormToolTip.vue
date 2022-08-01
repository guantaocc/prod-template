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
  position: absolute;
  right: 2px;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
  margin-inline-start: 4px;
  cursor: help;
  font-size: 14px;
  display: inline-block;
  clear: both;
}
</style>

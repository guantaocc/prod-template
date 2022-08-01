<template>
  <el-form-item
    class="el-form-item-plus"
    :class="hasToolTip && 'has-tooltip'"
    ref="formItemRef"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <template #label>
      <span>{{ label }}</span>
      <FormToolTip v-if="tooltip" :text="tooltip" />
    </template>
    <slot></slot>
  </el-form-item>
</template>

<script>
import FormToolTip from "./FormToolTip.vue";
export default {
  components: { FormToolTip },
  props: {
    tooltip: { type: String, default: "" },
    label: { type: String, default: "" },
  },
  computed: {
    hasToolTip() {
      return !!this.tooltip;
    },
  },
};
</script>

<style lang="less" scoped>
.el-form-item-plus.has-tooltip :deep {
  .el-form-item__label {
    position: relative;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>

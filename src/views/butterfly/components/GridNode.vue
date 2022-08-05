<template>
  <div class="gird-node">
    {{ itemData.label }}
  </div>
</template>

<script>
export default {
  name: "grid-node",

  props: {
    // 这里可以拿到mockdata里的当前节点的数据
    itemData: {
      type: Object,
    },
    // 原生的节点数据（不推荐使用这个）
    canvasNode: {
      type: Object,
    },
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.gird-node {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #aaa;
  color: #fff;
  background-color: #f66902;
  overflow: hidden;
  cursor: pointer;
}
</style>

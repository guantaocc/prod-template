<template>
  <div class="endpoint-node">
    <butterfly-vue-endpoint
      id="1"
      :param="{ scope: 'endpoint-1', limitNum: 2 }"
    />
    <butterfly-vue-endpoint id="2" className="endpoint-2">
      content
    </butterfly-vue-endpoint>
  </div>
</template>

<script>
import { ButterflyVueEndpoint } from "butterfly-vue";

export default {
  name: "endpoint-node",
  components: {
    ButterflyVueEndpoint,
  },
};
</script>

<style scoped>
.endpoint-node {
  width: 200px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 10px;
  box-shadow: 3px 4px 16px #888888;
}

.endpoint-node .endpoint-2 {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>

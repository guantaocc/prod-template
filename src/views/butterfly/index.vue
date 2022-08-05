<template>
  <div>
    <button @click="redraw">重绘画布</button>
    <butterfly-vue
      ref="butterflyVue"
      className="demo-butterfly"
      :canvasData="mockData"
      :canvasConf="defaultOptions"
    />
  </div>
</template>

<script>
import { ButterflyVue } from "butterfly-vue";
import GridNode from "./components/GridNode.vue";
import EndpointNode from "./components/EndpointNode.vue";

const endpoints = [
  {
    id: "right",
    orientation: [1, 0],
    pos: [0, 0.5],
  },
  {
    id: "left",
    orientation: [-1, 0],
    pos: [0, 0.5],
  },
];
export default {
  name: "App",
  components: {
    ButterflyVue,
  },
  data() {
    return {
      mockData: {
        groups: [],
        nodes: [
          {
            id: "0",
            left: 50,
            top: 10,
            label: "0",
            render: GridNode,
            endpoints: endpoints,
          },
          {
            id: "1",
            left: 100,
            top: 10,
            label: "1",
            render: GridNode,
            endpoints: endpoints,
          },
          {
            id: "2",
            left: 150,
            top: 40,
            render: EndpointNode,
          },
        ],
        edges: [
          {
            id: "0-1",
            sourceNode: "0",
            targetNode: "1",
            source: "left",
            target: "right",
          },
        ],
      },
      defaultOptions: {
        disLinkable: true, // 可删除连线
        linkable: true, // 可连线
        draggable: true, // 可拖动
        zoomable: true, // 可放大
        moveable: true, // 可平移
        theme: {
          edge: {
            arrow: true,
            type: "Straight",
          },
        },
      },
    };
  },
  methods: {
    redraw() {
      this.$refs.butterflyVue.redraw();
    },
  },
};
</script>

<style lang="scss" scoped></style>

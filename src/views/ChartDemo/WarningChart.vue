<template>
  <div id="warningChart"></div>
</template>

<script>
import { fitChartSizeVh } from "@/utils/dataUtil";
export default {
  name: "WarningChart",
  mounted() {
    this.initRadar();
  },
  methods: {
    initRadar() {
      // let _this = this;
      let radar = document.getElementById("warningChart");
      let radarChart = this.$echarts.init(radar);
      let option;
      let { indicator, radarData } = {
        indicator: [
          { text: "安防报警", max: 100, color: "#fff" },
          { text: "烟雾预警", max: 100, color: "#fff" },
          { text: "温度预警", max: 100, color: "#fff" },
          { text: "用电预警", max: 100, color: "#fff" },
          { text: "用水预警", max: 100, color: "#fff" },
        ],
        radarData: [85, 96, 85, 50, 65],
      };
      option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "axis",
        },
        radar: [
          {
            indicator: indicator,
            name: {
              show: true,
              textStyle: {
                fontSize: fitChartSizeVh(28),
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "radar",
            data: [
              {
                value: radarData,
                name: "安防预警",
                areaStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [{ offset: 1, color: "rgba(71, 252, 235, 0.2)" }]
                    ),
                  },
                },
              },
            ],
          },
        ],
      };
      option && radarChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#warningChart {
  width: vw(700);
  height: vh(460);
  color: #fff;
}
</style>

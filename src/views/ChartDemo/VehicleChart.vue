<template>
  <div id="vehicleChart" ref="vehicleChart"></div>
</template>

<script>
import { fitChartSizeVh } from "@/utils/dataUtil";
export default {
  name: "VehicleChart",
  mounted() {
    this.initLine();
  },
  methods: {
    initLine() {
      let line = this.$refs.vehicleChart;
      let lineChart = this.$echarts.init(line);
      let option;
      const color = ["#EC7C59", "#47FCEB"]; //2个以上的series就需要用到color数组
      const title = {
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
        padding: 0,
        top: 35,
        left: 25,
      };
      // 配置图例
      const legend = {
        orient: "vertical",
        left: "center",
        bottom: "bottom",
        padding: [10, 0, 0, 0],
        textStyle: {
          color: "#fff",
          fontSize: fitChartSizeVh(28),
        },
      };
      const tooltip = {
        show: true,
        trigger: "axis",
      };
      let seriesData = [
        { name: "进入", data: [100, 130, 230, 100, 135, 100] },
        { name: "开出", data: [150, 100, 140, 137, 106, 145] },
      ];
      // 都是线性数据
      const commonConfig = (index) => {
        return {
          type: "line",
          smooth: true,
          // 空心原点，交界处
          symbol: "emptyCircle", //空心小圆点。线条小圆点形状
          symbolSize: 6, //小圆点大小
          itemStyle: {
            // 原点样式
          },
          label: {
            show: false,
          },
          areaStyle: {
            opcity: 0.2,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: color[index],
                },
                {
                  offset: 1,
                  color: "transparent",
                },
              ],
              global: false,
            },
          },
        };
      };
      seriesData = seriesData.map((item, index) => ({
        ...item,
        ...commonConfig(index),
      }));
      option = {
        color,
        title,
        tooltip,
        legend,
        grid: {
          top: "5%",
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.3)",
              width: 1,
              type: "solid",
            },
          },
          data: ["9:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#ffffff",
          },
          axisLine: {
            show: false,
            // lineStyle: {
            //   color: "rgba(255,255,255,.4)",
            // },
          },
          splitLine: {
            show: true, //不显示grid水平分割线
          },
        },

        series: seriesData,
      };
      option && lineChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#vehicleChart {
  width: vw(700);
  height: vh(460);
  color: #fff;
}
</style>

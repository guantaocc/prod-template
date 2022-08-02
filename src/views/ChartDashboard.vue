<template>
  <div class="chart-dashboard">
    <div class="card person">
      <div class="title">
        <div class="con">人员信息总览</div>
      </div>
      <person-chart></person-chart>
    </div>
    <div class="card person">
      <div class="title">
        <div class="con">预警信息</div>
      </div>
      <warning-chart></warning-chart>
    </div>
  </div>
</template>

<script>
import PersonChart from "./ChartDemo/PersonChart.vue";
import WarningChart from "./ChartDemo/WarningChart.vue";
export default {
  components: {
    PersonChart,
    WarningChart,
  },
};
</script>

<style lang="scss" scoped>
.chart-dashboard {
  width: 100%;
}
.person {
  margin-right: vw(88);
}
.card {
  display: inline-block;
  vertical-align: middle;
  width: vw(780);
  min-height: vh(560);
  background-color: rgba(0, 12, 19, 0.8);
  border: 1px solid rgba(0, 0, 0, 0);
  padding-left: vw(25);
  padding-right: vw(25);
  border-radius: vw(8);
  .title {
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    padding-bottom: vh(15);
    padding-top: vh(15);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      border: 1px solid rgba(255, 255, 255, 0.15);
      width: 100%;
      left: 0;
      bottom: vh(-10);
    }
    .con {
      width: fit-content;
      margin: 0 auto;
      font-size: vh(40);
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: vh(32);
        height: vh(32);
        background-image: url("./images/title_decorate.png");
        background-size: 100% 100%;
        left: vw(-50);
        top: vh(8);
      }
      &::after {
        content: "";
        position: absolute;
        width: vh(32);
        height: vh(32);
        background-image: url("./images/title_decorate.png");
        background-size: 100% 100%;
        right: vw(-50);
        top: vh(8);
      }
    }
  }
}
</style>

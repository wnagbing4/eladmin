<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="main" style="height: 400px; width: 100%"></div>
</template>
<script setup lang="ts">
import echarts from "echarts";

import { onMounted } from "vue";
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;

  var chartDom = document.getElementById("main")!;
  var myChart = echarts.init(chartDom);
  var option: EChartsOption;

  option = {
    title: {
      text: "333",
      left: "center",
      top: "10px",
      bottom: "aurto",
      textStyle: {
        fonstSize: 18,
      },
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
});
</script>
<style lang="scss" scoped></style>

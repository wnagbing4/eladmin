<template>
  <div>
    <div ref="myChart1" :style="{ width: '100%', height: '350px' }"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps(["echarts"]);
const myChart1 = ref();

onMounted(() => {
  echart();
});

let echart = () => {
  let myChart = props.echarts.init(myChart1.value);
  // 绘制图表
  myChart.setOption({
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: "axis",
      show: true,
    },
    legend: {
      data: ["Direct", "Search Engine"],

      // formatter: function (name) {
      //   return echarts.format.truncateText(name, 40, '14px 我是小刘大帅哥')
      // }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  });
  window.onresize = function () {
    // 自适应大小
    myChart.resize();
  };
};
</script>

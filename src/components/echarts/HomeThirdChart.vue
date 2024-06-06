<template>
  <div class="chart3-box">
    <div ref="myChart3" class="Chart3"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps(["echarts"]);
const myChart3 = ref();
onMounted(() => {
  echart3();
});
const echart3 = () => {
  const chart = props.echarts.init(myChart3.value);
  const option = {
    backgroundColor: "#fff",

    tooltip: {
      trigger: "item",
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "Direct" },
          { value: 310, name: "Email" },
          { value: 274, name: "Union Ads" },
          { value: 235, name: "Video Ads" },
          { value: 400, name: "Search Engine" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };
  chart.setOption(option);
};
</script>
<style lang="scss" scoped>
.chart3-box {
  width: 300px;
  // overflow: hidden;
}
.Chart3 {
  width: 340px;
  height: 300px;
  // margin: 0 0 0 30px;
}
</style>

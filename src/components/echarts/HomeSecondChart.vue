<template>
  <div class="Chart2-box">
    <div ref="myChart2" class="Chart2" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps(["echarts"]);
const myChart2 = ref();
onMounted(() => {
  echart2();
});
const echart2 = () => {
  const chart = props.echarts.init(myChart2.value);

  const option = {
    // 标题的配置
    // title: {
    //   text: 'Customized Pie',
    //   left: 'center',
    //   top: 20,
    //   textStyle: {
    //     color: 'red'
    //   }
    // },
    radar: {
      // 雷达图的相关配置
      indicator: [
        { name: "销售", max: 6500 },
        { name: "管理", max: 16000 },
        { name: "信息技术", max: 30000 },
        { name: "客服", max: 38000 },
        { name: "研发", max: 52000 },
        { name: "市场", max: 25000 },
      ],

      name: {
        textStyle: {
          color: "red",
          backgroundColor: "#999",
          borderRadius: 3,
          padding: [3, 5],
        },
      },
    },
    series: [
      {
        type: "radar",
        // 数据
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "预算 vs 开销（Budget vs spending）",
          },
        ],
      },
    ],
  };

  //   chart.setOption(option)
  chart.setOption(option);
};
</script>
<style lang="scss" scoped>
//  .Chart2-box{
//   // width: 100%;
//   // margin: auto;
//   // position: relative;
// }
// .Chart2-box {
//   width: 340px;
//   // overflow: hidden;
// }
// .Chart2-box .Chart2 {
//   // width: 100%;
//   // height: 300px;
//   width: 340px;
//   height: 250px;
//   // margin: 0 0 0 30px;
// }
</style>

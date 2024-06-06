<template>
  <div class="homeView">
    <!-- 四个盒子 -->
    <FourBoxes></FourBoxes>
    <!-- 图表 -->
    <!-- 为chart定义一个 宽高的盒子  -->
    <div
      class="chart-style"
      style="background-color: #fff; width: 100%; margin-left: 0px"
    >
      <FirstChart :echarts="echarts"></FirstChart>
    </div>

    <div class="footer-echart">
      <div>
        <SecondChart :echarts="echarts"></SecondChart>
      </div>
      <div>
        <ThirdChart :echarts="echarts"></ThirdChart>
      </div>
      <div >
       <Third/>
        <!-- <SecondChart :echarts="echarts"></SecondChart> -->
      </div>
      <!-- <div ref="myChart3"></div>
      <div ref="myChart4"></div> -->
    </div>
  </div>
</template>

<script setup>
// 引入第一个图表
import FirstChart from "@/components/echarts/HomeFirstChart.vue";
// 第二个图表
import SecondChart from "@/components/echarts/HomeSecondChart.vue";
// 第三个图表
import ThirdChart from "@/components/echarts/HomeThirdChart.vue";
// 第四个图表
import FourBoxes from "@/components/echarts/FourEcharts.vue";
import Third from '@/components/echarts/Third.vue'
const myChart3 = ref();
const myChart4 = ref();
// console.log(myChart2, myChart3, myChart4, 'myChart2,myChart3,myChart4')
// import { useMain } from '../../stores/counter'
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
// const store = useMain()
</script>

<style lang="scss" scoped>
.homeView {
  width: 100%;
  height: 100%;
  background-color: #eff1f4;

  padding: 36px;
  box-sizing: border-box;
}

.footer-echart {
  // margin-top: 20px;
  width: 100%;
  height: 316px;
  display: flex;
  justify-content: space-between;
  margin-top:30px;
}
.footer-echart div {
  width: 32%;
  height: 316px;
  background-color: #fff;
  // margin-left: 2%;
}
</style>

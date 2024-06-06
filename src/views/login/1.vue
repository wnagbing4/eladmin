<template>
  <!-- 地图下钻 geo -->
  地图下钻
  <div id="echart_china" ref="echart_china"></div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import mapNameJson from "@/assets/json/china.json";
import xinjiang from "@/assets/json/xinjiangweiwuerzu.json";
import { ref, onMounted } from "vue";
// 1. 获取当前dom元素
const echart_china = ref(null);

// 2. 定义一个数据,保存地图的dom实例
const myChart = ref();

/**
 * 将初始化地图抽离成函数
 */
const initEcharts = (mapName: string, mapJson: object) => {
  //  2. 实例化当前对象
  myChart.value = echarts.init(echart_china.value as any);
  // 3. 注册可用的地图，只在 geo 组件或者map图表类型中使用
  echarts.registerMap(mapName, mapJson); //用导入的json文件注册一个name:china的地图组件
  // 4. 配置options属性
  let option = {
    geo: {
      map: mapName,
      label: {
        show: true,
        color: "rgb(16, 231, 222)",
        fontSize: 6,
        fontStyle: "oblique",
        backgroundColor: "rgba(40, 231, 222, 0.5)",
      },
      itemStyle: {
        normal: {
          areaColor: "rgba(37, 157, 255, 0.2)",
        },
      },
      regions: [
        {
          selected: true,
          name: "北京", //与china.json对应的省份名称一致
          itemStyle: {
            areaColor: "#cfc5de", //省份背景色
          },
        },
        {
          selected: true,
          name: "天津", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#f1ebd1", //省份背景色
          },
        },
        {
          selected: true,
          name: "上海", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#feffdb", //省份背景色
          },
        },
        {
          selected: true,
          name: "重庆", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#e0cee4", //省份背景色
          },
        },
        {
          selected: true,
          name: "河北", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#fde8cd", //省份背景色
          },
        },
        {
          name: "河南", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#e4f1d7", //省份背景色
          },
        },
        {
          name: "云南", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#fffed7", //省份背景色
          },
        },
        {
          name: "辽宁", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#DDA0DD", //省份背景色
          },
        },

        {
          name: "黑龙江", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#8A2BE2", //省份背景色
          },
        },
        {
          name: "湖南", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#6A5ACD", //省份背景色
          },
        },
        {
          name: "安徽", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#fffed7", //省份背景色
          },
        },
        {
          name: "山东", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#dccee7", //省份背景色
          },
        },
        {
          name: "新疆", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#fffed7", //省份背景色
          },
        },
        {
          name: "江苏", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#fce8cd", //省份背景色
          },
        },
        {
          name: "浙江", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#ddceeb", //省份背景色
          },
        },
        {
          name: "江西", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#e4f1d3", //省份背景色
          },
        },
        {
          name: "湖北", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#fde8cd", //省份背景色
          },
        },
        {
          name: "广西", //与china.js对应的省份名称
          itemStyle: {
            areaColor: "#DA70D6", //省份背景色
          },
        },
      ],
      emphasis: {
        label: {
          show: true,
          itemStyle: {
            areaColor: "rgba(37, 157, 255, 0.2)",
          },
        },
      },
    },
  };
  //  5. 调用setoptions方法,把option注册到dom元素伤
  myChart.value.setOption(option);
};

//2. 下钻,点击省显示市区,进行数据展示
const spread = (params: any) => {
  // console.log(params)
  // 销毁地图
  echarts.dispose(myChart.value);
  // // 下钻后先重新销毁地图,获取要进行下钻的名称,并且设置其为注册名称
  let mapName = params.geoIndex;
  // // 获取地图数据
  initEcharts(mapName, xinjiang);
};

onMounted(() => {
  initEcharts("china", mapNameJson);
  // 为echarts绑定点击事件,进行下钻
  myChart.value.on("click", (params: any) => {
    console.log(params, "params");
    spread(params);
  });
});

// 需求中国地图每个区域都进行展示
/***
 * 封装公共函数,需要两个参数,一个是注册地图的名称,一个是json数据
 */

// 实现思路

// 1. 先实例化地图,并且注册地图,其中需要注意的是我们使用的省市名称需要和json或者js数据中的名称对上
// 2. 下钻,指的是,点击省弹出,详细市区,然后详细一个区,以此类型
// 3. 我们在下钻的时候,先销毁之前的地图,重新进行地图的注册,和数据的绑定,进行绘制
// 地图下钻实现的方法: 1. geo组件  2. serives组件的方法

/***
 * 以新疆为例子:
 * 点击新疆,进行获取到新疆下一步省市
 * 1. 绑定一个点击事件,并且拿到点击当前区域的信息
 * 2. 销毁之前的地图信息
 * 3. 重新注册地图,渲染当前点击省市的json数据
 */
</script>
<style>
#echart_china {
  width: 100vw;
  height: 100vh;
}
</style>

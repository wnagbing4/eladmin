<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header> </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Menu from "@/components/menu/MenuList.vue";
import echarts from "echarts";
import { onMounted } from "vue";
onMounted(() => {});
</script>
<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  //   background: red;
  .el-container {
    width: 100%;
    height: 100%;
    .el-aside {
      width: 200px;
      height: 100%;
      background: #304156;
    }
  }
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tabs-box">
    <el-tabs
      v-model="store.active"
      type="card"
      class="demo-tabs"
      editable
      @edit="handleTabsDelete"
    >
      <template #add-icon>
        <el-icon><Select /></el-icon>
      </template>
      <el-tab-pane
        v-for="item in store.tabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
// 引入pinia
import { useStore } from "@/stores/counter";
const store = useStore();
console.log(store.tabs);

import { ref } from "vue";
import type { TabPaneName } from "element-plus";

// 选项卡删除
const handleTabsDelete = () => {
  console.log(111);
};
</script>
<style lang="scss" scoped>
.tabs-box {
  height: 20px;
//   background-color: pink;
  // background-color: pink;
}
</style>

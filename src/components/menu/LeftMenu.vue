<template>
    <div>
    <div v-for="item in props.list" :key="item.path">
      <el-sub-menu :index="'/'+item.meta.title" v-if="item.children">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <LeftMenu :list="item.children"></LeftMenu>
      </el-sub-menu>
      <el-menu-item :index="'/'+item.path" v-else>
        <template #title> {{ item.meta.title }}</template>
      </el-menu-item>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  list: Object
})
</script>

<style></style>

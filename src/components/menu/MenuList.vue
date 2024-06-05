<!--
 * @Author: wangbing56 12267007+wangbing56@user.noreply.gitee.com
 * @Date: 2024-06-05 14:12:04
 * @LastEditors: wangbing56 12267007+wangbing56@user.noreply.gitee.com
 * @LastEditTime: 2024-06-05 14:19:26
 * @FilePath: \eladmin\src\components\menu\MenuList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5 class="mb-2">ELADMIN 后台管理系统</h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        style="width: 200px; background: none"
        router
        unique-opened
      >
        <el-menu-item :index="'/' + 'home'">
          <el-icon><icon-menu /></el-icon>
          <span> 首页</span>
        </el-menu-item>
        <LeftMenu :list="dataList.menuList"></LeftMenu>
        <!-- <el-menu router unique-opened > -->
        <!-- 一级菜单 -->
        <!-- <el-sub-menu
          :index="'' + item.path"
          v-for="item in dataList.menuList"
          :key="item.path"
        >
          <template #title>
           
            {{ item.meta.title }}</template
          > -->
        <!-- 二级菜单 -->
        <!-- <el-menu-item-group
            v-for="subItem in item.children"
            :index="'/' + subItem.path"
            :key="subItem.path"
          >
            <i></i>{{ subItem.meta.title }}
            <el-sub-menu v-for="ite in subItem.children" :key="ite.path" :index="ite.path">
              <template #title>{{ ite.meta.title }}</template>
              <el-menu-item :index="ite.path">{{ ite.meta.title }}</el-menu-item>
            </el-sub-menu>
          </el-menu-item-group>
        </el-sub-menu> -->
        <!-- </el-menu> -->
        <!-- <LeftMenu :list="dataList.menuList"/> -->
        <!-- <el-sub-menu v-for="item in dataList.menuList" :key="item.path" :index="item.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <div >
           <el-sub-menu v-for="ite in item.children" :key="ite.path" :index="ite.path">
            <template #title>{{ ite.meta.title }}</template>
            <el-menu-item v-for="it in ite.children" :key="it.path" :index="it.path" v-show="ite.children">{{it.meta.title}}</el-menu-item>
          </el-sub-menu>
          </div>
        
        </el-sub-menu> -->
      </el-menu>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { getMenuListApi } from '@/api/api'
import { reactive } from 'vue'
import LeftMenu from './LeftMenu.vue'
const dataList: any = reactive({
  menuList: {}
})
const getMenu = async () => {
  let res = await getMenuListApi()
  console.log(res, 'resres')
  dataList.menuList = res
}
getMenu()
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.mb-2 {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 30px;
  //   background: blue;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
}
</style>

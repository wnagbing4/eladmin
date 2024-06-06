<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5 class="mb-2">ELADMIN 后台管理系统</h5>
      <el-menu
        active-text-color="#409eff"
        background-color="#1f2d3d"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
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
      </el-menu>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { getMenuListApi } from '@/api/api'
import { onMounted, reactive } from 'vue'
import LeftMenu from './LeftMenu.vue'
import { useStore } from '@/stores/counter'
const store=useStore()
import { useRouter } from 'vue-router'
const router = useRouter()
const dataList: any = reactive({
  menuList: []
})

onMounted(()=>{
  getMenu()
})
const getMenu = async () => {
  let res = await getMenuListApi()
  console.log(res, 'resres')
  dataList.menuList = res
  // getChild(res)
  // store.getPath(leafNodes)
}
// 定义存储叶子的节点数据
// const leafNodes = []
// const getChild = (arr) => {
//   // arr 存储的菜单数据
//   console.log(arr, 'arr')
//   arr.forEach((item) => {
//     console.log(item, 'item')
//     if (!item.children) {
//       leafNodes.push(item)
//     } else {
//       getChild(item.children)
//     }
//   })
// }
//  存储路径的方法
// const savePath = (index, indexPath, item) => {
//   console.log(index,indexPath,item,'jhhhhhhhhh')
//   // 修改indexPath
//   let key = leafNodes.findIndex((item) => {
//     console.log(item,'item');
    
//     return item.path == index
//   })
//   console.log(leafNodes,'leafNodes');
  
//   // console.log(key, 'keys')

//   indexPath[indexPath.length - 1] = leafNodes[key].meta.title
//   console.log(indexPath, 'indexPath')
//   // 存进小菠萝
//   store.crumbsPath(indexPath)

//   // 操作选项卡导航
//   let obj = {
//     // 最后一个值
//     title: indexPath[indexPath.length - 1],
//     name: index,
//     path: index
//   }
//   // 判重
//   let k = store.tabs.findIndex((item) => {
//     return item.path == index
//   })
//   console.log(k, 'k')

//   // 等于-1 直接添加

//   if (k == -1) {
//     // 添加并设置默认值
//     store.addTabs.push(obj)

//     // store.setActive(index)
//   }
//   // 设置默认值
//   store.setTab(index)

//   // 跳转
//   router.push(index)
// }
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

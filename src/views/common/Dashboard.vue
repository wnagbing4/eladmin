<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <div class="header_box">
            <div class="mianbao">
              <el-icon style="font-size: 30px; margin-top: 10px"><Fold /></el-icon>
              <el-breadcrumb separator="/" style="margin-top: 17px; margin-left: 20px">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, index) in misere" :key="index">
                  {{ item.meta.title }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="right_box">
              <div class="icon_box">
                <svg
                  t="1717574108715"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1720"
                  width="25px"
                  height="25px"
                  style="margin-right: 20px"
                >
                  <path
                    d="M894.3872 819.013632 655.1552 576.60928c52.4288-55.12704 72.761344-122.871808 72.761344-205.053952 0-169.146368-130.610176-305.958912-298.596352-305.958912-167.962624 0-304.633856 137.617408-304.633856 306.763776 0 169.147392 134.541312 299.305984 302.50496 299.305984 70.132736 0 136.737792-16.780288 188.269568-57.020416l240.959488 244.130816c4.405248 4.451328 10.180608 6.677504 15.954944 6.677504 5.776384 0 15.337472-6.816768 19.739648-11.266048C900.921344 845.33248 903.1936 827.913216 894.3872 819.013632zM172.831744 368.572416c0-140.362752 113.378304-254.498816 252.724224-254.498816 139.368448 0 252.7488 114.136064 252.7488 254.498816 0 140.316672-113.381376 254.49984-252.7488 254.49984C286.210048 623.072256 172.831744 508.889088 172.831744 368.572416z"
                    fill="#272636"
                    p-id="1721"
                  ></path>
                </svg>
                <svg
                  t="1717574275984"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5014"
                  width="25px"
                  height="25px"
                  style="margin-right: 20px"
                >
                  <path
                    d="M128 192c0-70.6 57.4-128 128-128h192c247.4 0 448 200.6 448 448S695.4 960 448 960H256c-70.6 0-128-57.4-128-128V192z m320 0H256v640h192c176.8 0 320-143.2 320-320S624.8 192 448 192z"
                    p-id="5015"
                  ></path>
                </svg>
                <svg
                  t="1717574333319"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6309"
                  width="25px"
                  height="25px"
                  style="margin-right: 20px"
                >
                  <path
                    d="M249.6 186.368l51.84-51.84a9.472 9.472 0 0 0-5.504-16.128l-189.376-22.336a9.472 9.472 0 0 0-10.496 10.496l22.4 189.376a9.472 9.472 0 0 0 16 5.568l51.648-51.648 158.08 157.888a9.472 9.472 0 0 0 13.312 0l50.112-49.984a9.472 9.472 0 0 0 0-13.376L249.6 186.368z m416.896 221.44a9.472 9.472 0 0 0 13.312 0l158.08-157.952 51.648 51.648a9.472 9.472 0 0 0 16-5.568l22.4-189.248a9.472 9.472 0 0 0-10.496-10.496l-189.376 22.336a9.472 9.472 0 0 0-5.568 16.064l51.84 51.84L616.448 344.32a9.472 9.472 0 0 0 0 13.44l50.112 50.048z m239.104 320.512a9.472 9.472 0 0 0-16.064-5.568l-51.648 51.648-158.08-157.888a9.472 9.472 0 0 0-13.312 0l-50.112 49.92a9.472 9.472 0 0 0 0 13.44l158.016 158.016-51.84 51.84a9.472 9.472 0 0 0 5.504 16.128l189.376 22.336a9.472 9.472 0 0 0 10.496-10.56l-22.4-189.312zM357.504 616.512a9.472 9.472 0 0 0-13.312 0L186.112 774.4l-51.648-51.648a9.472 9.472 0 0 0-16 5.568l-22.4 189.184a9.472 9.472 0 0 0 10.496 10.56l189.376-22.4a9.472 9.472 0 0 0 5.568-16l-51.84-51.84 157.952-157.888a9.472 9.472 0 0 0 0-13.312l-50.112-50.112z"
                    p-id="6310"
                    fill="#515151"
                  ></path>
                </svg>
                <svg
                  t="1717574469351"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10344"
                  width="25px"
                  height="25px"
                  style="margin-right: 20px"
                >
                  <path
                    d="M832 640v320c0 42.682-21.318 64-64 64s-64-21.318-64-64V640H576c-42.682 0-64-21.318-64-64s21.318-64 64-64h384c42.682 0 64 21.318 64 64s-21.318 64-64 64H832zM448 192v768c0 42.682-21.318 64-64 64s-64-21.318-64-64V192H128c0 42.682-21.318 64-64 64S0 234.682 0 192V64C0 21.318 21.318 0 64 0s64 21.318 64 64h512c0-42.682 21.318-64 64-64s64 21.318 64 64v128c0 42.682-21.318 64-64 64s-64-21.318-64-64H448z"
                    p-id="10345"
                    fill="#707070"
                  ></path>
                </svg>
                <div class="out_box">
                  <el-dropdown style="margin-top: 5px">
                    <span class="el-dropdown-link">
                      <img
                        src="../../assets/image/avatar.jpeg"
                        alt=""
                        style="width: 35px; height: 35px"
                      />
                      <el-icon><ArrowDown /></el-icon>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item>布局设置</el-dropdown-item>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出设置</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="router_box">
            <!-- <div class="flex gap-2"> -->
            <el-tag> 首页 </el-tag>
            <el-tag
              v-for="tag in dynamicTags"
              :key="tag.meta.title"
              closable
              :disable-transitions="false"
              :effect="$route.path === tag.path ? 'dark' : 'plain'"
              @close="handleClose(tag,tag.path)"
              @click="$router.push(tag.path)"
            >
              {{ tag.meta.title }}
            </el-tag>
          </div>
        </el-header>
        <el-main style="background: #eef0f3">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate, useRouter } from "vue-router";
import Menu from "@/components/menu/MenuList.vue";
import { ref } from "vue";
import { Fold, ArrowDown } from "@element-plus/icons-vue";
import { onMounted } from "vue";
const route = useRoute();

onBeforeRouteUpdate((to) => {
  console.log(to);
  onhearouet(to);
  if (to.meta.title) {
    haefef(to);
  } else {
    return;
  }
});
const dynamicTags = ref<any>([]);
const haefef = (to) => {
  if (to.meta.title) {
    const matched = to.matched.filter(
      (item) => item.meta && item.meta.title && item.components
    );
    const filt = dynamicTags.value.find((item: any) => {
      return item.meta.title === matched[0].meta.title;
    });
    if (!filt) {
      dynamicTags.value.push(matched[0]);
    }
  }
  console.log(dynamicTags.value, "dynamicTagsdynamicTags");
};
// haefef(route)
const router = useRouter();
onMounted(() => {
  onhearouet(route);
  haefef(route);
});
const misere = ref<any>([]);
const onhearouet = (to) => {
  misere.value = to.matched.filter((item) => item.meta && item.meta.title);
};

onhearouet(route);
const handleClose = (tag: any,path:any) => {
  console.log(tag,path,'path');
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
  
  if(dynamicTags.value.length==0){
    router.push('/home')
  }else{
    router.push(dynamicTags.value[dynamicTags.value.length-1].path)
  }
};
</script>
<style lang="scss" scoped>
.tabs-box {
  height: 20px;
  //   background-color: pink;
  // background-color: pink;
}
.common-layout {
  width: 100%;
  height: 100%;
  //   background: red;
  .el-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    .el-aside {
      width: 200px;
      height: 100%;
      background: #304156;
    }
  }
}
.el-header {
  width: 100%;
  height: 80px;
  padding: 0;
  margin: 0;
}
.header_box {
  width: 100%;
  height: 60%;
  display: flex;
  border-bottom: 1px solid #f3f4f5;
  position: relative;
  // align-items: center;
  .mianbao {
    width: 40%;
    height: 100%;
    // margin-top: 14px;
    // margin-left: 20px;
    display: flex;
  }
  .right_box {
    width: 60%;
    height: 100%;
    // background: red;
    position: relative;
    .icon_box {
      position: absolute;
      right: 0;
      margin-right: 35px;
      // margin-top:10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    // flex: right;
  }
}
.el-id-7122-0 {
  border: none !important;
}
</style>

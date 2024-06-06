import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Leftmenus } from '@/api/type'
export const useStore = defineStore('main', {
  state: () => {
    return {
      token: {},
      verifyPassword: '',
      path: [],
      // 面包屑数据
      crumbsDate: [],
      // 选项卡
      tabs: [
        {
          title: '首页',
          name: 'home',
          path: '/home'
        }
      ],
      // active: '/home'
    }
  },
  getters: {},
  actions: {
    getTokens(token: Object) {
      console.log(token, 'token')
      this.token = token
    },
    getPath(path: Leftmenus[]) {
      this.path = path
    },

    crumbsPath(crumbs: any) {
      this.crumbsDate = crumbs
    },

    // 选项卡
    setTab(name: any) {
      this.active = name
    },
    addTabs(obj) {
      this.tabs.push(obj)
    }
  },
  persist: {
    storage: sessionStorage
  }
})

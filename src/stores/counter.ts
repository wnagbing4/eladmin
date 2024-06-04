import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
  state: () => {
    return {
      token: {},
      verifyPassword:''
    }
  },
  getters: {

  },
  actions: {
    getTokens(token: Object) {
      console.log(token, 'token')
      this.token = token
    },
  },
  persist: {
    storage: sessionStorage
  }
})

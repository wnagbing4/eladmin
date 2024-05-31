import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const env=loadEnv(process.env.NODE_ENV,process.cwd())
/**
 * 一般用来配置我们服务的一些配置东西
 * 比如代理，启动项目的名称
 * 公司的环境
 * 因为所处的环境不一样，环境配置变量也不一样
 * 本地开发环境 development
 * 测试环境  testing
 * 灰度环境（备机，半线上）stage
 * 线上环境 production
 */
// https://vitejs.dev/config/
export default defineConfig({
  /**修改打包目录根路径 */
  build: {
    // 打包输出文件夹
    outDir: 'dist',
    //  打包输出静态资源文件夹
    assetsDir: 'aaa'
  },
  server: {
    // 端口号
    // 一般前端配置端口号不配置80端口选择其他配置有的后台只能是80端口号
    port: 9999,
    // 如果多台电脑处在同一个局域网下，配置0.0.0.0后，别的电脑通过当前电脑IP：//端口号，可以直接访问当前电脑的项目
    host: '0.0.0.0',
    // 当前端口号被占用的时候直接退出服务，不用新增端口
    stricport: true,
    // 配置跨域
    proxy: {
      [env.VITE_APP_BASE_API]: {
        // 代理路径
        target: env.VITE_APP_BASE_URL,
        // 是否开启跨域地理
        changeOrigin: true,
        // 路径重写
       // rewrite: (path: any) => path.replace(/^\/api/, ''),
        rewrite: (path:any) => path.replace(new RegExp('^'+ env.VITE_APP_BASE_API),'')
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    // 路径别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@component': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  }
})



import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
const comurtby: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue")
  },
  {
    path:'/one',
    name:'one',
    component:()=>import('@/views/login/1.vue')
  },
  {
    path: "/",
    name: "heafhome",
    component: () => import("@/views/common/Dashboard.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/sys/home/Home.vue"),
				meta:{
					  //  title:'首页',
				}
      },
      {
        path: "/system",
        name: "system",
				meta:{
					title:'系统管理',
				},
        children: [
          {
            path: "/user",
            name: "user",
            component: () => import("@/views/sys/user/Use.vue"),
						meta:{
							title:'用户管理',
						},
          },
          {
            path: "/role",
            name: "role",
            component: () => import("@/views/sys/role/index.vue"),
						meta:{
							title:'角色管理',
						},
          },
          // {
          //   path: "/menu",
          //   name: "menu",
          //   component: () => import("@/views/system/menu/index.vue"),
					// 	meta:{
					// 		title:'菜单管理',
					// 	},
          // },
          // {
          //   path: "/dept",
          //   name: "dept",
          //   component: () => import("@/views/system/dept/index.vue"),
					// 	meta:{
					// 		title:'部门管理',
					// 	},
          // },
          // {
          //   path: "/job",
          //   name: "job",
          //   component: () => import("@/views/system/job/index.vue"),
					// 	meta:{
					// 		title:'岗位管理',
					// 	},
          // },

          // {
          //   path: "/dict",
          //   name: "dict",
          //   component: () => import("@/views/system/dict/index.vue"),
					// 	meta:{
					// 		title:'字典管理',
					// 	},
          // },
          // {
          //   path: "/timing",
          //   name: "timing",
          //   component: () => import("@/views/system/timing/index.vue"),
					// 	meta:{
					// 		title:'任务调度',
					// 	},
          // }
        ]
      },
      // {
      //   path: "/monitor",
      //   name: "monitor",
			// 	meta:{
			// 		title:'系统监控',
			// 	},
      //   children: [
      //     {
      //       path: "/online",
      //       name: "online",
      //       component: () => import("@/views/monitor/online/index.vue"),
			// 			meta:{
			// 			   title:'在线用户',
			// 			}
      //     },
      //     {
      //       path: "/logs",
      //       name: "logs",
      //       component: () => import("@/views/monitor/logs/index.vue"),
			// 			meta:{
			// 			  title:'操作日志',
			// 			}
      //     },
      //     {
      //       path: "/errorLog",
      //       name: "errorLog",
      //       component: () => import("@/views/monitor/errorLog/index.vue"),
			// 			meta:{
			// 			  title:'异常日志',
			// 			}
      //     },
      //     {
      //       path: "/server",
      //       name: "server",
      //       component: () => import("@/views/monitor/server/index.vue"),
			// 			meta:{
			// 			  title:'服务监控',
			// 			}
      //     }
      //   ]
      // },
      // {
      //   path: "/mnt",
      //   name: "mnt",
			// 	meta:{
			// 		title:'运营管理',
			// 	},
      //   children: [
      //     {
      //       path: "/serverDeploy",
      //       name: "serverDeploy",
      //       component: () => import("@/views/mnt/serverDeploy/index.vue"),
			// 			meta:{
			// 				  title:'服务器',
			// 			}
      //     },
      //     {
      //       path: "/app",
      //       name: "app",
      //       component: () => import("@/views/mnt/app/index.vue"),
			// 			meta:{
			// 				  title:'应用管理',
			// 			}
      //     },
			// 		{
			// 			path:'/deploy',
			// 			name:'deploy',
			// 			component:()=>import('@/views/mnt/deploy/index.vue'),
			// 			meta:{
			// 				title:'部署管理',

			// 			}
			// 		},
			// 		{
			// 			 path:'/deployHistory',
			// 			 name:'deployHistory',
			// 			 component:()=>import('@/views/mnt/deployHistory/index.vue'),
			// 			 meta:{
			// 				title:'部署备份',

			// 			}
			// 		},
			// 		{
			// 			path:'/database',
			// 			name:'database',
			// 			component:()=>import('@/views/mnt/database/index.vue'),
			// 			meta:{
			// 				title:'数据库备份',

			// 			}
			// 		}
      //   ]
      // },

    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: comurtby
})

export default router

// 验证接口类型验证
export interface IcodeType {
  img: string
  uuid: string
}
// 登录接口
export interface IloginType {
  code: string
  password: string
  username: string
  uuid: string
}

// meta 中的数据
interface Imeta {
  icon: string
  noCache: boolean
  title: string
}
// 左侧菜单类型验证
export interface Leftmenus {
  path: string
  component: string
  meta: Imeta
  name: string
  alwaysShow: boolean
  children?: Child
}
interface Child {
  path: string
  component: string
  meta: Imeta
  name: string
  alwaysShow: boolean
}

interface IuserList {
  page: number
  size: number
  sort: string
  deptId: any
}

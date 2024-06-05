/**
 * 封装axios请求
 * 
 * 第一步; 下载
 * 第二步: 引入
 * 第三步: 调用方法 创建axios实例
 * 第四步: 配置根目录,超时时间,开启跨域凭证,配置heades请求头
 * 第五步: 实例化当前配置,挂载拦截器,配置请求拦截器和响应拦截器
 *        (客户端向服务端发起请求)
 *        请求拦截器: 配置token,配置headers请求方式
 *         (服务端向客户端返回数据,401过期, 404, 500,
 * 
 *          请求成功,直接返回当前数据,请求失败,根据状态码,封装报错,如果是401 就进行跳转登录页面 让其重新登录)
 *        响应拦截器: 1. 请求成功  return当前值
 *                  2. 请求失败: 根据不同的状态码,进行封装,并且,需要清空token和本地缓存的个人信息
 * 第六步: 和环境变量关联起来
 *        (因为我们环境是多变,代理标识,请求头也是多变,   axios.get('/api/xxx/xxx')
 *        vite提供给我们一个方法 import.meta.env,我们可以通过这个方法获取到环境变量配置的各种代理标识,
 *        我们封装一个函数,将接口和代理标识,拼接在一起,
 * 
 * 第七步: 我们吧get,post,put,delete等请求方式进行封装,
 *        根据查看接口,发现,接口基本符合返回值是  content,total 只不过是中间的内容不一样,我们就可以使用泛型进行
 *        校验 <T,D,A> 
 *        
 * 第八步: 导出当前方法,并且挂在至全局total
 * 
 * 
 */
import axios, { type AxiosInstance, AxiosError, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from "axios"
import { getToken, removeToken } from './auth'
import router from '@/router'
import { ElMessageBox } from 'element-plus'
import * as TS from './httpTypes'

/**抽离axios的create配置请求 */
const Config = {
    baseURL: TS.Url as string,
    timeout: TS.Timeout as number,
    // 跨域时候允许携带凭证
    withCredentials: TS.withCredentials as boolean,
    // 配置请求头方式
    headers: TS.Headers
}


class Request {
    serves: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.serves = axios.create(config)
        /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex本地储存当中
     */
        this.serves.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 因为将token已经封装cookie中,所以从cookie取出token,进行放置
                config.headers["Authorization"] = getToken("Authorization")
                return config
            },
            (error: AxiosError) => {
                // 请求报错
                Promise.reject(error)
            }
        )
        /**
         * 响应拦截器
         * 
         */
        this.serves.interceptors.response.use(
            /**请求成功 */
            (response: AxiosResponse) => {
                // 在请求成功的时候也需要401进行验证
                /**
                 * 有的后端: 接口
                 */
                console.log(response, 'response')
                const { data, config } = response // 解构
                if (data.status === TS.Code.GUOQI) {
                    // 登录信息失效，应跳转到登录页面，并清空本地的token
                    removeToken("Authorization")
                    router.replace({ path: '/login' })
                    return Promise.reject(data)
                } // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报
                return data
            },
            /**请求报错 */
            (error: AxiosError) => {

                let title: string = ""
                /**
                 * 先判断返回的是否是401,如果是401就跳转到登录页面,如果不是,其他返回状态,根据状态报错
                 */
                const { response } = error
                if (error && response) {
                    // 401, token失效
                    if (response.status === TS.Code.GUOQI) {
                        removeToken("Authorization")
                        router.push(
                            {
                                name: 'login'
                            }
                        )
                    }
                    // switch (
                    // response.status // 跨域存在获取不到状态码的情况
                    // ) {
                    //     // case TS.Code.ERROR:
                    //     //     title = '错误请求'
                    //     //     break
                    //     case TS.Code.GUOQI:
                    //         title = '资源未授权'
                    //         break
                    //     // case TS.Code.NOFOUND:
                    //     //     title = '未找到所请求的资源'
                    //     //     break
                    //     // case TS.Code.FUERROR:
                    //     //     title = '内部服务器错误'
                    //     //     break

                    //     default:
                    //         title = response.status.toString()
                    // }
                    // ElMessageBox.alert(
                    //     title,
                    //     '提示',
                    //     {
                    //         confirmButtonText: 'OK',
                    //         type: 'warning',
                    //     }
                    // )
                    return response.data
                } else {
                    // 跨域获取不到状态码或者其他状态进行的处理
                    return ElMessageBox.alert(
                        '未知错误,请联系管理员',
                        '提示',
                        {
                            confirmButtonText: 'OK',
                            type: 'error',
                        }
                    )
                }
            }
        )

    }

    /**
     * 封装一个多环境变量和请求代理标识拼接的字样
     * 将代理标识和url接口拼接到一起
     */
    adUrl(url: string) {
        return TS.Target + url
    }

    /**
     * 封装get请求方法
     * 如何封装get和post...请求方式
     * 入参: 我们的接口需要哪些参数
     * 出参: 我们接口的一个返回值
     * T, 泛型: 根据具体使用的情况,然后进行代码约束
     * 
     * 接口的返回值: {
     *          content: T
     *          totalElements: number
     *   }
     */
    get<T>(url: string, params?: object): Promise<T> {
        return this.serves.get(this.adUrl(url), { params })
    }
    post<T>(url: string, params?: object): Promise<T> {
        return this.serves.post(this.adUrl(url), params)
    }
    put<T>(url: string, params?: object): Promise<T> {
        return this.serves.put(this.adUrl(url), params)
    }
    delete<T>(url: string, params?: object): Promise<T> {
        return this.serves.delete(this.adUrl(url), { params })
    }
}



const http = new Request(Config)


export default http
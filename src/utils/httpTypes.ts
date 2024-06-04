

/**封装状态码 校验 */
enum Code {
    /**资源未授权 */
    GUOQI = 401,
    /**请求参数错误 */
    ERROR = 400,
    /**未找到请求资源路径 */
    NOFOUND = 404,
    /**服务器报错 */
    FUERROR = 500
}

/**获取到代理标识 */
const Target = import.meta.env.VITE_APP_BASE_API

/**axios请求的根目录 */
const Url = "./"

/**超时时间 */
const Timeout = 3600 * 1000

/**axios的请求跨域凭证 */
const withCredentials = true

/**配置请求头header */
const Headers = {
    "Content-Type": "application/json;charset=UTF-8"
}

/**
 * 返回值的一个ts类型校验
 *
 */
interface ReaposeResult<T> {
    token(token: any): unknown
    img: string
    uuid: string
    content: T,
    totalElements: number
}

export {
    Code,
    Target,
    Url,
    Timeout,
    withCredentials,
    Headers
}
export type { ReaposeResult }
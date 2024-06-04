/**
 * 将token封装到cookie中
 *
 * 1.设置到cookie中  set
 * 2.用的时候从cookie中拿到  get
 * 的那我们推出的时候，将token从cookie中移出 remove
 */
import Cookies from 'js-cookie'
/**
 * 设置cookies
 */
const token = 'token'
export function setToken(tokenKey:string,value: string) {
  return Cookies.set(tokenKey, value)
}
export function getToken(tokenKey:string) {
  return Cookies.get(tokenKey)
}
export function removeToken(tokenKey:string) {
  Cookies.remove(tokenKey)
}


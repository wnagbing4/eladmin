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
let token = 'token'
function setToken(value: string) {
  Cookies.set(token, value)
}
function getToken() {
  return Cookies.get(token)
}
function removeToken() {
  Cookies.remove(token)
}
export default {
  setToken,
  getToken,
  removeToken
}

import http from '../utils/httpReauest';
import type { IcodeType, IloginType, IuserList } from './type'
export const getImage=()=>http.get('/auth/code')
export const Login=(data:IloginType)=>http.post('/auth/login',data)
import axios from 'axios';
import { useUserStore } from '@/stores'; 
// const baseURL = 'https://api.github.com/repos';

const request = axios.create({
    // baseURL,
    timeout: 10000
})

//引入store
const store = useUserStore()

//请求拦截器
request.interceptors.request.use(
    config => {
        let token = store.userInfo?.token
        if( token !== undefined){
            config.headers.token = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//响应拦截器
request.interceptors.response.use(
    response => {
        //取出data后的数据
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default request
import axios from 'axios';
import { useUserStore } from '@/stores'; 
// const baseURL = 'https://api.github.com/repos';

const request = axios.create({
    // baseURL,
    timeout: 10000
})

//引入store
const store = useUserStore()

//不需要带token请求头的url
let urlList = [
    'https://api.ipify.org',
    'https://api.vore.top'
]

//请求拦截器
request.interceptors.request.use(
    config => {
        let token = store.userInfo?.token
        //判断是否在不需要token请求头的url数组
        let urlArr = config.url!.split('/')
        let index = urlList.findIndex(( item ) => item === `${urlArr[0]}//${urlArr[2]}`)
        //判断是否添加token请求头
        if( token !== undefined && token !== "" && index === -1){
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
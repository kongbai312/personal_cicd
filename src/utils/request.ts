import axios from 'axios';
import { useRelaxStore, useUserStore } from '@/stores'; 
// const baseURL = 'https://api.github.com/repos';

const request = axios.create({
    // baseURL,
    timeout: 10000
})

//引入store
const store = useUserStore()

//引入relaxStore
const relaxStore = useRelaxStore()

//不需要带token请求头的url
let urlList = [
    'https://api.ipify.org',
    'https://api.vore.top',
    'https://api.github.com'
]

//需要带其他token的请求头
let urlOtherList = [
    'https://api.apiopen.top/api/publishDynamic'
]

//是否需要query参数的其他url
let needQueryUrlList = [
    'https://api.apiopen.top/api/getPersonDynamicList'
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
            //判断是否添加其他token
            let needQueryUrlArr = config.url!.split('?')
            let isNeedQueryUrl : boolean
            // 小于2 说明没有query
            needQueryUrlArr.length >=2 ? (isNeedQueryUrl = (needQueryUrlList.findIndex(( item ) => item === needQueryUrlArr[0]) !== -1)) : (isNeedQueryUrl = false)
            //需要其他token
            let isOtherToken = (urlOtherList.findIndex(( item ) => item === config.url) !== -1)
            config.headers.token = (isOtherToken || isNeedQueryUrl) ? relaxStore.commentToken : token
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
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

//需要带评论token的请求头
let needCommentTokenList = [
    'https://api.apiopen.top/api/publishDynamic',
    'https://api.apiopen.top/api/getPersonDynamicList'
]

//请求拦截器
request.interceptors.request.use(
    config => {
        let token = store.userInfo?.token
        //筛选出不带params和query的Url地址
        let urlArr = config.url!.split('/')
        //判断是否在不需要token请求头的url数组
        let needToken = urlList.findIndex(( item ) => item === `${urlArr[0]}//${urlArr[2]}`) === -1
        //筛选出不带query的url
        urlArr = config.url!.split('?')
        // 网站不带query的url
        let noHaveQueryUrl = urlArr[0]
        // 判断是否需要带评论token
        let needCommentToken = (needCommentTokenList.findIndex((item) => item === noHaveQueryUrl)) !== -1
        //判断是否添加token请求头
        if( token !== undefined && token !== "" && needToken && !needCommentToken){
            //用户token
            config.headers.token = token
        }
        //判断是否需要评论token
        else if( needCommentToken ){
            //评论token
            config.headers.token = relaxStore.commentToken
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
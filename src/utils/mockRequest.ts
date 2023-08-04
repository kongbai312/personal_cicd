import axios from 'axios';

const baseURL = '/mock'

const request = axios.create({
    baseURL,
    timeout: 10000
})

//请求拦截器
request.interceptors.request.use(
    config => {
        
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
//用户模块api
import request from '@/utils/request';
import type { GetCodeApiType, LoginType, RegisterApiType, LoginApiType } from '@/types/user'

//根地址
let baseUrl = 'https://api.apiopen.top'

//发送验证码
export const getCodeApi = ( mail : string) => {
    return request<GetCodeApiType,GetCodeApiType>({
        url: baseUrl + '/api/sendVerificationCode',
        method:'post',
        data: {
            mail
        }
    })
}

//用户注册
export const registerApi = ( form : LoginType) => {
    return request<RegisterApiType,RegisterApiType>({
        url: baseUrl + '/api/register',
        method:'post',
        data: form
    })
}

//用户登录
export const loginApi = ( form : LoginType) => {
    return request<LoginApiType,LoginApiType>({
        url: baseUrl + '/api/login',
        method:'post',
        data: form
    })
}

//获取自己的详细用户信息
export const getDetailUserInfoApi = () => {
    return request({
        url: baseUrl + '/api/getUserInfo',
        method:'get'
    })
}
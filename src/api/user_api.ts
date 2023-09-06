//用户模块api
import request from '@/utils/request';
import type { 
    GetCodeApiType, 
    LoginType, 
    RegisterApiType, 
    LoginApiType , 
    GetDetailUserInfoApiType ,
    SetDetailUserInfoApiType ,
    UserDetailInfoType
} from '@/types/user'

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
    return request<GetDetailUserInfoApiType,GetDetailUserInfoApiType>({
        url: baseUrl + '/api/getUserInfo',
        method:'get'
    })
}

//修改自己的详细用户信息
export const setDetailUserInfoApi = ( form : UserDetailInfoType ) => {
    return request<SetDetailUserInfoApiType,SetDetailUserInfoApiType>({
        url: baseUrl + '/api/updateUserInfo',
        method: 'post',
        data : form
    })
}
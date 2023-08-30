//用户模块

//登录表单类型
export type LoginType = {
    account : string ,
    password: string ,
    code? : string
}

//获取验证码接口的返回类型
export type GetCodeApiType = {
    code : number,
    message :string
}

//注册接口的返回类型
export type RegisterApiType = {
    code : number,
    message :string,
    result : object
}

//登录接口的返回类型
export type LoginApiType = RegisterApiType

//用户信息
export type UserInfoType = {
    account?: string,
    createdAt?: {
      "time.Time"?: string
    },
    deletedAt?: {
      "time.Time"?: string
    },
    id?: number,
    level?: number,
    token?: string,
    updatedAt?: {
      "time.Time"?: string
    }
    detail?:{
        birthday? : string,
        blurb? : string,
        "head_url"? : string,
        name? : string,
        updatedAt? : string
    }
}
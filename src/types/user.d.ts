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

//获取详情信息接口的返回类型
export type GetDetailUserInfoApiType = {
  code : number,
  message :string,
  result : UserDetailInfoType
}

//修改详情信息接口的返回类型
export type SetDetailUserInfoApiType = {
  code : number,
  message :string,
  result : UserDetailInfoType
}

//获取用户详情信息的返回类型
export type DetailUserInfoApiType = RegisterApiType

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
    detail? : UserDetailInfoType
}

//用户详情信息
export type UserDetailInfoType = {
    birthday? : string,
    blurb? : string,
    "head_url"? : string,
    name? : string,
    updatedAt? : string
}
//获取用户Ip以及所在地
import request from "./request";

// 信息类型
export type InfoType = {
    ip : string,
    address: string,
}

// 请求Ip返回类型
type IpType = {
    ip : string
}

//请求所在地返回类型
type AddressType = {
    adcode :{
        c : string
    }
}

//获取所在ip
export const getIp = async () => {
    // 信息对象
    let info  = {} as InfoType
    // 发送请求获取ip
    let resultIp = await request<IpType,IpType>({
        url:'https://api.ipify.org/?format=json'
    })
    // 存储Ip
    info.ip = resultIp.ip
    //发送请求获取所在地
    let resultAddress = await request<AddressType,AddressType>({
        url:`https://api.vore.top/api/IPdata?ip=${info.ip}`
    })
    //存储所在地
    info.address = resultAddress.adcode.c
    
    //返回信息
    return info
}
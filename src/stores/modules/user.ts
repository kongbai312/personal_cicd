import { defineStore } from 'pinia';

export const useUserStore = defineStore('sw-user',() => {
    //用户信息
    let userInfo = ref()

    //修改用户信息
    let setUserInfo = ( info : object) => {
        userInfo.value = info
    }

    return {
        userInfo,
        setUserInfo
    }
},{
    // 配置持久化
    persist:{
        key:'sw-user',
        paths:['userInfo']
    }
})
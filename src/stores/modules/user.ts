import { defineStore } from 'pinia';
import type { UserInfoType } from '@/types/user'

export const useUserStore = defineStore('sw-user',() => {
    // 用户信息
    let userInfo = ref<UserInfoType>({})

    // 是否打开登录弹层
    let showLoginDialog = ref(false)

    // 修改用户信息
    const setUserInfo = ( info : object ) => {
        userInfo.value = info
    }

    // 修改用户详情部分信息
    const setUserDetailInfo = ( detail : object ) => {
        userInfo.value.detail = detail
    }

    //修改弹层显示隐藏
    const setShowLoginDialog = ( value : boolean ) => {
        showLoginDialog.value = value
    }

    return {
        userInfo,
        setUserInfo,
        showLoginDialog,
        setShowLoginDialog,
        setUserDetailInfo
    }
},{
    // 配置持久化
    persist:{
        key:'sw-user',
        paths:['userInfo']
    }
})
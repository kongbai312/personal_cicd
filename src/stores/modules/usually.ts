import { defineStore } from 'pinia';

export const useUsuallyStore = defineStore('sw-usually',() => {
    //存储主题状态 true是黑夜 ， false是白天
    let themeStatus = ref(false)
    
    //是否第一次加载首页
    let isFirstHome = ref(true)

    //当前导航激活的是哪个
    let navbarActiveItem = ref('personal')

    //是否展开目录
    let isOpen = ref(true)

    //修改主题状态
    const setThemeStatus = ( val : boolean) => {
        themeStatus.value = val
    }

    //修改导航
    const setNavbarActiveItem = ( val : string) => {
        navbarActiveItem.value = val
    }

    //修改是否展开
    const setIsOpen = ( val : boolean ) => {
        isOpen.value = val
    }

    //修改是否第一次加载主页
    const setIsFirstHome = ( val : boolean ) => {
        isFirstHome.value = val
    }

    return{
        themeStatus,
        setThemeStatus,
        navbarActiveItem,
        setNavbarActiveItem,
        isOpen,
        setIsOpen,
        isFirstHome,
        setIsFirstHome
    }
},{
    // 配置持久化
    persist:{
        key:'sw-usually',
        paths:['themeStatus']
    }
})
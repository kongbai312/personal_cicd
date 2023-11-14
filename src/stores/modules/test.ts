import { defineStore } from "pinia";

export const useTestStore = defineStore('sw-test',() => {
    //图片上传token
    let uploadImgToken = ref()

    //上次上传图片时间
    let lastUploadImgTime = ref(0)

    //设置图片上传token
    const setUploadImgToken = ( token : string) => {
        uploadImgToken.value = token
    }

    //设置上次上传图片时间
    const setLastUploadImgTime = ( time : number ) => {
        lastUploadImgTime.value = time
    }

    return{
        uploadImgToken,
        lastUploadImgTime,
        setUploadImgToken,
        setLastUploadImgTime
    }
},{
    // 配置持久化
    persist:{
        key:'sw-test',
        paths:['uploadImgToken','lastUploadImgTime']
    }
})
import { defineStore } from 'pinia';

export const useRelaxStore = defineStore('sw-relax',() => {
    // 评论时所需的token
    let commentToken = ref('')

    // 上次评论的时间
    let commentTime = ref(0)

    // 设置token
    const setCommentToken = ( token : string ) => {
        commentToken.value = token
    }

    //设置评论时间
    const setCommentTime = ( time : number ) => {
        commentTime.value = time
    }

    return {
        commentToken,
        setCommentToken,
        commentTime,
        setCommentTime
    }
},{
    // 配置持久化
    persist:{
        key:'sw-relax',
        paths:['commentToken','commentTime']
    }
})
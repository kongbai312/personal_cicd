<template>
    <div class="user_container">
        <!-- 顶部 -->
        <pr_headerImg :right="true" :img="imgUrl" :titleArr="['个','人','中','心']"></pr_headerImg>
        <!-- 内容 -->
        <div class="user_content">

        </div>
    </div>
</template>

<script setup lang='ts'>
import { getDetailUserInfoApi } from '@/api/user_api';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores'
    //背景大图
    let imgUrl = 'https://pic.imgdb.cn/item/64ef74f9661c6c8e54cb552f.jpg'

    //引入router 
    const router = useRouter()

    //引入store
    const store = useUserStore()

    //用户详情信息
    let userDetailInfo = ref()

    //获取用户详情信息
    const getDetailUserInfo = async () => {
        //发送请求获取用户详情
        let result = await getDetailUserInfoApi()
        if( result.code === 200 ){//获取用户信息成功
            userDetailInfo.value = result.result
            //存储到store
            store.setUserDetailInfo( result.result )
        }
        else if( result.code === 401 ){
            // 提示
            ElMessage.info( result.message + ',请重新登录' )
            // 返回主页
            router.push('/personal')
            // 弹出登录框
            store.setShowLoginDialog(true)
        }

    }

    onMounted(() => {
        getDetailUserInfo()
    })

</script>

<style lang="scss" scoped>
    .user_container{
        user-select: none;
        // 内容
        .user_content{
            padding: 30px 50px;
        }
    }
</style>

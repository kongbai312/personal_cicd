<template>
  <div class="albumPhoto_container">
    <pr_headerImg :img="url" :titleArr="titleArr"></pr_headerImg>
    <!-- 内容 -->
    <div class="albumPhoto_content">
        <el-card 
            shadow="hover" 
            class="albumPhoto_elCard" 
            v-infinite-scroll="load" 
            :infinite-scroll-disabled="finished"
        >
            <img class="albumPhotoItem_img" :src="item" alt="" v-for="(item,index) in album" :key="index">
            <div v-loading="loading" element-loading-text="Loading..."></div>
            <div class="finished" v-if="finished">没有更多啦 ┭┮﹏┭┮</div>
        </el-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { getAlbumApi } from '@/api/mock_api';
import '@/mock/index';
import { useRoute } from 'vue-router';
    let url = 'https://pic.imgdb.cn/item/64c607331ddac507cc49cc9d.jpg'
    
    //引入route
    const route = useRoute()

    //获取相册id
    const id = computed(() => {
        return Number(route.params.id)
    })

    //获取相册标题
    const titleArr = computed(() => {
        let title = route.query.title as string
        //赋值给meta
        route.meta.title = title
        document.title = `Swhite's小窝-${title}`
        return title.split('')
    })


    //相册内容
    let album = ref<string[]>([])

    // 请求参数
    let albumPageInfo = ref({
        page: 1,
        pageSize : 10
    })

    //总共有多少页
    let totalPage = ref()

    //获取相册数据
    const getAlbum = async () => {
        let result = await getAlbumApi({...albumPageInfo.value,id:id.value})
        album.value.push(...result.data.pageData)
        totalPage.value = result.data.totalPage
    }
    onMounted(() => {
        getAlbum()
    })

    //是否正在加载
    let loading = ref(false)

    //是否加载完成
    let finished = ref(false)

    //无限加载
    const load = () => {
        // 更改加载状态
        loading.value = true
        // 如果当前页面小于总页码
        if(albumPageInfo.value.page < (totalPage.value as number)){
            // 页码加1
            albumPageInfo.value.page++
            // 发送请求获取新的数据
            getAlbum()
            
        }
        else if(albumPageInfo.value.page >= (totalPage.value as number)){//说明加载完成
            finished.value = true
        }
        // 更改加载状态
        loading.value = false
    }
</script>

<style lang="scss" scoped>
    .albumPhoto_container{
        .albumPhoto_content{
            padding: 10px 10px;
            .albumPhoto_elCard{
                box-sizing: border-box;
                padding: 40px 50px;
                border-radius: 20px;
                ::v-deep(){
                    .el-card__body{
                        // 一共有多少列
                        column-count: auto;
                        // 列与列之间的间隙
                        column-gap: 30px;
                    }
                }
                .albumPhotoItem_img{
                    width: 100%;
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 10px;
                }
                // 正在加载
                .el-loading-parent--relative{
                    ::v-deep(){
                        .el-loading-mask{
                            .el-loading-spinner{
                                margin-top: 0;
                                .circular{
                                    height: 100px;
                                    width: 100px;
                                }
                                .el-loading-text{
                                    font-size: 50px;
                                }
                            }
                        }
                    }
                }
                //加载完成
                .finished{
                    text-align: center;
                }
            }
        }
    }
    @media (min-width: 900px) {
        .albumPhoto_container{
            .albumPhoto_content{
                .albumPhoto_elCard{
                    ::v-deep(){
                        .el-card__body{
                            column-width: 280px;
                        }
                    }
                    .albumPhotoItem_img{
                        max-width: 280px;
                    }
                    .el-loading-parent--relative{
                        //不显示
                        display: none;
                        ::v-deep(){
                            .el-loading-mask{
                                .el-loading-spinner{
                                    max-width: 280px;
                                    .circular{
                                        max-width: 30px;
                                        max-height: 30px;
                                    }
                                    .el-loading-text{
                                        font-size: 18px;
                                    }
                                }
                            }
                        }
                    }
                    .finished{
                        display: none;
                    }
                }
            }
        }
    }
    @media (min-width: 600px) and (max-width: 900px) {
        .albumPhoto_container{
            .albumPhoto_content{
                .albumPhoto_elCard{
                    ::v-deep(){
                        .el-card__body{
                            column-width: 280px;
                        }
                    }
                    .albumPhotoItem_img{
                        max-width: 280px;
                    }
                    .el-loading-parent--relative{
                        //不显示
                        display: none;
                    }
                    .finished{
                        display: none;
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        .albumPhoto_container{
            .albumPhoto_content{
                .albumPhoto_elCard{
                    border-radius: 15px;
                    padding: 20px 15px;
                    ::v-deep(){
                        .el-card__body{
                            column-width: 280px;
                        }
                    }
                    .albumPhotoItem_img{
                        width: 100%;
                        margin-bottom: 10px;
                        border-radius: 15px;
                    }
                    .finished{
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>

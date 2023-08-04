<template>
  <div class="labelList_container">
    <!-- 顶部 -->
    <pr_headerImg :titleArr="['标','签']" :img="url"></pr_headerImg>
    <!-- 内容 -->
    <div class="labelList_content">
        <el-card shadow="hover" class="labelList_elCard">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="item in articles" :key="item.id">
                    <el-card shadow="hover" class="labelItem_elCard" >
                        <div class="labelItem_article" @click="goto(item.id)">
                            <div class="imgBox">
                                <el-image lazy fit="cover" class="labelItem_img" :src="disposeImg(item.image)" alt="" />
                            </div>
                            <div class="labelItem_content">
                                <span class="title">{{item.title}}</span>
                                <div class="createTime_box">
                                    <div class="timeBox">
                                        <i class="iconfont icon-rili"></i>
                                        <span class="time">{{item.createTime}}</span>
                                    </div>
                                    <i class="iconfont icon-shoucang"></i>
                                </div>
                                <div class="label_box" v-for="(tag,index) in item.tags" :key="index">
                                    <i class="iconfont icon-biaoqian"></i>
                                    <span class="labelText">{{tag}}</span>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { getArticleListApi } from '@/api/mock_api';
import { useRoute, useRouter } from 'vue-router';
import type { ActicleType } from '@/types/personal';
import '@/mock/index';
import { useRandomBg } from '@/hooks'
    // 图片url
    let url = 'https://pic.imgdb.cn/item/64bd23241ddac507ccbb5b60.jpg'

    //引入route
    const route = useRoute()
    //获取tag
    let tag = computed(() => {
        return route.params.label
    })

    //存储文章
    let articles = ref<ActicleType[]>([])

    //获取所有文章
    const getArticles = async() => {
        let result = await getArticleListApi()
        disposeArticlesByTag(result.data)
    }
    onMounted(()=>{
        getArticles()
    })
    //处理数据，获取包含对应tag的文章
    const disposeArticlesByTag = ( articleArr : ActicleType[]) => {
        articleArr.forEach( article => {
            // 是否有tag
            let isPush = article.tags.findIndex( item => item === tag.value)
            // 有tag
            if(isPush !== -1){
                articles.value.push(article)
            }
        })
    }

    // 引入router
    const router = useRouter()
    // 去文章页面
    const goto = ( id : number) => {
        router.push(`/article/${id}`)
    }

    //处理图片
    const disposeImg = ( src : string ) => {
        return src ? src : useRandomBg()
    }
</script>

<style lang="scss" scoped>
    .labelList_container{
        .labelList_content{
            padding: 30px 50px;
            .labelList_elCard{
                box-sizing: border-box;
                padding: 30px;
                border-radius: 30px;
                // 单个文章
                .labelItem_elCard{
                    border-radius: 20px;
                    margin-bottom: 30px;
                    ::v-deep(){
                        .el-card__body{
                            padding: 0;
                        }
                    }
                    .labelItem_article{
                        display: flex;
                        flex-direction: column;
                        &:hover{
                            .imgBox{
                                &::after{
                                    background-color: transparent;
                                }
                                .labelItem_img{
                                    transform: scale(1.1);
                                    filter: brightness(.9);
                                }
                            }
                        }
                        // 图片
                        .imgBox{
                            width: 100%;
                            height: 300px;
                            overflow: hidden;
                            position: relative;
                            &::after{
                                content: "";
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                left: 0;
                                top:0;
                                background-color: var(--sw-after-bg-color);
                            }
                            .labelItem_img{
                                width: 100%;
                                height: 100%;
                                transition: all .5s;
                            }
                        }

                        .labelItem_content{
                            box-sizing: border-box;
                            padding: 10px 26px 20px 26px;
                            .title{
                                letter-spacing: 3px;
                            }
                            .createTime_box{
                                display: flex;
                                margin: 26px 0;
                                font-size: 18px;
                                justify-content: space-between;
                                align-items: center;
                                color: var(--sw-labelList-time-color);
                                .timeBox{
                                    .icon-rili{
                                        font-size: 16px;
                                        margin-right: 10px;
                                    }
                                }
                            }
                        }

                        .label_box{
                            box-sizing: border-box;
                            display: inline-block;
                            padding: 10px 10px;
                            font-size: 16px;
                            border-radius: 10px;
                            position: relative;
                            color: var(--sw-labelList-label-color);
                            background-color: var(--sw-labelList-label-bg-color);
                            transition: all .2s ease-in-out 0s;
                            margin-right: 20px;
                            &:hover{
                                color: #e9546b;
                            }
                            &:hover::before{
                                width: 104%;
                                left: -2%;
                            }
                            &::before{
                                content: "";
                                position: absolute;
                                bottom: 0;
                                height: 100%;
                                width: 0;
                                right: 0;
                                background: rgba(233, 84, 107, .1);
                                border-radius: 10px;
                                transition: all .2s ease-in-out 0s;
                            }
                            .icon-biaoqian{
                                font-size: 20px;
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width:1200px) {
        .labelList_container{
            .labelList_content{
                .labelList_elCard{
                    .labelItem_elCard{
                        .labelItem_article{
                            .labelItem_content{
                                .title{
                                    font-size: 24px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width:992px) {
        .labelList_container{
            .labelList_content{
                .labelList_elCard{
                    .labelItem_elCard{
                        .labelItem_article{
                            .labelItem_content{
                                .title{
                                    font-size: 22px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    @media (min-width:768px) {
        .labelList_container{
            .labelList_content{
                .labelList_elCard{
                    .labelItem_elCard{
                        .labelItem_article{
                            .imgBox{
                                height: 200px;
                            }
                            .labelItem_content{
                                padding: 10px 20px 20px 20px;
                                .createTime_box{
                                    font-size: 14px;
                                    margin: 15px 0;
                                    .timeBox{
                                        .icon-rili{
                                            font-size: 14px;
                                        }
                                    }
                                }
                                .title{
                                    font-size: 22px;
                                }
                            }
                        }
                    }
                }
            }
        }       
    }

    @media (max-width:768px) {
        .labelList_container{
            .labelList_content{
                .labelList_elCard{
                    border-radius: 10px;
                    .labelItem_elCard{
                        margin-bottom: 20px;
                        border-radius: 10px;
                        .labelItem_article{
                            .imgBox{
                                height: 200px;
                            }
                            .labelItem_content{
                                padding: 10px 20px 20px 20px;
                                .createTime_box{
                                    margin: 15px 0;
                                }
                                .title{
                                    font-size: 20px;
                                }
                                .createTime_box{
                                    .timeBox{
                                        .icon-rili{
                                            margin-right: 6px;
                                        }
                                    }
                                }
                            }
                            .label_box{
                                border-radius: 5px;
                                padding: 5px;
                                .icon-biaoqian{
                                    margin-right: 6px;
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
</style>

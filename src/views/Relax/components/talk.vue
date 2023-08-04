<template>
    <div class="talk_container">
        <pr_headerImg :img="url"  :titleArr="['说','说']"></pr_headerImg>
        <div class="talk_content">
            <el-card shadow="hover" class="talkList">
                <el-card shadow="hover" class="talkItem_elCard" v-for="item in talkList" :key="item.id">
                    <div class="talkItem">
                        <div class="talkItem_header">
                            <el-image fit="cover" class="headerImg" :src="item.avatar" alt="" />
                            <div class="header_content">
                                <div class="name">
                                    <span>{{ item.name }}</span>
                                    <img class="nameImg" src="/src/assets/bigV.png" alt="">
                                </div>
                                <span class="createTime">{{item.createTime}}</span>
                            </div>
                        </div>
                        <div class="talkItem_content">
                            <span class="text">{{ item.text }}</span>
                            <div class="imgBox" v-if="item.imageList.length > 0">
                                <el-image 
                                    v-for="(image,index) in item.imageList"
                                    lazy 
                                    fit="cover" 
                                    class="imgItem" 
                                    :src="image"
                                    :preview-src-list="item.imageList" 
                                    :initial-index="index"
                                    alt=""
                                />
                            </div>
                            <div class="discord">
                                <span class="discordItem"><i class="iconfont icon-dianzan"></i>{{item.like}}</span>
                                <span class="discordItem"><i class="iconfont icon-pinglun"></i>{{item.comment}}</span>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-card>
        </div>
    </div>
</template>

<script setup lang='ts'>
import type { TalkType } from '@/types/relax';
import { getTalkDataApi } from '@/api/mock_api';
import '@/mock/index';
    //大图
    let url = 'https://img-baofun.zhhainiao.com/fs/bfec7f6af878a00db3eca7706ae983aa.jpg'

    //说说列表
    let talkList = ref<TalkType[]>()

    //获取说说数据
    const getTalkList = async () => {
        let result = await getTalkDataApi()
        //处理数据 倒序
        talkList.value = result.data.reverse()
    }
    onMounted(() => {
        getTalkList()
    })
</script>

<style lang="scss" scoped>
    .talk_container{
        .talk_content{
            box-sizing: border-box;
            padding: 30px 50px;
            display: flex;
            justify-content: center;
            .talkList{
                box-sizing: border-box;
                width: 100%;
                padding: 30px 220px;
                border-radius: 20px;
                .talkItem_elCard{
                    box-sizing: border-box;
                    border-radius: 20px;
                    margin-bottom: 30px;
                    .talkItem{
                        display: flex;
                        flex-direction: column;
                        // 头部
                        .talkItem_header{
                            display: flex;
                            height: 100px;
                            .headerImg{
                                width: 100px;
                                height: 100%;
                                border-radius: 20px;
                            }
                            // 头部内容
                            .header_content{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                padding: 0 10px;
                                .name{
                                    color: #ef89c6;
                                    display: flex;
                                    align-items: center;
                                    font-weight: 600;
                                    font-size: 26px;
                                    .nameImg{
                                        margin-left: 10px;
                                        width: 24px;
                                        height: 24px;
                                        object-fit: cover;
                                    }
                                }
                                .createTime{
                                    color: #9499a0;
                                    font-size: 24px;
                                }
                            }
                        }
                        // 内容
                        .talkItem_content{
                            margin-top: 30px;
                            .text{
                                display: inline-block;
                                font-size: 30px;
                                margin-bottom: 30px;
                            }
                            .imgBox{
                                display: flex;
                                flex-wrap: wrap;
                                .imgItem{
                                    margin-bottom: 30px;
                                    margin-right: 20px;
                                    width: 400px;
                                    height: 220px;
                                    border-radius: 10px;
                                    position: relative;
                                    &::after{
                                        content: "";
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        left: 0;
                                        top: 0;
                                        background-color: var(--sw-after-bg-color);
                                    }
                                }
                            }
                            .discord{
                                display: flex;
                                align-items: center;
                                .discordItem{
                                    font-size: 28px;
                                    color: #9499a0;
                                    .iconfont{
                                        font-size: 28px;
                                        margin-right: 10px;
                                    }
                                    .icon-pinglun{
                                        margin-left: 30px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }

    @media (max-width: 992px) {
        .talk_container{
            .talk_content{
                .talkList{
                    padding: 30px 30px;
                    .talkItem_elCard{
                        margin-bottom: 20px;
                        padding: 15px 15px;
                        .talkItem{
                            .talkItem_header{
                                .header_content{
                                    .name{
                                        .nameImg{
                                            width: 15px;
                                            height: 15px;
                                        }
                                    }
                                }
                            }
                            
                            // 内容
                            .talkItem_content{
                                .imgBox{
                                    .imgItem{
                                        width: 220px;
                                        height: 140px;
                                    }
                                }
                                .discord{
                                    .discordItem{
                                        font-size: 16px;
                                        .iconfont{
                                            font-size: 16px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        .talk_container{
            .talk_content{
                .talkList{
                    border-radius: 15px;
                    .talkItem_elCard{
                        margin-bottom: 20px;
                        border-radius: 15px;
                        .talkItem{
                            // 头部
                            .talkItem_header{
                                height: 50px;
                                .headerImg{
                                    border-radius: 10px;
                                    width:50px;
                                }
                                .header_content{
                                    padding: 0 10px;
                                    .name{
                                        font-size: 14px;
                                    }
                                    .createTime{
                                        font-size: 13px;
                                    }
                                }
                            }
                            // 内容
                            .talkItem_content{
                                margin-top: 10px;
                                .text{
                                    font-size: 14px;
                                }
                                .imgBox{
                                    .imgItem{
                                        margin-right: 0;
                                    }
                                }
                                .discord{
                                    margin-top: 10px;
                                    .discordItem{
                                        font-size: 16px;
                                        .iconfont{
                                            font-size: 16px;
                                            margin-right: 5px;
                                        }
                                        .icon-pinglun{
                                            font-size: 15px;
                                            margin-left: 20px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

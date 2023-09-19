<template>
  <div class="prComment_container">
    <!-- 头部标题 -->
    <div class="comment_header">
        <i class="iconfont icon-pinglun1"></i>
        <span class="text">评论</span>
    </div>
    <!-- 评论 -->
    <div class="comment_content">
        <img class="avatar" :src="avatar" alt="">
        <el-input
            class="input"
            v-model="text"
            rows="3"
            type="textarea"
            placeholder="评论区很精彩，期待你的评论！"
        />
        <div class="content_button">评论</div>
    </div>
    <!-- 表情 -->
    <div class="emoji">
        <el-popover width="300px" placement="bottom" trigger="click" popper-class="emojiPopover" :teleported="false">
            <template #reference>
                <i class="iconfont icon-biaoqing"></i>
            </template>
            <el-tabs type="border-card" tab-position="bottom" class="elTabs">
                <el-tab-pane label="User">User</el-tab-pane>
                <el-tab-pane label="Config">Config</el-tab-pane>
                <el-tab-pane label="Role">Role</el-tab-pane>
                <el-tab-pane label="Task">Task</el-tab-pane>
            </el-tabs>
        </el-popover>
    </div>
    <!-- 评论区 -->
    <div class="comments">
        <div class="commentItem" v-for="item in 6" :key="item">
            <img class="commentItem_avatar" src="https://pic.imgdb.cn/item/64f83419661c6c8e54f32ead.png">
            <div class="commentItem_content">
                <div class="name">名字为八个字</div>
                <div class="text">我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容</div>
                <div class="time">
                    <span class="timeText">2023-09-03 12:46:37</span>
                    <i class="iconfont icon-dianzan"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores';
import emojiJson from '@/assets/json/emoji.json'

    //引入store
    const store = useUserStore()

    //用户信息
    let userInfo = computed(() => {
        return store.userInfo
    })
    
    //用户头像
    let avatar = computed(() => {
        return store.userInfo.detail?.head_url === undefined ? 'https://pic.imgdb.cn/item/64f83419661c6c8e54f32ead.png' : store.userInfo.detail?.head_url
    })

    //输入框内容
    let text = ref()

    onMounted(()=>{
        console.log(userInfo.value.detail?.head_url === undefined)
    })
</script>

<style lang="scss" scoped>
    .prComment_container{
        // 头部
        .comment_header{
            display: flex;
            align-items: center;
            height: 80px;
            
            .iconfont{
                font-size: 30px;
                font-weight: 700;
            }
            .text{
                font-size: 30px;
                font-weight: 700;
                margin-left: 10px;
            }
        }
        // 内容
        .comment_content{
            height: 100px;
            display: flex;
            align-items: center;
            
            .avatar{
                height: 100%;
                object-fit: cover;
            }
            .input{
                height: 100%;
                margin: 0 20px;
                font-size: 20px;
            }
            .content_button{
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                padding: 10px 20px;
                width: 120px;
                background-color: #ED9ABB;
                border-radius: 20px;
                font-size: 24px;
                color: #fff;
                height: 100%;
                cursor: url(../assets/cursor/link.cur),pointer;
            }
        }
        // 表情
        .emoji{
            box-sizing: border-box;
            display: inline-block;
            padding-left: 20px;
            margin-top: 30px;
            margin-left: 100px;
            .iconfont{
                font-size: 30px;
            }
            ::v-deep(){
                .emojiPopover{
                    padding: 0;
                    .elTabs{
                        border: none;
                    }
                }
            }
        }
        //评论区
        .comments{
            padding: 100px 0;
            .commentItem{
                padding: 30px 0;
                display: flex;
                border-bottom: 1px solid rgb(153, 153, 153,0.2);
                .commentItem_avatar{
                    height: 100px;
                    width: 100px;
                    object-fit: cover;
                }
                .commentItem_content{
                    margin-left: 20px;
                    .name{
                        font-size: 22px;
                        font-weight: 700;
                    }
                    .text{
                        font-size: 20px;
                        margin: 20px 0;
                    }
                    .time{
                        .timeText{
                            font-size: 20px;
                        }
                        .iconfont{
                            margin-left: 20px;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 600px) {
        .prComment_container{
            // 头部
            .comment_header{
                min-height: 50px;
            }
            // 内容
            .comment_content{
                min-height: 60px;
                .content_button{
                    min-width: 60px;
                }
            }
            
            //评论区
            .comments{
                .commentItem{
                    .commentItem_avatar{
                        min-height: 60px;
                        min-width: 60px;
                    }
                }
            }
        }
    }

    @media (min-width: 600px) and (max-width: 900px) {
        .prComment_container{
            // 头部
            .comment_header{
                .iconfont{
                    font-size: 18px;
                }
                .text{
                    font-size: 18px;
                }
            }
            // 表情
            .emoji{
                margin-left: 60px;
            }
        }
    }

    @media (max-width: 600px) {
        .prComment_container{
            // 头部
            .comment_header{
                height: 50px;
                .iconfont{
                    font-size: 16px;
                }
                .text{
                    font-size: 16px;
                }
            }
            // 内容
            .comment_content{
                height: 50px;
                .input{
                    font-size: 11px;
                }
                .content_button{
                    width: 70px;
                    font-size: 12px;
                }
            }
            // 表情
            .emoji{
                margin-left: 50px;
                .iconfont{
                    font-size: 16px;
                }
                ::v-deep(){
                    .emojiPopover{
                        .el-popper__arrow{
                            width: 8px;
                            height: 8px;
                            top: -4px;
                            &::before{
                                width: 8px;
                                height: 8px;
                            }
                        }
                    }
                }
            }
            //评论区
            .comments{
                .commentItem{
                    padding: 10px 0;
                    .commentItem_avatar{
                        height: 50px;
                        width: 50px;
                    }
                    .commentItem_content{
                        margin-left: 10px;
                        .name{
                            font-size: 14px;
                        }
                        .text{
                            margin: 10px 0;
                            font-size: 14px;
                        }
                        .time{
                            .timeText{
                                font-size: 10px;
                            }
                            .iconfont{
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

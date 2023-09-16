<template>
  <div class="feedback_container">
    <!-- 顶部 -->
    <pr_headerImg right :img="img" :position="false" :titleArr="['留','言','板']"></pr_headerImg>
    <!-- 内容 -->
    <div class="feedback_content">
        <el-card shadow="hover" class="feedbackCard">
            <div class="card_content">
                <div class="card_header">
                    <img class="headerImg" src="../../../assets/images/feedback/mailUp.png" alt="">
                    <div class="header_mailContent">
                        <div class="mailContent">
                            <img 
                                class="mailContent_img" 
                                src="https://npm.elemecdn.com/hexo-butterfly-envelope/lib/violet.jpg" alt=""
                            >
                            <div class="mailContent_content">
                                <span class="title">来自博主的留言<i class="iconfont icon-dongman"></i></span>
                                <div class="textContent">
                                    <span class="textItem">有什么想问的？</span>
                                    <span class="textItem">有什么想说的？</span>
                                    <span class="textItem">有什么想悄悄告诉我的？</span>
                                    <span class="textItem">或者有什么想吃的，都可以告诉我~</span>
                                </div>
                                <div class="bottom">
                                    <img class="bottom_img" src="../../../assets/images/feedback/mailInDown.png" alt="">
                                    <span class="bottom_text">自动书记人偶竭诚为您服务！</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img class="headerImg" src="../../../assets/images/feedback/mailDown.png" alt="">
                </div>
            </div>
        </el-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
   let img = "https://pic.imgdb.cn/item/650467bb661c6c8e54ba955a.jpg"
</script>

<style lang="scss" scoped>
    .feedback_container{
        .feedback_content{
            padding: 10px;
            .feedbackCard{
                border-radius: 20px;
                // 内容
                .card_content{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 50px 0;
                    // 头部
                    .card_header{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        overflow: hidden;
                        user-select: none;
                        transition: all 1s ease-in-out .3s;
                        .headerImg{
                            position: absolute;
                            max-width: 100%;
                            transition: filter 375ms ease-in 0.2s;
                            &:first-of-type{
                                z-index: 1;
                            }
                            &:last-of-type{
                                bottom: -2px;
                            }
                        }
                        .header_mailContent{
                            position: relative;
                            overflow: visible;
                            z-index: 2;
                            .mailContent{
                                .mailContent_img{
                                    display: block;
                                    max-width: 100%;
                                }
                                .mailContent_content{
                                    .title{
                                        margin: 40px 0px;
                                        display: inline-block;
                                        background-color: rgba(25,25,25,0.5);
                                        height: 60px;
                                        line-height: 60px;
                                        padding: 10px 50px;
                                        border: 5px solid rgba(180,181,182,0.6);
                                        color: #fff;
                                        clip-path: polygon(0px 0px, calc(100% - 1em) 0px, 100% 1em, 100% 100%, 1em 100%, 0px calc(100% - 1em));
                                        .iconfont{
                                            margin-left: 10px;
                                        }
                                    }
                                    .textContent{
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        padding: 20px 0px;
                                        border-top: 1px solid #ddd;
                                        border-bottom: 1px solid #ddd;
                                        background-color: #eee;
                                        .textItem{
                                            padding: 20px 10px;
                                        }
                                    }
                                    .bottom{
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        padding: 60px 0px 40px;
                                        .bottom_img{
                                            display: block;
                                            width: 100%;
                                        }
                                        .bottom_text{
                                            font-size: 12px;
                                            color: #999;
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

    @media (min-width: 600px) {
        .feedback_container{
            .feedback_content{
                .feedbackCard{
                    //内容
                    .card_content{
                        //头部
                        .card_header{
                            top: 0;
                            width: 530px;
                            height: 447px;
                            &:hover{
                                height: 1050px;
                                top: -200px
                            }
                            .headerImg{
                                &:first-of-type{
                                    width: 530px;
                                    height: 317px;
                                    left: 0;
                                    bottom: 126px;
                                }
                                &:last-of-type{
                                    width: 530px;
                                    height: 259px;
                                    left: 0;
                                    z-index: 3;
                                }
                            }
                            .header_mailContent{
                                margin: 0 auto;
                                padding-top: 200px;
                                width: 500px;
                                .mailContent{
                                    background: #fff;
                                    width: 95%;
                                    max-width: 800px;
                                    margin: auto auto;
                                    border-radius: 5px;
                                    border: 1px solid;
                                    padding: 1px;
                                    overflow: hidden;
                                    -webkit-box-shadow: 0 0 20px 0 #000;
                                    box-shadow: 0 0 20px 0 #000;
                                    .mailContent_img{
                                        width: 100%;
                                        overflow: hidden;
                                        pointer-events: none;
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
        .feedback_container{
            .feedback_content{
                .feedbackCard{
                    //内容
                    .card_content{
                        //头部
                        .card_header{
                            .headerImg{
                                display: none;
                            }
                            .header_mailContent{
                                //信内容
                                .mailContent{
                                    .mailContent_content{
                                        .title{
                                            margin: 20px 0;
                                            padding: 10px 20px;
                                            .iconfont{
                                                margin-left: 5px;
                                            }
                                        }
                                        .textContent{
                                            padding: 20px 0;
                                            .textItem{
                                                padding: 15px 5px;
                                            }
                                        }
                                        .bottom{
                                            padding: 30px 0 15px;
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

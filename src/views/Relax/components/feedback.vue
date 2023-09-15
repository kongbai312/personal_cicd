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
                    <img class="headerImg" src="../../../assets/images/feedback/mailDown.png" alt="">
                    <div class="header_mailText">123</div>
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
                    // 头部
                    .card_header{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        .headerImg{
                            width: 800px;
                            z-index: 3;
                            &:first-of-type{
                                z-index: 1;
                                transform: translateY(41%);
                            }
                        }
                        .header_mailText{
                            transform: translateY(-64%);
                            width: 700px;
                            height: 600px;
                            background-color: #fff;
                            z-index: 2;
                        }
                    }
                }
            }
        }
    }
</style>

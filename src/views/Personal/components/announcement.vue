<template>
  <div class="announcement_container">
    <el-card shadow="hover" class="announcement_elCard">
        <div class="an_elCard_content">
            <i class="iconfont icon-laba"></i>
            <div class="elCard_carousel">
                <!-- 轮播 -->
                <el-carousel indicator-position="none" arrow="never" autoplay height="30px" direction="vertical" >
                    <el-carousel-item class="elCard_carouselItem" v-for="item in announcementList" :key="item.id">
                        <span class="elCard_carouselItem_text">{{item.text}}</span>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <i class="iconfont icon-yuandayu arr"></i>
        </div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { getAnnouncementListApi } from '@/api/mock_api';
import type { AnnouncementType } from '@/types/personal';

    //公告列表
    let announcementList = ref<AnnouncementType[]>()

    //获取公告列表
    const getAnnouncementList = async() => {
        let result = await getAnnouncementListApi()
        announcementList.value = result.data
    }
    onMounted(() => {
        getAnnouncementList()
    })
</script>

<style lang="scss" scoped>
@keyframes arrAnAnimation{
    0% {
        transform: translate(-50%);
        opacity: 0;
    }
    50% {
        transform: translate(0);
        opacity: 1;
    }
    100% {
        transform: translate(50%);
        opacity: 0;
    }
}
    .announcement_container{
        margin-bottom: 20px;
        .announcement_elCard{
            border-radius: 25px;
            // 内容
            .an_elCard_content{
                display: flex;
                align-items: center;
                justify-content: space-between;
                // 轮播
                .elCard_carousel{
                    width: 100%;
                    padding: 0 30px;
                    .elCard_carouselItem{
                        display: flex;
                        align-items: center;
                        .elCard_carouselItem_text{
                            display: -webkit-box;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                        }
                    }
                }
                .arr{
                    animation: arrAnAnimation 1.5s linear 0s normal infinite;
                }
            }
        }
    }
</style>

<template>
  <div class="swiper_container">
    <el-carousel height="220px" class="swiper_carousel" :autoplay="true" arrow="always">
        <el-carousel-item v-for="item in swiperList" :key="item.id">
            <div class="swiperItem">
                <img :src="item.image" alt="">
                <div class="swiperItem_content" @click="goto(item.articleId)">
                    <span class="swiperItem_title">{{item.title}}</span>
                    <span class="swiperItem_time">发布时间：{{item.createTime}}</span>
                </div>
            </div>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang='ts'>
import type { SwiperType } from '@/types/personal';
import { getSwiperListApi } from '@/api/mock_api';
import { useRouter } from 'vue-router';

    // 轮播列表
    let swiperList = ref<SwiperType[]>()
    //获取轮播数据
    const getSwiperList = async () => {
        let result = await getSwiperListApi()
        swiperList.value = result.data
    }
    onMounted(() => {
        getSwiperList()
    })

    //引入router
    const router = useRouter()

    // 点击轮播
    const goto = ( id : number) => {
        router.push(`/article/${id}`)
    }
</script>

<style lang="scss" scoped>
::v-deep(){
    .el-carousel__arrow{
        width: 80px;
        height: 80px;
        .el-icon{
            font-size: 60px;
        }
    }
}
.swiper_container{
    margin-bottom: 20px;
    position: relative;
    &::before{
        content: "\63a8\8350";
        position: absolute;
        z-index: 2;
        color: #fff;
        background: linear-gradient(90deg,#eab700,#ec8c69);
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper_carousel{
        border-radius: 25px;
        .swiperItem{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #00000014;
                left: 0;
                top: 0;
            }
            .swiperItem_content{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 1;
                color: #fff;
                cursor: url(../../../assets/cursor/link.cur),pointer;
                .swiperItem_title{
                    font-size: 60px;
                }
                .swiperItem_time{
                    margin-top: 20px;
                }
            }
        }
    }
    
}

@media (min-width:993px) {
    ::v-deep(){
        .el-carousel__arrow{
            width: 40px;
            height: 40px;
            .el-icon{
                font-size: 30px;
            }
        }
    }
    .swiper_container{
        &::before{
            padding: 5px 0px;
            letter-spacing: 3px;
            left: 20px;
            font-size: 16px;
            width: 70px;
            border-radius: 0 0 10px 10px;
        }
        .swiper_carousel{
            .swiperItem{
                height: 220px;
                img{
                    position: absolute;
                    height: 220px;
                    width: 100%;
                    object-fit: cover;
                }
                .swiperItem_content{
                    .swiperItem_title{
                        font-size: 32px;
                    }
                    .swiperItem_time{
                        font-size: 18px;
                    }
                }
                
            }
        }
    }
}
@media (max-width:992px) {
    .swiper_container{
        &::before{
            padding: 5px 0px;
            letter-spacing: 3px;
            left: 20px;
            font-size: 16px;
            width: 70px;
            border-radius: 0 0 10px 10px;
        }
        .swiper_carousel{
            .swiperItem{
                height: 220px;
                img{
                    position: absolute;
                    height: 220px;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
@media (max-width:660px){
    ::v-deep(){
        .el-carousel__arrow{
            width: 26px;
            height: 26px;
            .el-icon{
                font-size: 20px;
            }
        }
    }
    .swiper_container{
        .swiper_carousel{
            .swiperItem{
                .swiperItem_content{
                    .swiperItem_title{
                        font-size: 24px;
                    }
                    .swiperItem_time{
                        margin-top: 15px;
                    }
                }
            }
        }
    }
}
</style>

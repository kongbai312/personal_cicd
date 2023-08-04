<template>
  <div class="relaxNarbar_container">
    <el-card shadow="hover" class="relaxNarbar_elCard">
      <el-carousel 
        @change="change" 
        trigger="click" 
        type="card" 
        :autoplay="false" 
        class="relaxNarbar_carousel" 
        arrow="always"
        :direction="width <= 400 ? 'vertical' :'horizontal'"
      >
        <el-carousel-item class="carouselItem" v-for="item in RelaxNarbarJson" :key="item.id">
          <div class="carouselItem_content" @click="goto(item.path,item.index)">
            <img class="carouselItem_img" :src="item.img" alt="">
            <div class="carouselItem_text">{{item.title}}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import RelaxNarbarJson from '@/assets/json/relaxNarbarList.json';
import { useWindowSize } from '@vueuse/core';
import { useRouter } from 'vue-router';
  // 窗口长宽
  const { width } = useWindowSize()

  //引入router
  const router = useRouter()

  //当前激活的导航
  let active = ref(0)

  //轮播更改
  const change = (now : number,pre :number) => {
    // 存储当前激活的导航
    active.value = now
  }
  // 跳转
  const goto = ( path : string , index : number) => {
    // 如果当前点击的是激活导航，则跳转
    if( index === active.value){
      router.push(path)
    }
  }
</script>

<style lang="scss" scoped>
  .relaxNarbar_container{
    .relaxNarbar_elCard{

      border-radius: 20px;
      
      .relaxNarbar_carousel{
        height: 500px;
        ::v-deep(){
          .el-carousel__container{
            height: 100%;
          }
        }
        .carouselItem{
            display: flex;
            justify-content: center;
            align-items: center;
            ::v-deep(){
              .el-carousel__mask{
                background-color: transparent;
              }
            }
          .carouselItem_content{
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            &:hover{
              cursor: url(../../../assets/link.cur),pointer;
              .carouselItem_img{
                transform: scale(1.1);
              }
            }
            .carouselItem_img{
              width: 400px;
              height: 400px;
              border-radius: 50%;
              object-fit: cover;
              transition: all 0.5s;
            }
            .carouselItem_text{
              position: absolute;
              height: 60px;
              line-height: 60px;
              text-align: center;
              color: black;
              font-size: 40px;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              &::before{
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                background: var(--sw-footer-bg-color);
                background-size: 400% 400%;
                animation: bgAnimation 10s ease infinite;
                left: 0;
                top: 0;
                z-index: 0;
                opacity: 0.2;
                border-radius: 10px;
              }
            }
          }
          
        }
      }
    }
  }

  @media (max-width: 400px) {
    .relaxNarbar_container{
      .relaxNarbar_elCard{
        .relaxNarbar_carousel{
          height: 400px;
          .carouselItem{
            .carouselItem_content{
              .carouselItem_img{
                width: 180px;
                height: 180px;
              }
              .carouselItem_text{
                height: 30px;
                line-height: 30px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>

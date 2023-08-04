<template>
    <el-card shadow="hover" class="aboutCard">
        <template #header>
            <div class="aboutCard_header">
            <el-image 
                :preview-src-list="preImgList" 
                class="aboutCard_header_image" 
                src="/src/assets/homeCenter.png" 
                alt="" 
                :hide-on-click-modal="true"
            />
            </div>
        </template>
        <template #default>
            <div class="aboutCard_content">
            <div class="technology_box">
                <div class="technology_box_header">专业技能</div>
                <div class="technology_box_content" ref="target">
                <div class="technologyItem" v-for="item in technologyList" :key="item.title">
                    <span class="technologyItem_text">{{item.title}}</span>
                    <el-progress 
                    :text-inside="true" 
                    :stroke-width="22" 
                    :percentage="item.percentageInit"
                    striped
                    striped-flow
                    :duration="30"
                    :status="item.color"
                    class="technologyItem_progress"
                    />
                </div>
                </div>
            </div>
            </div>
        </template>
    </el-card>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
   //图片预览
  let preImgList = ref(['/src/assets/homeCenter.png'])
  
  //技术列表
  let technologyList = ref([
    {
      "title": 'HTML:',
      "color": 'exception',
      "percentage":98,
      "percentageInit":0
    },
    {
      "title": 'CSS:',
      "color": 'success',
      "percentage":95,
      "percentageInit":0
    },
    {
      "title": 'VUE:',
      "color": '',
      "percentage":94,
      "percentageInit":0
    },
    {
      "title": 'TS:',
      "color": 'warning',
      "percentage":92,
      "percentageInit":0
    }
  ])

  //进度条增加
  const addProgress = () => {
    technologyList.value.forEach(( item ) => {
      let timer = setInterval(() => {
        item.percentageInit ++
        if(item.percentageInit >= item.percentage){
          clearInterval(timer)
        }
      },50)
    })
  }
  
  // 可视目标  
  const target = ref(null)

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      // 如果目标进入可视区域
      if(isIntersecting){
        // 初始值小于最终值才增加
        if(technologyList.value.every((item) => item.percentageInit < item.percentage)){
          //进度条增加
          addProgress()
        }
      }
    },
  )
</script>

<style lang="scss" scoped>
    .aboutCard{
        border-radius: 20px;
        // 卡片头部
        .aboutCard_header{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          // 图片
          .aboutCard_header_image{
            border-radius: 50%;
            width: 260px;
            height: 260px;
            object-fit: cover;
          }
        }
        // 卡片内容
        .aboutCard_content{
            width: 100%;
            // 技术列表
            .technology_box{
              width: 100%;
              box-sizing: border-box;
              padding: 10px 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              // 头部标题
              .technology_box_header{
                font-size: 34px;
                font-weight: 700;
                margin-bottom: 30px;
              }
              .technology_box_content{
                width: 100%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .technologyItem{
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 0 30px;
                  width: 50%;
                  margin-bottom: 60px;
                  .technologyItem_text{
                    margin-right: 30px;
                  }
                  .technologyItem_progress{
                    width: 80%;
                    position: relative;
                    &::after{
                      content: "";
                      position: absolute;
                      border-radius: 50px;
                      width: 100%;
                      height: 100%;
                      background-color: var(--sw-after-bg-color);
                    }
                  }
                }
              }
            }
        }
    }

    @media ( max-width:600px ) {
        .about_container{
            // 内容
            .about_content{
                .aboutCard{
                // 卡片头部
                .aboutCard_header{
                    .aboutCard_header_image{
                        width: 120px;
                        height: 120px;
                    }
                }
                // 卡片内容
                .aboutCard_content{
                    .technology_box{
                      padding: 10px 10px;
                    .technology_box_header{
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    .technology_box_content{
                        .technologyItem{
                          width: 100%;
                          :deep(.el-progress-bar__innerText){
                            font-size: 12px;
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

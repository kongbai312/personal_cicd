<template>
  <div class="home_container">
    <h1 class="home_title">Swhite's&nbsp;&nbsp;Cabin</h1>
    <div class="home_navbar">
      <span class="home_navbar_item navbar_item_left" @click="router.push('/personal')">BLOG</span>
      <div class="home_circleContainer">
        <div class="home_circle"></div>
        <div class="home_circle_img"></div>
      </div>
      <span class="home_navbar_item navbar_item_right">OTHER</span>
    </div>
    <div class="home_live2d">
      <canvas id="live2dcanvas" width="600" height="600"></canvas>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { L2Dwidget } from 'live2d-widget'; 
import { useRouter } from 'vue-router';
import { useUsuallyStore } from '@/stores';

//引入router
const router = useRouter()

//live2d初始化
const live2dInit = () => {
  window.L2Dwidget.init({
    pluginRootPath: '/personaltsup/live2d/',//插件在站点上的根目录(相对路径)
    pluginJsPath: 'lib/',//脚本文件相对与插件根目录路径
    pluginModelPath: 'live2d-widget-model-shizuku/assets/',//模型文件相对与插件根目录路径
    tagMode: false,//标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
    debug: false,//调试, 是否在控制台输出日志
    // name:{
    //   canvas:'live2dcanvas'//自定义cavas标签的id（可不需要,默认live2dcanvas）
    // },
    model: { 
      jsonPath: import.meta.env.VITE_APP_LIVEPATH,
      // jsonPath: '/public/live2d/live2d-widget-model-shizuku/assets/shizuku.model.json',
      // jsonPath:'/node_modules/live2d-widget-model-shizuku/assets/shizuku.model.json',
      // jsonPath:'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json',
      // jsonPath: '/live2d/live2d-widget-model-shizuku/assets/shizuku.model.json',
      scale:1,//模型与canvas的缩放 
    },
    display: { 
      // superSample: 2, // 超采样等级
      // position: 'right', //显示位置：左或右
      width: 600,// canvas的长度
      height: 600,//canvas的高度
      // hOffset:-20,//canvas水平偏移
      // vOffset:-40,//canvas垂直偏移
    },
    // react:{//透明度条件
    //   opacityDefault:1,//默认透明度
    //   opacityOnHover: 0.5//鼠标移上透明度
    // },
    // dev:{
    //   border:false,//在canvas周围显示边界
    // },
    mobile: { 
      show: true,//是否在移动设备上显示
      // scale:0.5,//移动设备上的缩放
      motion: true, // 移动设备是否开启重力感应
    },
    log: false,
    dialog:{
      enable:false,//显示人物对话框
      hitokoto:false,//使用一言API
    }
  })
}

//引入store
const store = useUsuallyStore()

//主页加载 避免mock带来的影响
const homeLoad = () => {
  console.log(store.isFirstHome)
  //如果是第一次加载首页
  if(store.isFirstHome === true){
    //修改加载状态
    store.setIsFirstHome(false)
  }
  else{//如果不是第一次加载，说明回退，或者其他
    //重新加载主页
    location.reload()
    //修改状态 变回第一次加载
    store.setIsFirstHome(true)
  }
}
onMounted(() => {
  homeLoad()
  live2dInit()
})

</script>

<style lang="scss" scoped>
//动画
@keyframes img_animation{
  from{
    transform:rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
  // 主页容器
  .home_container{
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    overflow: hidden;
    //标题
    .home_title{
      font-size: 52px;
    }
    //导航
    .home_navbar{
      height: 70px;
      display: flex;
      align-items: center;
      .home_navbar_item{
        display: block;
        box-sizing: border-box;
        border: 1px solid #333;
        width: 500px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        cursor: pointer;
      }
      .home_navbar_item:hover{
        background-color: #CCC;
      }
      //中心
      .home_circleContainer{
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .home_circle{
          width: 100px;
          height: 100px;
          background-image: linear-gradient(to right bottom,red 50%,blue 50%);
          border-radius: 50%;
          z-index: 2;
          animation: img_animation 2s linear 0s normal infinite;
        }
        .home_circle_img{
          position: absolute;
          height: 86px;
          width: 86px;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          background: url(../../assets/images/homeCenter.png) no-repeat;
          background-size: cover;
          border-radius: 50%;
          z-index: 3;
        }
      }
      
      .navbar_item_left{
        border-radius: 40px 0 0 40px;
        border-right: none;
        margin-right: -45px;
      }
      .navbar_item_right{
        border-radius: 0 40px 40px 0;
        border-left: none;
        margin-left: -45px;
      }
    }
    //live2d
    .home_live2d{
      margin-top: 100px;
      #live2dcanvas{
        overflow: hidden;
      }
    }
  }

  @media (max-width: 992px) {
    .home_container{
      .home_title{
        font-size: 26px;
      }
      // 导航
      .home_navbar{
        height: 62px;
        .home_navbar_item{
          width: 35vw;
          height: 40px;
          line-height: 40px;
        }
        // 中心
        .home_circleContainer{
          width: 62px;
          height: 62px;
          .home_circle{
            width: 62px;
            height: 62px;
          }
          .home_circle_img{
            width: 54px;
            height: 54px;
          }
        }
        .navbar_item_left{
          border-radius: 20px 0 0 20px;
        }
        .navbar_item_right{
          border-radius: 0 20px 20px 0;
        }
      }
    }
  }

</style>

<template>
  <div class="footer_container">
    <div class="footer_content">
      <div class="author">©2023 - 2024 By Swhite</div>
      <div class="frame">框架: Vue / 语言: TypeScript</div>
      <div class="cardList">
        <el-tooltip content="博客作者" placement="bottom" effect="light" :offset="6">
          <div class="cardItem" @click="visitTo('author')">
            <div class="tag tagbox"><i class="iconfont icon-zuozhe"></i><span>Author</span></div>
            <div class="tagbox tagText tagAuthor">Swhite</div>
          </div>
        </el-tooltip>
        <el-tooltip content="技术框架" placement="bottom" effect="light" :offset="6">
          <div class="cardItem" @click="visitTo('frame')">
            <div class="tag tagbox"><i class="iconfont icon-vue"></i><span>Frame</span></div>
            <div class="tagbox tagText tagFrame">Vue</div>
          </div>
        </el-tooltip>
        <el-tooltip content="本站项目由Github托管" placement="bottom" effect="light" :offset="6">
          <div class="cardItem" @click="visitTo('github')">
            <div class="tag tagbox"><i class="iconfont icon-github"></i><span>Source</span></div>
            <div class="tagbox tagText tagSource">Github</div>
          </div>
        </el-tooltip>
      </div>
      <div class="visitTpye">
        您正在访问的是: Swhite's Nest 电脑端
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';

  //引入router
  const router = useRouter()

  //访问外链
  const visitTo = ( to : string ) => {
    if( to === 'author' ){
      //去关于界面
      router.push('/about')
    }
    else if( to === 'frame' ){
      // 跳转链接
      window.open('https://cn.vuejs.org/','_blank')
    }
    else{
      // 跳转链接
      window.open('https://github.com/kongbai312','_blank')
    }
  }
</script>

<style lang="scss" scoped>
@keyframes bgAnimation {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
  // 底部盒子容器
  .footer_container{
    height: 360px;
    background: var(--sw-footer-bg-color);
    background-size: 400% 400%;
    animation: bgAnimation 10s ease infinite;
    user-select: none;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    .footer_content{
      box-sizing: border-box;
      height: 100%;
      padding: 60px 40px 20px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: var(--sw-footer-color);
      .author{
        letter-spacing: 2px;
        font-style: oblique;
      }
      .frame{
        letter-spacing: 2px;
        font-style: oblique;
      }
      // 卡片列表
      .cardList{
        display: flex;
        justify-content: center;
        // 单个卡片
        .cardItem{
          display: flex;
          &:hover{
            cursor: url(../../assets/link.cur), pointer;
          }
          .tagbox{
            box-sizing: border-box;
            padding: 4px 7px;
            height: 30px;
          }
          .tag{
            background-color: var(--sw-footer-tag-bg-color);
            border-radius: 5px 0 0 5px;
            display: flex;
            align-items: center;
            // 图标
            .iconfont{
              font-size: 16px;
              margin-right: 5px;
            }
            // 文字
            span{
              font-size: 16px;
            }
          }
          .tagText{
            display: flex;
            align-items: center;
            border-radius: 0 5px 5px 0;
            font-size: 16px;
          }
          .tagAuthor{
            background-color: #9E9E9E;
            margin-right: 20px;
          }
          .tagFrame{
            background-color: #3EA019;
            margin-right: 20px;
          }
          .tagSource{
            background-color: #C82ACD;
          }
        }
      }
      // 访问客户端
      .visitTpye{
        padding: 10px 0;
        font-size: 26px;
        letter-spacing: 1px;
      }
    }
  }

  //屏幕不超过768px
  @media (max-width: 992px) {
    .footer_container{
      height: 160px;
    }
    .tagbox{
      height: 18px !important;
    }
  }

</style>

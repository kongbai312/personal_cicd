<template>
    <div class="personal_bigImg_container">
        <Typed :options="options" class="typedClass">
            <h1 class="typing"></h1>
        </Typed>
        <i-ep-ArrowDownBold class="personal_downArr" @click="scrollClick"></i-ep-ArrowDownBold>
    </div>
</template>

<script setup lang='ts'>
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

  //配置打字机配置
  const options: typeof TypedOptions = {
      strings: ["您好！", "欢迎来到 Swhite 的小窝", "Hello","Welcome to Swhite's Nest"],
      // 是否循环
      loop: true,
      // 打字速度
      typeSpeed: 70,
      // 回退速度
      backSpeed: 20,
  };

  //点击箭头
  const scrollClick = () => {
    //滚动到下面
    window.scrollRef.setScrollTop(window.innerHeight) 
    //显示回到顶部
    window.scrollRef.scrollTop = window.innerHeight
  }
</script>

<style lang="scss" scoped>
//动画
@keyframes arr{
  //开始
  0% {
    transform: translate(0,0);
  }
  30%{
    transform: translate(0,5px);
  }
  60%{
    transform: translate(0,-6px);
  }
  100%{
    transform: translate(0,0);
  }
}
.personal_bigImg_container{
    background: url(../../../assets/images/personalBigImg.jpg) no-repeat;
    width: 100vw;
    height: calc(100vh - 80px);
    // height: 100vh;
    overflow: hidden;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    //打字机
    .typedClass{
        display: flex;
        align-items: center;
        font-size: 40px;
        .typing{
            margin: 0.6em 0;
        }
        :deep(.typed-cursor){
            font-size: 70px;
            margin: 0.6em 0;
        }
    }
    //箭头
    .personal_downArr{
        position: absolute;
        font-size: 36px;
        margin-bottom: 26px;
        bottom: 0;
        cursor: pointer;
        animation: arr 2s ease 1s normal infinite;
    }
}

@media ( max-width:992px ){
  .personal_bigImg_container{
    height: calc(100vh - 50px);
    // height: 100vh;
    background-position: center;
   
    // 箭头
    .personal_downArr{
      font-size: 36px;
      margin-bottom: 12px;
    }
  }
}
@media ( max-width:772px ) {
  .personal_bigImg_container{
    //打字机
    .typedClass{
      font-size: 12px;
      :deep(.typed-cursor){
          font-size: 30px;
      }
    }
  }
}
</style>
<template>
  <div class="personal_container">
      <!-- 大图 -->
      <BigImg></BigImg>
      <!-- 主体 -->
      <div class="personal_main_container">
        <!-- 左半部分 -->
        <MainLeft></MainLeft>
        <!-- 中间部分 -->
        <MainCenter></MainCenter>
        <!-- 右半部分 -->
        <MainRight></MainRight>
      </div>
  </div>
  
</template>

<script setup lang='ts'>
import BigImg from './components/bigImg.vue';
import MainLeft from './components/mainLeft.vue';
import MainCenter from './components/mainCenter.vue';
import MainRight from './components/mainRight.vue';
</script>

<style lang="scss" scoped>

  //个人主页容器
  .personal_container{
     //主体 
    .personal_main_container{
      box-sizing: border-box;
      padding: 60px 70px;
      display: flex;
      justify-content: space-between;
    }
  }
  @media ( max-width:992px ) {
    .personal_container{
      .personal_main_container{
        justify-content: center;
      }
    }
  }
</style>

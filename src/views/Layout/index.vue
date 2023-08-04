<template>
  <div class="layout_container">
    <!-- 导航 -->
    <pr_narbar></pr_narbar>
    <!-- 路由挂载 -->
    <router-view></router-view>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 回到顶部 -->
    <PrBackTop></PrBackTop>
  </div>
</template>

<script setup lang='ts'>
import '@/utils/bgSpecialEffects.js';
import PrBackTop from '@/components/pr_backtop.vue';
import Footer from '@/views/Footer/index.vue';

</script>

<style lang="scss" scoped>
  .layout_container{
    cursor: url(../../assets/default.cur), auto;
  }
  
</style>

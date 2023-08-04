<template>
  <div class="about_container">
    <!-- 顶部 -->
    <pr_headerImg :position="false" :titleArr="['关','于']"></pr_headerImg>
    <!-- 内容 -->
    <div class="about_content">
      <!-- 技术 -->
      <Technology></Technology>
      <!-- 名字 -->
      <AboutName></AboutName>
      <!-- 热日历 -->
      <CalendarHeatmap></CalendarHeatmap>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Technology from './components/technology.vue';
import AboutName from './components/aboutName.vue';
import CalendarHeatmap from './components/calendarHeatmap.vue';
  

</script>

<style lang="scss" scoped>
  .about_container{
    user-select: none;
    // 内容
    .about_content{
      padding: 30px 50px;
    }
  }
</style>

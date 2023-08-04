<template>
  <div class="main_center">
    <!-- 公告 -->
    <Announcement></Announcement>
    <!-- 轮播 -->
    <Swiper></Swiper>
    <!-- 卡片 -->
    <el-card shadow="hover" class="main_center_elCard">
      <!-- 卡片头部 -->
      <template #header>
        <RunningTime></RunningTime>
      </template>
      <!-- 卡片内容 -->
      <template #default>
        <ArticleList></ArticleList>
      </template>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import RunningTime from './runningTime.vue';
import Announcement from './announcement.vue';
import ArticleList from './articleList.vue';
import Swiper from './swiper.vue'
</script>

<style lang="scss" scoped>
.main_center {
  margin: 0 50px;
  user-select: none;
  width: 960px;
  .main_center_elCard {
    border-radius: 20px;
    width: 100%;
    :deep(.el-card__header) {
      background-color: var(--el-bg-color-page);
    }
  }
}
@media ( max-width:992px ) {
  .main_center{
    width: 90vw;
  }
}
</style>

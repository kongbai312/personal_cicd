<template>
  <el-scrollbar ref="scrollRef" height="100vh" @scroll="scrollMethod">
    <!-- 路由挂载点 -->
    <RouterView />
  </el-scrollbar>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { titleChange } from "@/utils/titleChange";
  // 滚动条实例
  const scrollRef = ref()
  
  //滚动事件参数类型
  type ScrollType = {
    scrollLeft : number,
    scrollTop : number
  }

  //滚动条滚筒触发
  const scrollMethod = ( scrollData : ScrollType ) => {
    //添加到实例上
    window.scrollRef.scrollLeft = scrollData.scrollLeft
    window.scrollRef.scrollTop = scrollData.scrollTop
  }

  onMounted(()=>{
    //将滚动条实例添加到window上，方便调用方法
    window.scrollRef = scrollRef.value
  })
  
  //标题更改
  titleChange()
</script>

<style lang="scss" scoped>
  
</style>
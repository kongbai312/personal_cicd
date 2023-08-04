<template>
  <div class="relax_container">
    <!-- 顶部 -->
    <pr_headerImg :titleArr="['休','闲']" :img="url"></pr_headerImg>
    <!-- 内容 -->
    <div class="relax_content">
        <RelaxNarbar></RelaxNarbar>
    </div>
  </div>
</template>

<script setup lang='ts'>
import RelaxNarbar from './components/relaxNarbar.vue';
   let url = 'https://pic.imgdb.cn/item/64c09d9f1ddac507cc807523.jpg'
</script>

<style lang="scss" scoped>
    .relax_container{
        user-select: none;
        // 内容
        .relax_content{
          padding: 30px 50px;
        }
    }
</style>

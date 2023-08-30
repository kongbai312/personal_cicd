<template>
    <transition name="el-zoom-in-top">
      <div class="about_header" :class="{isCenter:position, isRight : right}" v-show="showAboutHeader">
        <span class="about_header_title" v-for="(item,index) in titleArr" :key="index">{{ item }}</span>
      </div>
    </transition>
</template>

<script setup lang='ts'>
import { ref,onMounted } from 'vue';

  //显示头部
  let showAboutHeader = ref(false)
  onMounted(()=>{
    showAboutHeader.value = true
  })

  // 接收数据
  let { img = 'https://pic.imgdb.cn/item/64ae6b561ddac507cc1464c1.jpg',position = true, right = false} = defineProps<{
    titleArr? : string[],
    img?: string,
    position?:boolean,
    right?:boolean
  }>()
  //   计算图片url
  let url = computed(() => {
    return `url(${img})`
  })

</script>

<style lang="scss" scoped>
    // 头部
    .about_header{
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: v-bind(url);
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--sw-after-bg-color);
      }
      .about_header_title{
        font-size: 70px;
      }
      & .about_header_title:first-of-type{
        margin-right: 8px;
      }
      & .about_header_title:last-of-type{
        margin-left: 8px;
      }
    }
    .isCenter{
      background-position: center;
    }
    .isRight{
      background-position: right;
    }

    @media (max-width: 600px) {
      .about_header{
        .about_header_title{
          font-size: 30px;
        }
      }
    }
</style>

<template>
  <el-button :type="type" class="el-button_test">
    <slot>

    </slot>
  </el-button>
</template>

<script setup lang='ts'>
import { computed ,  } from 'vue';
import { layoutWidth } from '@/utils/const';

    const { height = 90 , width = 90 , } = defineProps<{
        height? : number,   //按钮长度
        width? : number,    //按钮宽度
        type? : string,     //按钮种类
    }>()

    //手动计算 1980 为 100vw 当前屏幕宽度为多少vw 的比例
    let proportion = layoutWidth / 100

    //高度
    let heightString = computed(()=>{
        //手动计算 1980 为 100vw 当前屏幕宽度为多少vw
        let temp = height / proportion
        return `${temp}vw`
    })

    //宽度
    let widthString = computed(()=>{
        let temp = width / proportion
        return `${temp}vw`
    })


</script>

<style lang="scss" scoped>
    .el-button_test{
        height: v-bind(heightString);
        width: v-bind(widthString);
    }
</style>

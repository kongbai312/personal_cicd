<template>
    <!-- 分割线 -->
    <hr class="line">
</template>

<script setup lang='ts'>
   
</script>

<style lang="scss" scoped>
    //线
    .line{
        position: relative;
        margin: 40px auto;
        display: block;
        height: 20px;
        width: 100%;
        background: 0px 0px;
        border: none;
        &::before{
            display: block;
            content: "";
            height: 20px;
            width: calc(50% + 60px);
            left: 0px;
            position: absolute;
            background: linear-gradient(to left,var(--sw-line-color),transparent);
            clip-path: polygon(0px 100%, 60px 0px, calc(100% - 30px) 0px, 100% 50%, calc(100% - 15px) 50%, calc(100% - 35px) 5px, 65px 5px, 15px 100%);
            transition: all 0.5s cubic-bezier(0.59, 0.01, 0.48, 1.17) 0s;
        }
        &:hover::before{
            clip-path: polygon(0px 0px, 60px 100%, calc(100% - 30px) 100%, 100% 50%, calc(100% - 15px) 50%, calc(100% - 35px) calc(100% - 5px), 65px calc(100% - 5px), 15px 0px);
            transition: all 0.5s cubic-bezier(0.59, 0.01, 0.48, 1.17) 0s;
        }
        &::after{
            display: block;
            content: "";
            height: 20px;
            width: calc(50% + 60px);
            right: 0px;
            position: absolute;
            background: linear-gradient(to right,var(--sw-line-color),transparent);
            clip-path: polygon(0px 50%, 35px 100%, calc(100% - 60px) 100%, 100% 0px, calc(100% - 15px) 0px, calc(100% - 65px) calc(100% - 5px), 35px calc(100% - 5px), 15px 50%);
            transition: all 0.5s cubic-bezier(0.59, 0.01, 0.48, 1.17) 0s;
        }
        &:hover::after{
            clip-path: polygon(0px 50%, 35px 0px, calc(100% - 60px) 0px, 100% 100%, calc(100% - 15px) 100%, calc(100% - 65px) 5px, 35px 5px, 15px 50%);
            transition: all 0.5s cubic-bezier(0.59, 0.01, 0.48, 1.17) 0s;
        }
    }
</style>

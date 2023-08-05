<template>
  <div class="catalog_container" @click="clickCatalog">
    <span>目</span>
    <span>录</span>
  </div>
</template>

<script setup lang='ts'>
    // 更改目录显示隐藏
    const emit = defineEmits<{
        ( event : 'changeShowCatalog' ) : void
    }>()

    const clickCatalog = () => {
        emit('changeShowCatalog')
    }
</script>

<style lang="scss" scoped>
    .catalog_container{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 20%;
        font-size: 20px;
        color: var(--sw-footer-color);
        border-radius: 0 10px 10px 0;
        padding: 10px;
        background: var(--sw-footer-bg-color);
        background-size: 400% 400%;
        animation: bgAnimation 10s ease infinite;
        user-select: none;
        &:hover{
            cursor: url(../assets/cursor/link.cur),pointer;
        }
    }

    @media (max-width: 600px) {
        .catalog_container{
            padding: 10px 5px;
            border-radius: 0 5px 5px 0;
            font-size: 14px;
        }
    }
</style>

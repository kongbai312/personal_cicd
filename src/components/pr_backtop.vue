<template>
    <!-- <el-alert title="info alert" type="info" show-icon v-if="isShowAlert" /> -->
    <!-- 回到顶部组件 -->
    <transition name="scrollTransition">
        <div class="backTop_container" v-if="isShow">
            <button class="backTop_icon" @click="set" title="设置">
                <i class="iconfont icon-shezhi"></i>
            </button>
            <button class="backTop_icon" @click="goTop" title="回到顶部">
                <i class="iconfont icon-xiangshangjiantou"></i>
            </button>
            <transition name="scrollTransition">
                <template v-if="isSetShow">
                    <button class="backTop_icon" @click="hidden" title="隐藏">
                        <i class="iconfont icon-zhankai"></i>
                    </button>
                </template>
            </transition>
        </div>
    </transition>
</template>

<script setup lang='ts'>
    //控制组件显示隐藏
    let isShow = ref(true)

    //是否点击了设置
    let isSetShow = ref(false)

    //给滚动条添加监听
    let addScroll = () => {
        // 监听滚动条滚动
        window.addEventListener('scroll', () => {
            // 滚动条滚动超过200
            if( window.scrollRef.scrollTop >= 200 ){
                isShow.value = true
            }
            else{
                isShow.value = false
            }
        },true)
    }
    onMounted(() => {
        addScroll()
    })

    //组件点击
    const goTop = () => {
        //回到顶部
        window.scrollRef.scrollTo(0,0)
        //隐藏组件
        window.scrollRef.scrollTop = 0
        isShow.value = false
    }

    //设置功能
    const set = () => {
        // ElMessage.info('设置功能还在开发哦(｡･∀･)ﾉﾞ')
        isSetShow.value = !isSetShow.value
    }

    // 隐藏功能
    const hidden = () => {
        isShow.value = false
    }
</script>

<style lang="scss" scoped>
// 过渡
.scrollTransition-enter-from, 
.scrollTransition-leave-to{
    transform: translate(150px,0);
}
.scrollTransition-enter-active,
.scrollTransition-leave-active{
    transition: all 0.5s ease-out;
}
.scrollTransition-enter-to,
.scrollTransition-leave-from{
    transform: translate(0,0);
}

//动画
@keyframes iconRotate {
    to{
        transform: rotate(0deg);
    }
    from{
        transform: rotate(-360deg);
    }
}
    .backTop_container{
        position: fixed;
        right: 8px;
        bottom: 5%;
        display: flex;
        flex-direction: column;
        z-index: 99;
        .backTop_icon{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
            background-color: var(--sw-back-top);
            margin-top: 3px;
            border: none;
            &:hover{
                background-color: var(--sw-back-top-hover);
                cursor: url(../assets/cursor/link.cur), pointer;
            }
            i{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                width: 40px;
                font-size: 40px;
                color: var(--sw-back-top-color);
            }
            .iconfont::before{
                width: 40px;
                height: 40px;
                line-height: 40px;
            }
            .icon-shezhi{
                animation: iconRotate 2s linear 0s normal infinite;
            }
        }
        & .backTop_icon:first-of-type{
            margin-top: 0;
        }
    }

    //屏幕不超过992px
  @media (max-width: 992px) {
    .backTop_container{
        .backTop_icon{
            height: 30px;
            width: 30px;
            margin-top: 3px;
            i{
                height: 30px;
                width: 30px;
                font-size: 30px;
            }
            .iconfont::before{
                height: 30px;
                width: 30px;
                line-height: 30px;
            }
        }
    }
  }
</style>

<template>
    <transition name="down">
      <div class="pr-message" :style="style[type]" v-if="isShow">
        <!-- 上面绑定的是样式 -->
        <!-- 不同提示图标会变 -->
        <i class="iconfont" :class="style[type].icon"></i>
        <span class="text">{{message}}</span>
      </div>
    </transition>
</template>
<script setup lang="ts">

    //可以使用的props
    let { type = 'warn' , message = ''} = defineProps<{
        type : string,
        message: string
    }>()
  
    const style : Record<string, Record<string,string>> = {
      warn: {
        icon: 'icon-info',
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
      },
      error: {
        icon: 'icon-error',
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)'
      },
      success: {
        icon: 'icon-success',
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)'
      }
    }

    //定时器
    let timer : NodeJS.Timeout

    //控制显示隐藏
    const isShow = ref(false)
    //组件渲染完毕后显示
    onMounted(()=>{
      isShow.value = true
      //清空定时器
      clearTimeout(timer)
      //2秒后隐藏弹窗
      timer = setTimeout(()=>{
        isShow.value = false
      },2000)
    })
</script>
<style scoped lang="scss">
  //动画效果
  .down {
    &-enter {
      &-from {
        transform: translate3d(0,-75px,0);
        opacity: 0;
      }
      &-active {
        transition: all 0.5s;
  
      }
      &-to {
        transform: none;
        opacity: 1;
      }
    }
    &-leave {
      &-from {
        transform: none;
        opacity: 1;
      }
      &-active {
        transition: all 0.5s;
      }
      &-to {
        transform: translate3d(0,-75px,0);
        opacity: 0;
      }
    }
  }
  .pr-message {
    display: flex;
    align-items: center;
    position: fixed;
    min-width: 300px;
    height: 50px;
    z-index: 9999;
    left: 50%;
    margin-left: -150px;
    top: 25px;
    padding: 0 25px;
    border: 1px solid #e4e4e4;
    background: #f5f5f5;
    color: #999;
    border-radius: 25px;
    .text {
      margin-left: 4px;
    }
  }

  @media (max-width: 600px) {
    .pr-message{
      min-width: 200px;
      height: 30px;
      margin-left: -100px;
      .text {
        margin-left: 4px;
      }
    }
  }
  </style>
  
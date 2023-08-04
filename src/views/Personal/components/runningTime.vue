<template>
  <div class="center_elCard_header">
        <i class="iconfont icon-aixin"></i>
        <div class="header_title">
          <span>Swhite's Nest 已经运行了</span>
          <span
            class="title_time">{{ formatDay.dayTime }}天{{ formatDay.hourTime }}时{{ formatDay.minuteTime }}分{{ formatDay.secondTime }}秒
          </span>
        <!-- <span>欢迎您的光临~</span> -->
        </div>
    </div>
</template>

<script setup lang='ts'>
    //开始日期的时间戳  开始时间2023年6月21日11：20分
    let startDay = new Date('6/21/2023 11:20:00').getTime()
    //当前时间
    let nowDay = ref(new Date().getTime())
    //测试
    // let nowDay = ref(new Date('6/25/2023 12:29:57').getTime())

    let formatDay = computed(() => {
      // msTime % ( 1000 * 60 * 60 * 24 ) 结果为剩余小时的毫秒
      //毫秒
      let msTime = nowDay.value - startDay
      //天
      let dayTime = Math.floor(msTime / (1000 * 60 * 60 * 24))
      //小时
      let hourTimeBefore = Math.floor((msTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      //分
      let minuteTimeBefore = Math.floor((msTime % (1000 * 60 * 60)) / (1000 * 60))
      //秒
      let secondTimeBefore = Math.floor((msTime % (1000 * 60)) / 1000)
      //时间格式的处理
      let hourTime = hourTimeBefore <= 9 ? `0${hourTimeBefore}` : hourTimeBefore
      let minuteTime = minuteTimeBefore <= 9 ? `0${minuteTimeBefore}` : minuteTimeBefore
      let secondTime = secondTimeBefore <= 9 ? `0${secondTimeBefore}` : secondTimeBefore
      return {
        dayTime,
        hourTime,
        minuteTime,
        secondTime,
        msTime,
      }
    })

    //存储定时器
    let timer: any
    //开启计时
    const openTime = () => {
    //每秒增加1000毫秒
    timer = setInterval(() => {
        nowDay.value += 1000
      }, 1000)
    }

    onMounted(() => {
      //初始化计时函数
      openTime()
    })

    //销毁前，清空定时器
    onBeforeUnmount(() => {
      clearInterval(timer)
      timer = null
    })
</script>

<style lang="scss" scoped>
//爱心动画
@keyframes loveAnm {
  //开始
  0% {
    transform: translate(0, 0) rotateY(0);
  }

  30% {
    transform: translate(0, -4px) rotateY(0);
  }

  50% {
    transform: translate(0, -10px) rotateY(720deg);
  }

  60% {
    transform: translate(0, -10px) rotateY(720deg);
  }

  70% {
    transform: translate(0, 5px) rotateY(720deg);
  }

  90% {
    transform: translate(0, -2px) rotateY(720deg);
  }

  100% {
    transform: translate(0, 0) rotateY(720deg);
  }
}
    // 卡片头部
    .center_elCard_header {
      display: flex;
      align-items: center;
      height: 40px;

      &:hover .icon-aixin {
        color: var(--el-color-danger);
        animation: loveAnm 2s ease-out 0.1s normal 1;
      }

      .icon-aixin {
        font-size: 30px;
      }

      .header_title {
        margin-left: 10px;
        font-size: 22px;

        .title_time {
          margin: 0 10px;
          letter-spacing: 3px;
        }
      }
    }

  @media ( max-width:772px) {
    .center_elCard_header{
      height: 30px;
      .iconfont{
        font-size: 16px;
      }
      .header_title{
        font-size: 14px;
      }
    }
  }
</style>

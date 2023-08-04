<template>
  <div class="classify_container">
    <div id="echart_main" :class="{ opened : !isOpen }"></div>
  </div>
</template>

<script setup lang='ts'>
import { useUsuallyStore } from '@/stores';
import { useWindowSize } from '@vueuse/core';
import { getArticleListApi } from '@/api/mock_api';
import '@/mock/index';
import type { ActicleType } from '@/types/personal'
import { useRouter } from 'vue-router';
  //引入store
  const store = useUsuallyStore()
  //是否黑夜模式
  let isDark = computed(() => {
    return store.themeStatus
  })

  //引入echarts
  const echarts = inject('$echarts')

  //引入router
  const router = useRouter()
  // 类型
  type TrafficWayType = {
    name : string,
    value : number
  }[]
  // 饼图数据
  let trafficWay = ref<TrafficWayType>([])

  // 统计所有文章总和
  let sum = ref()

  let data : any = [];

  let legendData : any = [];

  let color = [
    '#00ffff',
    '#409B5C',
    '#006ced',
    '#ffe000',
    '#ffa800',
    '#ff5b00',
    '#ff3000',
  ];

  //获取所有文章列表
  const getArticles = async () => {
    let result = await getArticleListApi()
    // 处理数据
    disposeTrafficWay(result.data)
  }

  // 实例
  let myChart : any
  onMounted(async () => {
    await getArticles()
    if(!myChart){
      //实例
      myChart = (echarts as any).init(document.getElementById('echart_main'))
    }
    //使用
    myChart.setOption(option.value)
    // 取消之前的点击事件
    // myChart.off('click')    

    //添加点击事件
    myChart.on('click',(target :any)=>{
      //获取标签
      let tag = target.name.split(' ')[0]
      //跳转到标签列表页
      router.push(`/labelList/${tag}`)
    })
  })

  //处理饼图数据
  const disposeTrafficWay = ( arr : ActicleType[] ) => {
    // 文章遍历
    arr.forEach( article => {
      // tags遍历
      article.tags.forEach( tag => {
        let index = trafficWay.value.findIndex( item => item.name === tag)
        //如果存在
        if(index !== -1){
          trafficWay.value[index].value++
        }
        // 如果不存在
        else{
          let obj = {
            name: tag,
            value: 1
          }
          trafficWay.value.push(obj)
        }
      })
    })

    // 统计文章总和
    sum.value = trafficWay.value.reduce((current, pre) => {
      return current + pre.value;
    }, 0);

    // 循环处理数据
    for (let i = 0; i < trafficWay.value.length; i++) {
      let name = trafficWay.value[i].name + '  ' + trafficWay.value[i].value;
      legendData.push(name);
      data.push(
        {
          value: trafficWay.value[i].value,
          name: name,
          itemStyle: {
            borderWidth: 0,
            borderRadius: 10,
            shadowBlur: 10,
            borderColor: color[i],
            shadowColor: color[i],
          }
        },
        {
          value: sum.value / 100, // 控制每个环形之间的间隙
          name: '',
          itemStyle: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
          },
        }
      );
    }
  }
  


  //配置
  let seriesOption = [
    {
      name: '',
      type: 'pie',
      clockwise: false,
      radius: ['50%', '70%'],
      center: ['30%', '50%'],
      emphasis: {
        scale: false,
      },
      label: {
        show: false,
      },
      data: data
    },
  ]

  // 配置
  let option = ref({
    backgroundColor: isDark.value ? '#021425' : '#fff',
    title: {
      text: '总文章数',
      subtext: sum,
      textStyle: {
        color: '#19E1E3',
        fontSize: 18,
        padding: [0, 0, 25, 0]
      },
      subtextStyle: {
        fontSize: 28,
        fontWeight: 'bolder',
        color: '#19E1E3'
      },
      x: '27%',
      y: '45%'
    },
    color: color,
    tooltip: {
      show: true,
    },
    legend: {
      icon: 'rect',
      itemWidth: 16,
      itemHeight: 8,
      itemStyle: {
        borderWidth: 3
      },
      orient: 'vertical',
      // orient: 'horizontal',
      data: legendData,
      right: '10%',
      // top: '5%',
      top:'center',
      align: 'left',
      textStyle: {
        color: isDark.value ? '#fff' : '#111',
        fontSize: 16,
        padding: [0, 0, 0, 10]
      },
      itemGap: 20, // 图例之间的间隔
    },
    toolbox: {
      show: false,
    },
    series: seriesOption,
  })
  
  
  watch( () => isDark.value , () => {
    // 修改背景颜色文字颜色
    option.value.backgroundColor = isDark.value ? '#021425' : '#fff'
    option.value.legend.textStyle.color = isDark.value ? '#fff' : '#111'
    //重新绘制实例
    myChart.setOption(option.value)
  })
  
  //监听是否点击了展开
  let isOpen = computed(() => {
    return store.isOpen
  })

  // 监听是否折叠
  watch(() => isOpen.value,async () => {
    await myChart.dispose()
    myChart = (echarts as any).init(document.getElementById('echart_main'))
    myChart.setOption(option.value)
    // 如果小于450点击折叠
    if(width.value <= 450){
      option.value.title.x = isOpen.value ? '35%' : '40%'
      await myChart.dispose()
      myChart = (echarts as any).init(document.getElementById('echart_main'))
      myChart.setOption(option.value)
    }
  })

  // 窗口长宽
  const { width } = useWindowSize()

  //监听窗口宽度
  watch( () => width.value,async () => {
    if(width.value > 375 && width.value <= 992){
      // 判断
      if(width.value <= 800){
        option.value.legend.orient = 'horizontal'
        option.value.legend.top = '5%'
        option.value.legend.right = 'auto'
        option.value.title.x = '44%'
        seriesOption[0].center = ['50%','50%']
        if(width.value <= 450){
          option.value.title.x = isOpen.value ? '35%' : '40%'
        }
      }
      else{
        option.value.legend.orient = 'vertical'
        option.value.legend.top = 'center'
        option.value.legend.right = '5%'
        option.value.title.x = '34%'
        seriesOption[0].center = ['40%','50%']
      }
      if(myChart){
        await myChart.dispose()
      }
      nextTick(()=>{
        myChart = (echarts as any).init(document.getElementById('echart_main'))
        myChart.setOption(option.value)
      })
    }
  },{
    immediate:true
  })
</script>

<style lang="scss" scoped>
  .classify_container{
    position: relative;
    #echart_main{
      height: calc( 100vh - 80px );
      width: calc( 100vw - 200px );
      background-color: var(--sw-classify-bg-color);
    }
    .opened{
      position: absolute;
      transform: translateX(-200px);
      width: 100vw !important;
      left: 200px;
    }
  }

  @media (max-width: 992px){
    .classify_container{
      #echart_main{
        height: calc( 100vh - 50px );
      }
    }
  }
  @media (max-width: 600px){
    .classify_container{
      #echart_main{
        width: calc( 100vw - 96px );
      }
    }
  }
</style>

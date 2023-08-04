<template>
  <div class="label_container">
    <el-card shadow="hover" class="label_elCard">
        <el-tag
          v-for="item in labelArr"
          :key="item.label"
          :type="item.type"
          size="large"
          :effect="isDark ? 'dark' :'plain'"
          class="tagItem"
          @click="goto(item.label)"
        >
          {{ item.label }}
        </el-tag>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { getArticleListApi } from '@/api/mock_api';
import '@/mock/index';
import { useUsuallyStore } from '@/stores';
import type { ActicleType } from '@/types/personal';
import { useRouter } from 'vue-router';
  //label的样式数组
  let typeArr = ['','success','info','danger','warning']

  // label数组
  let labelArr = ref<{
    type:string,
    label:string
  }[]>([])

  //发送请求获取文章列表
  const getArticles = async () => {
    let result = await getArticleListApi()
    // 处理数组
    disposeLabelArr(result.data)
  }

  //处理label数组数据
  const disposeLabelArr = ( articles : ActicleType[]) => {
    // 临时数组
    let arr : string[] = [] 
    // 处理数据
    articles.forEach( ( item ) => {
      // 每个tag
      item.tags.forEach( tag => {
        //labelArr 中没有tag
        if( arr.findIndex( label => label === tag) === -1){
          arr.push(tag)
        }
      })
    })

    //当前的数字
    let nowIndex : number
    //上一个数字
    let lastIndex :number
    // 处理后的数组进一步处理
    arr.forEach( item => {
      // 生成0-4的数字
      nowIndex = Math.round(Math.random() * (typeArr.length - 1))
      // 如果随机数与上一次数组字相同
      if( nowIndex === lastIndex ){
        // 如果相等，执行while循环
        while( nowIndex === lastIndex ){
          nowIndex = Math.round(Math.random() * (typeArr.length - 1))
        }
      }
      // 创建一个对象
      let obj = {
        type : typeArr[nowIndex],
        label : item
      }
      // 放入label数组
      labelArr.value.push(obj)
      // 覆盖上一次的index
      lastIndex = nowIndex
    })
  }

  onMounted(() => {
    getArticles()
  })

  // 引入store
  const store = useUsuallyStore()
  //是否是黑暗模式
  let isDark = computed(() => {
    return store.themeStatus
  })

  const router = useRouter()
  //去往标签列表
  const goto = ( val : string) =>{
    router.push(`/labelList/${val}`)
  }
</script>

<style lang="scss" scoped>
  .label_container{
    padding: 30px 40px;
    .label_elCard{
      border-radius: 20px;
      padding: 50px 20px;
      ::v-deep(){
        .el-card__body{
          box-sizing: border-box;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      }
      // tag
      .tagItem{
        box-sizing: border-box;
        padding: 40px 50px;
        font-size: 30px;
        user-select: none;
        border-radius: 20px;
        margin-bottom: 20px;
        position: relative;
        cursor: url('../../../assets/link.cur'),pointer;
        &::after{
          content: "";
          position: absolute;
          border-radius: 20px;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-color: var(--sw-after-bg-color);
        }
      }
    }
  }

  @media ( max-width: 600px) {
    .label_container{
      .label_elCard{
        .tagItem{
          font-size: 20px;
          padding: 30px 50px;
          margin-bottom: 10px;
          margin-right: 10px;
        }
      }
    }
  }
</style>

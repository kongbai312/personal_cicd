<template>
  <div class="archive_container">
    <div class="archive_title">文章总览</div>
    <el-timeline>
      <el-timeline-item 
        center 
        :hide-timestamp="true"
        :timestamp="item.createTime" 
        placement="top" 
        :hollow="true"
        size="large"
        v-for="item in articlesList" 
        :key="item.id"
        class="timeLineItem"
      >
        <div class="timeLine_box">
          <div class="timeLine_imgbox">
            <el-image 
              fit="cover" 
              :src="item.image" 
              alt="" 
              class="timeLine_img" 
              lazy 
              :class="{ 'timeLine_img_dark' : isDark}"
            />
          </div>
          <div class="timeLine_content">
            <div class="timeLine_createTimeBox">
              <i class="iconfont icon-rili"></i>
              <span class="timeLine_createTime">{{ item.createTime }}</span>
            </div>
            <a :title="item.title" :class="{isOpen : !isOpen}" class="timeLine_title" @click="gotoArticle(item.id)">{{ item.title }}</a>
          </div>
        </div>
      </el-timeline-item>
    </el-timeline>

    <!-- 分页 -->
    <template v-if="total">
      <pr_pagination 
        :total="total" 
        v-model:current-page="pageParams.page" 
        :totalPage="totalPage"
      ></pr_pagination>
    </template>
  </div>
</template>

<script setup lang='ts'>
import '@/mock/index';
import { getArticleListByPageApi, getMdApi } from '@/api/mock_api';
import { useRandomBg } from '@/hooks';
import { useUsuallyStore } from '@/stores'
import { useRouter } from 'vue-router';
  //文章列表
  let articlesList = ref()

  //总页数
  let totalPage = ref()

  //总条数
  let total = ref()

  let pageParams = ref({
    page: 1,   //当前页码
    pageSize: 5, //每页个数
  })

  //根据页码获取文章列表
  const getArticleListByPage = async() => {
    let result = await getArticleListByPageApi( { 
        page:pageParams.value.page,
        pageSize:pageParams.value.pageSize
      } 
    )
    //处理数据，若有图片路径为空的，随机生成一个
    articlesList.value = result.data.pageData.map( ( item ) => {
      return {...item,image : item.image ? item.image : useRandomBg()}
    })
    // 总页数
    totalPage.value = result.data.totalPage
    //总条数
    total.value = result.data.total
  }
  onMounted(() => {
    getArticleListByPage()
  })

  //监听当前页数是否变化
  watch( () => pageParams.value.page , () => {
    getArticleListByPage()
  } )

  //引入store
  const store = useUsuallyStore()
  // 是否是黑暗模式
  let isDark = computed(() => {
    return store.themeStatus
  })
  // 是否展开菜单
  let isOpen = computed(() => {
    return store.isOpen
  })

  //引入router
  const router = useRouter()
  //去文章详情页面
  const gotoArticle = async ( id : number ) => {
    router.push(`/article/${id}`)
  }
</script>

<style lang="scss" scoped>
  .archive_container{
    // background-color: var(--article-content-bg-color);
    padding: 30px 40px;
    .el-timeline{
      padding-left: 40px;
    }
    // 文章总览部分
    .archive_title{
      font-size: 46px;
      font-weight: 700;
      margin-left: 40px;
    }
    .timeLineItem{
      &:hover{
        ::v-deep(){
          .el-timeline-item__node--large{
            border-color: var(--sw-article-circle-hover-color);
          }
        }
      }
      ::v-deep(){
        .el-timeline-item__node--large{
          width: 30px;
          height: 30px;
          left: -10px;
          border-color: var(--sw-article-circle-border-color);
          border-width: initial;
        }
        .el-timeline-item__node.is-hollow{
          background-color: var(--sw-article-circle-bg-color);
        }
      }
      .timeLine_box{
        box-sizing: border-box;
        padding: 30px 40px;
        display: flex;
        height: 260px;
        // 图片
        .timeLine_imgbox{
          width: 200px;
          height: 200px;
          border-radius: 30px;
          overflow: hidden;
          .timeLine_img{
            width: 100%;
            height: 100%;
            border-radius: 30px;
            transition: filter 375ms ease-in .2s,transform .6s;
            &:hover{
              transform: scale(1.1);
            }
          }
          .timeLine_img_dark{
            filter: brightness(.8);
          }
        }
        
        .timeLine_content{
          box-sizing: border-box;
          padding: 0 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          
          .timeLine_createTimeBox{
            padding: 30px 0;
            display: flex;
            align-items: center;
            .iconfont{
              font-size: 36px;
              margin-right: 20px;
            }
            .timeLine_createTime{
              font-size: 36px;
            }
          }
          .timeLine_title{
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            font-size: 34px;
            transition: all .2s ease-in-out 0s;
            cursor: url(../../../assets/cursor/link.cur),pointer;
            &:hover{
              color: var(--sw-article-title-hover-color);
              transform: translate(10px);
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .archive_container{
      .archive_title{
        font-size: 16px;
      }
      .timeLineItem{
        .timeLine_box{
          padding: 10px 20px;
          height: 120px;
          .timeLine_imgbox{
            width: 100px;
            height: 100px;
          }
          .timeLine_content{
            padding: 0 14px;
            .timeLine_createTimeBox{
              padding: 16px 0;
              .iconfont{
                font-size: 14px;
              }
              .timeLine_createTime{
                font-size: 14px;
              }
            }
            .timeLine_title{
              font-size: 14px;
              width: 90px;
            }
            .isOpen{
              width: 180px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    .archive_container{
      .timeLineItem{
        .timeLine_box{
          .timeLine_content{
            .timeLine_createTimeBox{
              .timeLine_createTime{
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>

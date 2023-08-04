<template>
  <div class="articles_container" :class="{ opened : !isOpen}">
    <!-- 菜单 -->
    <pr_littleMenu :menuData="artileNarbarList"></pr_littleMenu>

    <!-- routerView -->
    <el-scrollbar class="scrollbarClass" v-if="activeMenu !== 'articles'" :class="{ opened : !isOpen }">
      <div class="routerViewClass" :class="{ opened : !isOpen }">
        <router-view></router-view>
      </div>
    </el-scrollbar>

    <!--  articles -->
    <div class="articles_box" v-if="activeMenu === 'articles'" :class="{ opened : !isOpen }">
      <span class="articles_title">欢迎来到Swhite的小窝</span>
      <el-input
        v-model="searchValue"
        placeholder="在这里搜索你想看的文章吧！"
        :clearable="true"
        class="articles_search"
        :autofocus="true"
        @keyup.enter="keyupEnter"
      >
        <template #append>
          <span>搜索</span>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup lang='ts'>
import artileNarbarList from '@/assets/json/articleNarbarList.json';
import { useRoute } from 'vue-router';
import { useUsuallyStore } from '@/stores/modules/usually';
  const route = useRoute()
  //当前激活的导航
  const activeMenu = computed(() => {
      return route.path.substring(1)
  })

  //搜索内容
  let searchValue = ref()

  //引入store
  const store = useUsuallyStore()
  //监听是否点击了展开
  let isOpen = computed(() => {
    return store.isOpen
  })

  //按下回车
  const keyupEnter = () => {
    ElMessage.info('搜索功能还未配置哦(｡･∀･)ﾉﾞ')
  }
</script>

<style lang="scss" scoped>
  .articles_container{
    display: flex;
    // justify-content: flex-end;
    position: relative;
    .articles_box{
      height: calc( 100vh - 80px );
      width: calc( 100vw - 200px );
      transition: all 0.5s;
      box-sizing: border-box;
      padding: 30px 40px;
      background-color: var(--article-content-bg-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      .articles_title{
        margin: 70px 0;
        font-size: 50px;
      }
      .articles_search{
        height: 100px;
        width: 70%;
        ::v-deep(){
          .el-input__wrapper{
            border-radius: 50px 0 0 50px;
            .el-input__inner{
              padding-left: 20px;
              font-size: 36px;
              height: 100%;
            }
          }
          .el-input-group__append{
            border-radius: 0 50px 50px 0;
            padding: 0 50px;
            font-size: 34px;
          }
        }
      }
    }
    .opened{
      position: absolute;
      transform: translateX(-200px);
      width: 100vw !important;
      left: 200px;
    }

    // 滚动条
    .scrollbarClass{
      width: calc( 100vw - 200px );
      background-color: var(--article-content-bg-color);
      transition: all 0.5s;
      ::v-deep(){
        .el-scrollbar__wrap{
          height: calc( 100vh - 80px );
        }
      }
    }
  }
  
  @media (max-width: 992px){
    .articles_container{
      .articles_box{
        height: calc( 100vh - 50px );
      }
      // 滚动条
      .scrollbarClass{
        ::v-deep(){
          .el-scrollbar__wrap{
            height: calc( 100vh - 50px );
          }
        }
      }
    }
  }

  @media (max-width: 772px) {
    .articles_container{
      .articles_box{
        .articles_title{
          font-size: 22px;
        }
        .articles_search{
          height: 40px;
          width: 80%;
          ::v-deep(){
            .el-input__wrapper{
              border-radius: 30px 0 0 30px;
            }
            .el-input-group__append{
              border-radius: 0 30px 30px 0;
              padding: 0 20px;
            }
          }
        }
      }
    }
  }

  @media ( max-width:600px ){
    .articles_container{
      .articles_box{
        width: calc( 100vw - 96px );
        .articles_title{
          margin: 30px 0;
        }
      }
      // 滚动条
      .scrollbarClass{
        width: calc( 100vw - 96px );
      }
      .opened{
        position: absolute;
        transform: translateX(-96px);
        width: 100vw;
        left: 96px;
      }
    }
  }

  @media (max-width: 460px) {
    .articles_container{
      .articles_box{
        .articles_title{
          margin: 40px 0;
          font-size: 18px;
        }
        .articles_search{
          width: 90%;
        }
      }
    }    
  }
</style>

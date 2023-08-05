<template>
    <div class="articleList_container">
      <el-card shadow="hover" class="articleItem_elCard" v-for="item in articleList" :key="item.id">
        <div class="articleItem">
          <div class="article_left">
            <div class="article_left_content">
              <div class="article_left_top">
                <div class="article_left_topItem istop" v-if="item.isTop === 1"><i class="iconfont icon-zhiding"></i>置顶</div>
                <div class="article_left_topItem"><i class="iconfont icon-rili"></i>{{item.createTime}}</div>
                <div class="article_left_topItem" v-for="(tag,index) in item.tags" :key="index"><i class="iconfont icon-biaoqian"></i>{{tag}}</div>
              </div>
              <div class="article_left_title">{{ item.title }}</div>
              <div class="article_left_text">{{ item.brief }}</div>
            </div>
            <span class="article_more" @click="goto(item.id)">更多</span>
          </div>
          <div class="article_right">
            <el-image lazy fit="cover" class="article_right_img" :src="item.image" alt="" />
          </div>
        </div>
      </el-card>
    </div>
</template>

<script setup lang='ts'>
import { getArticleListApi } from '@/api/mock_api';
import '@/mock/index';
import type { ActicleType } from '@/types/personal';
import { useRandomBg } from '@/hooks';
import { useRouter } from 'vue-router';

  //存储文章列表
  let articleList = ref<ActicleType[]>()


  //获取文章列表
  const getArticleList = async () => {
    let result = await getArticleListApi()
    articleList.value = result.data.map( (item : ActicleType) => {
      //返回处理后的文章列表
      return {...item,image : item.image ? item.image : useRandomBg() }
    })
    //只取数组的前x个
    let x = 4
    if(articleList.value.length > x){
      articleList.value.splice(x,articleList.value.length - x)
    }
  }

  onMounted(() => {
    getArticleList()
  })

  //引入router
  const router = useRouter()

  //访问文章
  const goto = ( id : number) => {
    router.push(`/article/${id}`)
  }
</script>

<style lang="scss" scoped>
  .articleList_container{
    .articleItem_elCard{
      :deep(.el-card__body){
        padding: 0;
      }
      border-radius: 30px;
      margin-top: 20px;
      // 奇数
      &:nth-child(odd){
        .articleItem{
          // 左侧
          .article_left{
            left: 0;
            .article_left_content{
              .article_left_top{
                justify-content: left;
              }
            }
            // 更多按钮
            .article_more{
              left: 0;
              border-radius: 0 30px;
            }
          }
          // 右侧
          .article_right{
            right: 0;
            clip-path: polygon(0 0,100% 0,100% 100%,8% 100%);
          }
        }
      }
      //偶数
      &:nth-child(even){
        .articleItem{
          // 左侧
          .article_left{
            right: 0;
            .article_left_content{
              .article_left_top{
                justify-content: right;
              }
            }
            // 更多按钮
            .article_more{
              border-radius: 30px 0;
              right: 0;
            }
          }
          // 右侧
          .article_right{
            left: 0;
            clip-path: polygon(0 0,92% 0,100% 100%,0 100%)
          }
        }
      }
      .articleItem{
        height: 400px;
        display: flex;
        position: relative;
        // 左侧
        .article_left{
          width: 50%;
          position: absolute;
          height: 100%;
          .article_left_content{
            display: flex;
            padding: 0 20px;
            padding-top: 10px;
            flex-direction: column;
            // 顶部
            .article_left_top{
              box-sizing: border-box;
              width: 100%;
              display: flex;
              margin-top: 10px;
              font-size: 16px;
              .article_left_topItem{
                display: flex;
                align-items: center;
                margin-right: 20px;
                .iconfont{
                  margin-right: 10px;
                }
              }
              .istop{
                color: var(--sw-center-article-top);
              }
            }
            
            // 标题
            .article_left_title{
              color: var(--sw-center-article-title);
              font-size: 36px;
              font-weight: 700;
              margin-top: 30px;
            }
            // 文字
            .article_left_text{
              margin-top: 20px;
              color: var(--sw-center-article-text);
            }
          }
          // 更多按钮
          .article_more{
            position: absolute;
            bottom: 0;
            padding: 20px 30px;
            background-image: var(--sw-center-article-more-bg);
            color: var(--sw-center-article-more);
            transition: all .2s ease-in-out 0s;
          }
          .article_more:hover{
            transform: scale(1.05);
            cursor: url(../../../assets/cursor/link.cur), pointer;
          }
        }
        // 右侧
        .article_right{
          width: 50%;
          height: 100%;
          position: absolute;
          .article_right_img{
            width: 100%;
            height: 100%;
            transition: all .2s ease-in-out 0s;
          }
        }
        &:hover .article_right .article_right_img{
          transform: scale(1.05) rotate(1deg);
        }
      }
    }
  }

  @media ( max-width:772px ){
    .articleList_container{
      .articleItem_elCard{
        border-radius: 15px;
        // 奇数
        &:nth-child(odd){
          .articleItem{
            // 左侧
            .article_left{
              // 更多按钮
              .article_more{
                border-radius: 0 15px;
              }
            }
          }
        }
        //偶数
        &:nth-child(even){
          .articleItem{
            // 左侧
            .article_left{
              // 更多按钮
              .article_more{
                border-radius: 15px 0;
              }
            }
          }
        }
        .articleItem{
          height: 220px;
          .article_left{
            .article_left_content{
              .article_left_title{
                font-size: 18px;
              }
            }
            .article_more{
              padding: 10px 15px;
            }
          }
        }
      }
    }
  }

  @media ( max-width:600px ) {
    .articleList_container{
      .articleItem_elCard{
        margin-top: 10px;
        // 奇数
        &:nth-child(odd){
          .articleItem{
            // 左侧
            .article_left{
              .article_left_content{
                .article_left_top{
                  justify-content: flex-end;
                  font-size: 12px;
                  .article_left_topItem{
                    margin-right: 10px;
                  }
                }
              }
            }
            // 右侧
            .article_right{
              clip-path: polygon(0 0,100% 0,100% 92%,0 100%);
            }
          }
        }
        //偶数
        &:nth-child(even){
          .articleItem{
            // 左侧
            .article_left{
              .article_left_content{
                .article_left_top{
                  justify-content: flex-start;
                  font-size: 12px;
                  .article_left_topItem{
                    margin-right: 10px;
                  }
                }
              }
            }
            // 右侧
            .article_right{
              clip-path: polygon(0 0,100% 0,100% 100%,0 92%);
            }
          }
        }
        .articleItem{
          flex-direction: column;
          height: 400px;
          position: relative;
          // 左侧
          .article_left{
            width: 100%;
            height: 45%;
            position: absolute;
            bottom: 0;
          }
          // 右侧
          .article_right{
            width: 100%;
            height: 55%;
            position: absolute;
            top: 0;
          }
        }
      }
    }
  }
</style>

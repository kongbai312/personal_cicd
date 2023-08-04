<template>
    <div class="article_container" v-if="textMd">
        <!-- 删除了height="calc( 100vh - 50px)" -->
        <el-scrollbar  
            class="articleCatalogScrollBar" 
            :class="{ articleCatalogScrollBar_show : showCatalog}"
        >
            <transition name="catalogTransition">
                <MdCatalog 
                    :editorId="id" 
                    :theme="store.themeStatus?'dark':'light'" 
                    @click="catalogClick" 
                    class="articleCatalog"
                    v-show="showCatalog"
                ></MdCatalog>
            </transition>
            <!-- 目录导航按钮 -->
            <pr_catalog @changeShowCatalog="changeShowCatalog"></pr_catalog>
        </el-scrollbar>
        <!-- 删除了height="calc( 100vh - 50px)" -->
        <el-scrollbar  class="articleScrollBar">
            <MdPreview 
                :theme="store.themeStatus?'dark':'light'" 
                :editorId="id" 
                :modelValue="textMd" 
                showCodeRowNumber
                class="articlePreview"
                :class="{articlePreview_show : showCatalog}"
                :mdHeadingId="mdHeadingId" 
            />
        </el-scrollbar>
    </div>
</template>

<script setup lang='ts'>
import { getMdApi } from '@/api/mock_api';
import '@/mock/index';
import { MdPreview, MdCatalog} from 'md-editor-v3';
import { useUsuallyStore } from '@/stores';
import { useRoute } from 'vue-router';
    // md文档数据
    let textMd = ref()

    //引入route
    const route = useRoute()
    
    // 获取文章id 
    let textMdId = Number(route.params.id)
    // 获取md文档数据
    const getMd = async () => {
        //根据id获取文章
        let result = await getMdApi(textMdId)
        textMd.value = result.data
    }
    onMounted(() => {
        getMd()
    })

    //引入store
    const store = useUsuallyStore()

    // md-editor-v3的id
    const id = 'preview-article';

    //目标导航id的生成方式
    const mdHeadingId = (text: string, level: number, index: number) => {
        return `sw-catalog-${index}`
    }

    //目录的点击函数
    const catalogClick = ( e: MouseEvent, target: TocItem ) => {
        //获取所有目录列表
        let arr = [...document.getElementsByClassName('md-editor-catalog-link')]
        //重置所有样式
        arr.forEach((item : {className:string}) => {
            item.className = 'md-editor-catalog-link'
        });
        //给点击的catalog添加active样式 
        (e.target as HTMLDivElement).parentElement!.className = 'md-editor-catalog-link md-editor-catalog-active'
        
        //根据id获取元素
        let catalog = document.getElementById(`sw-catalog-${target.index}`)
        //跳转
        catalog?.scrollIntoView(true)
        //最外层滚动条回到顶部
        window.scrollRef.setScrollTop(0)
    }

    // 控制目录显示隐藏
    let showCatalog = ref(true)

    //控制更改显示隐藏
    const changeShowCatalog = () => {
        showCatalog.value = !showCatalog.value
    }
</script>

<style lang="scss" scoped>
.catalogTransition-enter-from,.catalogTransition-leave-to{
    transform: translate(-100%,0);
}
.catalogTransition-enter-active,.catalogTransition-leave-active{
    transition: all 0.5s;
}
.catalogTransition-enter-to,.catalogTransition-leave-from{
    transform: translate(0,0);
}

    .article_container{
        display: flex;
        position: relative;
        .articleCatalogScrollBar{
            width: 100px;
            height: calc( 100vh - 80px );
            background-color: var(--sw-article-catalog-bg-color);
            overflow: inherit;
            position: relative;
        }
        .articleCatalogScrollBar_show{
            width: 300px;
        }
        // 菜单
        .articleCatalog{
            box-sizing: border-box;
            background-color: var(--sw-article-catalog-bg-color);
            padding: 20px 30px;
            ::v-deep(){
                .md-editor-catalog-active>span{
                    color: #409eff;
                }
                .md-editor-catalog-link span:hover{
                    color: #409eff;
                }
            }
        }
        // 预览容器
        .articlePreview{
            transition: all 0.5s;
            height: calc( 100vh - 80px );
            width: calc( 100vw - 100px );
            ::v-deep(){
                .md-editor-preview{
                    font-size: 30px;
                }
                //p标签字体
                .default-theme p{
                    font-size: 28px;
                }
            }
        }
        .articlePreview_show{
            width: calc( 100vw - 300px );
        }
        .articleScrollBar{
            position: absolute;
            right: 0;
            height: calc( 100vh - 80px );
        }
        
    }

    @media (max-width: 992px) {
        .article_container{
            // 菜单
            .articleCatalogScrollBar{
                height: calc( 100vh - 50px );
            }
            // 预览容器
            .articleScrollBar{
                height: calc( 100vh - 50px );
            }
            .articlePreview{
                height: calc( 100vh - 50px );
            }
        }
    }
    @media (max-width:772px) {
        .article_container{
            // 目标滚动栏
            .articleCatalogScrollBar{
                width: 50px;
            }
            .articleCatalogScrollBar_show{
                width: 150px;
            }
            // 预览容器
            .articlePreview{
                width: calc( 100vw - 50px );
            }
            .articlePreview_show{
                width: calc( 100vw - 150px );
            }
            // 预览
            .articlePreview{
                ::v-deep(){
                    .default-theme p{
                        font-size: 20px;
                    }
            }
        }
        }
        
    }

    @media (max-width:600px){
        .article_container{
            // 预览
            .articlePreview{
                ::v-deep(){
                    .md-editor-preview{
                        font-size: 16px;
                    }
                    .default-theme p{
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>

<template>
  <!-- 菜单 -->
    <div class="littleMenu_container">
        <Transition name="littleMenu">
            <div class="drawer_menu" v-show="isShowMenu">
                <div 
                    class="drawer_menuItem"
                    :class="{active:item.index === activeMenu}"
                    v-for="item in menuData"
                    :key="item.id"
                    @click="littleMenuClick(item.path)"
                >
                    <i class="iconfont" :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </div>
                <div class="drawer_flex"></div>
                <div class="drawer_menuItem" @click="changeIsShowMenu(false)">
                    <i class="iconfont icon-fanhui"></i>
                    <span>隐藏</span>
                </div>
            </div>
        </Transition>
        <Transition name="littleMenu">
            <div class="open_littleMenu" v-show="!isShowMenu" @click="changeIsShowMenu(true)">
                <i class="iconfont icon-zhankai"></i>
            </div>
        </Transition>
    </div>
</template>

<script setup lang='ts'>
import type { MenuType } from '@/types/articles';
import { useRouter, useRoute } from 'vue-router';
import { useUsuallyStore } from '@/stores/modules/usually';
    // 接收菜单数据
    defineProps<{
        menuData : MenuType[]
    }>()
    
    const route = useRoute()
    //当前激活的导航
    const activeMenu = computed(() => {
        return route.path.substring(1)
    })

    // 控制菜单显示隐藏
    let isShowMenu = ref(true)

    const router = useRouter()
    // 菜单点击事件
    const littleMenuClick = ( path : string ) => {
        router.push(path)
    }

    const store = useUsuallyStore()
    // 修改菜单显示隐藏
    const changeIsShowMenu = ( val : boolean ) => {
        isShowMenu.value = val
        //记录到store
        store.setIsOpen(val)
    }
</script>

<style lang="scss" scoped>
.littleMenu-enter-from,.littleMenu-leave-to{
    transform: translate(-100%,0);
}
.littleMenu-enter-active,.littleMenu-leave-active{
    transition: all 0.5s;
}
.littleMenu-enter-to,.littleMenu-leave-from{
    transform: translate(0,0);
}
    .littleMenu_container{
        // position: relative;
        height: calc( 100vh - 80px );
        // 抽屉菜单
        .drawer_menu{
            box-sizing: border-box;
            padding: 20px 0;
            width: 200px;
            height: calc( 100vh - 80px );
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--sw-article-catalog-bg-color);
            border-right: 1px solid var(--article-catalog-border-color);
            .drawer_flex{
                flex: 1;
            }
            .drawer_menuItem{
                box-sizing: border-box;
                padding: 40px 30px;
                display: flex;
                align-items: center;
                border-radius: 30px;
                margin-bottom: 25px;
                cursor: url(../assets/link.cur), pointer;
                color: #999;
                &:hover{
                    background-color: #0000001a;
                    color: inherit;
                }
                .iconfont{
                    font-size: 30px;
                    margin-right: 20px;
                }
                span{
                    font-size: 30px;
                }
            }
            .active{
                background-image: linear-gradient(to right,#ed6ea0 0,#ec8c69 100%);
                color:#fff;
                &:hover{
                    color:#fff;
                    box-shadow: 0 0 0.75rem #ed6ea0;
                }
            }
        }

        // 展开按钮
        .open_littleMenu{
            position: absolute;
            left: 0;
            bottom: 10%;
            z-index: 1;
            .iconfont{
                font-size: 50px;
            }
        }
    }
    @media (max-width: 992px) {
        .littleMenu_container{
            height: calc( 100vh - 50px );
            .drawer_menu{
                height: calc( 100vh - 50px );
            }
            .open_littleMenu{
                .iconfont{
                    font-size: 26px;
                }
            }
        }
        
    }

    @media ( max-width:600px ){
        .littleMenu_container{
            .drawer_menu{
                padding: 15px 0;
                width: 96px;
                .drawer_menuItem{
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding: 15px 14px;
                    border-radius: 15px;
                    margin-bottom: 15px;
                    .iconfont{
                        font-size: 16px;
                    }
                    span{
                        font-size: 16px;
                    }
                }
            }
        }
        
    }
</style>

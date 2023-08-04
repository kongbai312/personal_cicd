<template>
    <div class="pr_menu_container" @click="changeActive">
        <div class="lines">
            <div class="line" :class="{line_one_active : isActive}"></div>
            <div class="line" :class="{line_two_active : isActive}"></div>
            <div class="line" :class="{line_three_active : isActive}"></div>
        </div>
    </div>
    <!-- 抽屉 -->
    <div>
        <el-drawer 
            v-model="isActive" 
            :show-close="false" 
            direction="ltr"
            :with-header="false"
        >
            <el-scrollbar>
                <div class="drawer_container">
                    <!-- 头像 -->
                    <div class="drawer_img">
                        <img src="../assets/homeCenter.png" alt="">
                    </div>
                    <!-- 内容 -->
                    <div class="drawer_content">
                        <span>爱学习 & 爱生活</span>
                        <div class="iconList">
                            <el-icon class="iconItem" @click="iconClick('qq')">
                            <i class="iconfont icon-QQ"></i>
                            </el-icon>
                            <el-icon class="iconItem" @click="iconClick('wechat')">
                            <i class="iconfont icon-weixin"></i>
                            </el-icon> 
                            <el-icon class="iconItem" @click="iconClick('github')">
                            <i class="iconfont icon-github"></i>
                            </el-icon> 
                        </div>
                    </div>
                    <!-- 菜单 -->
                    <div class="drawer_menu">
                        <div 
                            class="drawer_menuItem" :class="{active:item.index === activeMenu}"
                            v-for="item in narbarList"
                            :key="item.id"
                            @click="menuClick(item.path)"
                        >
                            <i class="iconfont" :class="item.icon"></i>
                            <span>{{item.title}}</span>
                        </div>
                    </div>
                </div>
            </el-scrollbar>
        </el-drawer>
    </div>

    <!-- 弹窗 -->
    <pr_contactDialog v-model="showDialog" :activeIcon="activeIcon"></pr_contactDialog>
</template>

<script setup lang='ts'>
import narbarList from '@/assets/json/narbarList.json';
import { useRoute, useRouter } from 'vue-router';
import { useMenuIconClick } from '@/hooks';
    //是否激活抽屉
    let isActive = ref(false)
    //更改抽屉状态
    const changeActive = () => {
        isActive.value = !isActive.value
    }

    const route = useRoute()
    //当前激活的导航
    const activeMenu = computed(() => {
        return route.path.substring(1)
    })

    const router = useRouter()
    //点击菜单
    const menuClick = (path : string) => {
        router.push(path)
        // 关闭抽屉
        isActive.value = false
    }

    //控制弹窗显示隐藏  showDialog 
    //当前点击的联系方式    activeIcon
    //图标点击事件  iconClick
    let { showDialog, activeIcon, iconClick } = useMenuIconClick() 
</script>

<style lang="scss" scoped>
//图标移入动画
@keyframes hoverAnm{
  //开始
  0% {
    transform: translate(0,0);
  }
  5%{
    transform: translate(0,-1px);
  }
  10%{
    transform: translate(0,1px);
  }
  60%{
    transform: translate(0,2px);
  }
  100%{
    transform: translate(0,3px);
  }
}
    :deep(.el-drawer__body){
        padding: 0;
    }
    
    .drawer_container{
        user-select: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
        cursor: url(../assets/default.cur),auto;
        // 头像
        .drawer_img{
            img{
                width: 340px;
                height: 340px;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        //抽屉内容
        .drawer_content{
            margin-top: 20px;
            height: 210px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            // 卡片标语
            span{
                font-size: 40px;
            }   
            //卡片底部图标
            .iconList{
                width: 400px;
                display: flex;
                justify-content: center;
                border-bottom:1px var(--el-color-info) solid;
                .iconItem{
                    width: 120px;
                    height: 70px;
                    line-height: 70px;
                    border-right:1px var(--el-color-info) solid;
                    cursor: url(../assets/link.cur), pointer;
                    &:last-child{
                        border-right:none;
                    }
                    .iconfont{
                        font-size: 50px;
                    }
                    .iconfont:hover{
                        animation: hoverAnm 1s ease 0s normal 1;
                        animation-fill-mode:forwards;
                    }
                }
            }
        }
        // 抽屉菜单
        .drawer_menu{
            padding: 50px 0;
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .drawer_menuItem{
                padding: 40px 100px;
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
                    font-size: 50px;
                    margin-right: 20px;
                }
                span{
                    font-size: 40px;
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
    }
    @media ( max-width:992px ) {
        .pr_menu_container{
            .lines{
                height: 30px;
                width: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .line{
                    width: 30px;
                    height: 3px;
                    background-color: var(--el-menu-text-color);
                    border-radius: 3px;
                    transition: all 0.4s;
                }
                .line:nth-child(2){
                    margin: 5px 0;
                }
                .line_one_active{
                    width: 30px;
                    position: relative;
                    transform: rotate(-45deg);
                    top: 26%;
                }
                .line_two_active{
                    opacity: 0;
                }
                .line_three_active{
                    width: 30px;
                    position: relative;
                    transform: rotate(45deg);
                    top: -24%;
                }
            }
        } 
    }
    @media ( max-width:400px ){
        .drawer_container{
            .drawer_menu{
                .drawer_menuItem{
                    padding-top: 15px;
                    padding-bottom: 15px;
                    .iconfont{
                        font-size: 16px;
                    }
                    span{
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>

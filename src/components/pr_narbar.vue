<template>
  <el-menu
    :default-active="activeIndex"
    class="pr_narbar_container"
    mode="horizontal"
    :ellipsis="false"
    @select="menuSelect"
  >
    <!-- Logo -->
    <el-menu-item index="logo" class="logo_menuItem">
        <template #default>
            <img v-if="!isDark" class="logo" src="@/assets/images/personalLogo.png" alt="" />
            <img v-else class="logo" src="@/assets/images/personalLogo2.png" alt="" />
        </template>
    </el-menu-item>
    <div class="flex-grow flex-grow-phone"></div>
    <!-- 标题 -->
    <el-menu-item index="title" class="title_menuItem">Swhite</el-menu-item>
    <div class="flex-grow"></div>
    <!-- 导航条 -->
    <el-menu-item 
        :index="item.index" 
        class="text_menuItem"
        v-for="item in narbarList"
        :key="item.id"
    >
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.title}}</span>
    </el-menu-item>
    
    <!-- 菜单收缩 -->
    <el-menu-item index="menu" class="switch_menuItem menu_menuItem" disabled><pr_menu></pr_menu></el-menu-item>
    <!-- 昼夜模式 -->
    <el-menu-item disabled index="switch" class="switch_menuItem" >
        <template #default>
                <i-ep-sunny v-if="!isDark" class="switch_icon" @click="changeModel" />
                <i-ep-moon v-else class="switch_icon" @click="changeModel"></i-ep-moon>  
        </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang='ts'>
import { useRouter,useRoute } from 'vue-router';
import { useDark, useToggle} from '@vueuse/core';
import { useUsuallyStore } from '@/stores';
import narbarList from '@/assets/json/narbarList.json';
    //判断是否是黑暗模式
    const isDark = useDark() 
    //切换模式的函数
    const toggleDark = useToggle(isDark)

    //引入store
    const store = useUsuallyStore()

    //切换主题
    const changeModel = () => {
        //调用切换主题的函数
        toggleDark()
        //存储当前主题状态
        store.setThemeStatus(isDark.value)
    }

    //引入router
    const router = useRouter()

    const route = useRoute()

    //当前激活的导航
    const activeIndex = computed(() => {
        return route.path.substring(1)
    })
    const menuSelect = ( key: string ) => {
        //点击logo 和 昼夜模式 和 菜单
        if(key === 'logo' || key === 'switch' || key === 'menu'){
            return
        }
        //点击标题
        if(key === 'title'){
            window.location.href = import.meta.env.VITE_APP_URL + '/home'
            return
        }
        //如果是导航列表的存在
        let narbarItem = narbarList.find((item)=> key === item.index)
        if( narbarItem ){//如果为导航列表数组里的
            router.push(narbarItem.path)
            //存储当前index到store
            store.setNavbarActiveItem(key)
        }
    }
</script>

<style lang="scss" scoped>
    .pr_narbar_container{
        height: 80px;
        z-index: 1;
        //弹性布局
        .flex-grow {
            flex-grow: 1;
        }
        .flex-grow-phone{
            display: none;
        }
        //logo
        .logo_menuItem{
            padding: 0;
            border-bottom: none;
            pointer-events:none;
            cursor:auto;
            .logo{
                height: 78px;
                width: 78px;
            }
        }
        .logo_menuItem:hover{
            background-color: transparent;
        }
        //标题
        .title_menuItem{
            border-bottom: none;
            font-size: 38px;
            font-weight: 700;
            color: var(--sw-narbar-logo);
            &:hover{
                cursor: url(../assets/cursor/link.cur), pointer;
            }
        }
        //开关
        .switch_menuItem{
            border-bottom: none;
            &:focus{
                background-color: transparent;
            }
            &:hover{
                cursor: url(../assets/cursor/link.cur), pointer;
                background-color: transparent;
            }
            .switch_icon{
                font-size: 30px;
                color: var(--el-text-color-primary);
            }
        }
        .menu_menuItem{
            display: none;
        }
        //文字相关
        .text_menuItem{
            &:focus{
                background-color: transparent;
            }
            &::after {
                content: "";
                width: 0;
                height: 5px;
                background: var(--sw-narbar-border);
                position: absolute;
                bottom: 0%;
                border-radius: 10px;
                left: 50%;
                transition: all 0.5s;
            }
            &:hover::after {
                left: 0;
                width: 100%;
            }
            &:hover{
                background-color: transparent;
            }
            .iconfont{
                font-size: 30px;
                margin-right: 5px;
            }
            span{
                font-size: 24px;
            }
        }
        // 是否为激活状态
        .is-active{
            border-color: transparent;
            &::after{
                content: "";
                width: 100%;
                height: 5px;
                background: var(--sw-narbar-border);
                position: absolute;
                bottom: 0%;
                border-radius: 10px;
                left: 0;
                transition: all 0.5s;
            }
        }
        //禁止点击
        .is-disabled{
            opacity: 1;
            cursor: url(../assets/cursor/link.cur), pointer;
        }
    }

    @media (max-width: 992px) {
        .pr_narbar_container{
            height: 50px;
            .flex-grow-phone,.menu_menuItem{
                display: flex;
            }
            //logo
            .logo_menuItem{
                .logo{
                    height: 50px;
                    width: 50px;
                }
            }
            //标题
            .title_menuItem{
                font-size: 28px;
            }
            //开关
            .switch_menuItem{
                .switch_icon{
                    font-size: 24px;
                }
            }
            // 菜单列表
            .text_menuItem{
                display: none;
            }
        }
        
    }
</style>

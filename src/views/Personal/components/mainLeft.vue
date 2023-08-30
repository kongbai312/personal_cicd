<template>
    <div class="main_left">
        <!-- 卡片 -->
        <el-card shadow="hover" class="main_left_elCard">
            <template #header>
                <div class="left_elCard_header">
                <el-image :preview-src-list="preImgList" loading="lazy" :src="CardImg" class="cardImg" /> 
                <span>Swhite</span>
                </div>
            </template>
            <template #default>
                <div class="left_elCard_content">
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
                <div class="left_elCard_bottom" ref="leftElCardBottom">
                    <div 
                        class="bottom_text personal" 
                        v-on:mouseenter="enterMethod('personal','enter')" 
                        v-on:mouseleave="leaveMethod('personal','leave')" 
                        @click="leftNarbarClick('home')"
                    ><span>首</span><span>页</span></div>
                    <div 
                        class="bottom_text about" 
                        v-on:mouseenter="enterMethod('about','enter')" 
                        v-on:mouseleave="leaveMethod('about','leave')" 
                        @click="leftNarbarClick('about')"
                    ><span>关</span><span>于</span></div>
                    <div 
                        class="bottom_text love" 
                        v-on:mouseenter="enterMethod('love','enter')" 
                        v-on:mouseleave="leaveMethod('love','leave')"
                        @click="leftNarbarClick('love')"
                    ><span>表</span><span>白</span></div>
                    <div 
                        class="bottom_text login" 
                        v-on:mouseenter="enterMethod('login','enter')" 
                        v-on:mouseleave="leaveMethod('login','leave')"
                        @click="leftNarbarClick('login')"
                    ><span>登</span><span>录</span></div>
                </div>
            </template>
        </el-card>
    </div>

    <!-- 弹窗 -->
    <pr_contactDialog v-model="showDialog" :activeIcon="activeIcon"></pr_contactDialog>
</template>

<script setup lang='ts'>
import CardImg from '@/assets/images/homeCenter.png';
import { useMouseInElement } from '@vueuse/core';
import { useMenuIconClick } from '@/hooks';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores';  

   //图片预览数组
    let preImgList = [CardImg]

    //控制弹窗显示隐藏  showDialog 
    //当前点击的联系方式    activeIcon
    //图标点击事件  iconClick
    let { showDialog, activeIcon, iconClick } = useMenuIconClick()

    //引入store
    const store = useUserStore()

    //引入router
    const router = useRouter()
    //左侧导航条点击函数
    const leftNarbarClick = ( key : string ) => {
        if(key === 'home'){
            window.scrollRef.scrollTo(0,0)
        } 
        else if( key === 'about'){
            router.push(key)
        }
        else if( key === 'love'){
            router.push('/leaveword')
        }
        else if(key === 'login'){
            // ElMessage.info('登录功能还在开发哦(｡･∀･)ﾉﾞ')
            store.setShowLoginDialog(true)
        }
    }

    let leftElCardBottom = ref()
    const { isOutside } = useMouseInElement(leftElCardBottom)

    //类名数组
    let classList = ['personal','about','love','login']
    // 鼠标移入事件
    const enterMethod = (value : string , type : string) => {
        //鼠标移入
        if(type === 'enter'){
            //将其他的恢复为0
            classList.forEach(( item ) => {
                if( item !== value){
                    (document.getElementsByClassName(item)[0] as HTMLDivElement).style.zIndex = '0'
                }
            });
            (document.getElementsByClassName(value)[0] as HTMLDivElement).style.zIndex = '1'
        }   
    }

    // 鼠标移出事件
    const leaveMethod = (value : string , type : string) => {
        //鼠标移出
        let timer : NodeJS.Timeout
        if(type === 'leave' && isOutside.value){
            timer = setTimeout(() => {
                (document.getElementsByClassName(value)[0]as HTMLDivElement).style.zIndex = '0'
                clearTimeout(timer)
            },1000)
        }
    }
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

//主体左边
.main_left{
    user-select: none;
    //卡片
    .main_left_elCard{
        width: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // 卡片头部
        .left_elCard_header{
            display: flex;
            flex-direction: column;
            align-items: center;
            .cardImg{
                width: 160px;
                height: 160px;
                border-radius: 50%;
                :deep(img){
                    cursor: zoom-in;
                }
            }
            //卡片标题
            span{
                padding: 10px 0; 
                font-size: 30px;
                font-weight: 700;
            }
        }
        //卡片内容
        .left_elCard_content{
            height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            // 卡片标语
            span{
                font-size: 24px;
            }   
            //卡片底部图标
            .iconList{
                width: 280px;
                display: flex;
                justify-content: center;
                border-bottom:1px var(--el-color-info) solid;
                .iconItem{
                    width: 60px;
                    height: 54px;
                    line-height: 54px;
                    border-right:1px var(--el-color-info) solid;
                    cursor: url(../../../assets/cursor/link.cur), pointer;
                    &:last-child{
                        border-right:none;
                    }
                    .iconfont{
                        font-size: 30px;
                    }
                    .iconfont:hover{
                        animation: hoverAnm 1s ease 0s normal 1;
                        animation-fill-mode:forwards;
                    }
                }
            }
        }
        //卡片底部
        .left_elCard_bottom{
            box-sizing: border-box;
            width: 280px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            &::before{
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                box-sizing: border-box;
                width: 100%; 
                height: 0;
                border-left: 1px solid var(--el-color-primary-light-5);
                border-right: 1px solid var(--el-color-primary-light-5);
                transition: all 0.5s ease-out 0.2s;
            }
            &::after{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 0;
                background-color: var(--el-bg-color-page);
                transition: all 0.3s ease-out 0.7s;
            }
            &:hover::before,&:hover::after{
                height: 100%;
            }
            // 卡片底部文字
            .bottom_text{
                box-sizing: border-box;
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 20px 70px;
                font-size: 32px;
                color: var(--el-text-color-regular);
                transition: all 0.3s ease 0.4s;
                cursor: url(../../../assets/cursor/link.cur), pointer;
                &:hover{
                    color: var(--el-color-primary);
                }
                
            }
        }
        
    }
}



@media ( max-width:992px ) {
    .main_left{
        display: none;
    }
}
</style>

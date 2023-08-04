<template>
    <el-card shadow="hover" class="about_name_elCard">
        <template #header>
            <div class="about_nameContainer" ref="target" @mousemove="mousemove" @mouseleave="isShow = false" @mouseenter="isShow = true">
            <div class="name_cursor" v-show="isShow" :style="`transform: translate(${translateX},${translateY});`"></div>
            <div class="name_shapes"  >
                <div class="shape shape_1" v-show="isShow" :style="`transform: translate(${translateX},${translateY})`"></div>
                <div class="shape shape_2" v-show="isShow" :style="`transform: translate(${translateX},${translateY})`"></div>
                <div class="shape shape_3" v-show="isShow" :style="`transform: translate(${translateX},${translateY})`"></div>
            </div>
            <div class="name_content">
                <span>Swhite</span>
            </div>
            </div>
        </template>
        <template #default>
            <div class="about_nameDefault" v-for="item in aboutData" :key="item.id">
                <div class="second_title" :ref="pushTarget" @click="goTo(item.refId)">
                    <i class="iconfont icon-lianjie"></i>
                    <h3>{{ item.title }}</h3>
                </div>
                <div :class="item.contentClass" v-for="(text,index) in item.content" :key="index">
                    {{ text }}
                </div>
            </div>
            <div class="about_nameDefault" >
                <div class="second_title">
                    <i class="iconfont icon-lianjie"></i>
                    <h3>未完待续...</h3>
                </div>
            </div>
        </template>
    </el-card>
</template>

<script setup lang='ts'>
import { getAboutDataApi } from '@/api/mock_api';
import { useMouseInElement } from '@vueuse/core';
import type { AboutDataType } from '@/types/about';
import '@/mock/index';
//目标元素
const target = ref(null)

//在目标内移动
const { elementX, elementY, } = useMouseInElement(target)

//移动x的px
let translateX = ref()
//移动y的px
let translateY = ref()

//控制鼠标圆心显示隐藏
let isShow = ref(false)

//鼠标移动事件
const mousemove = () => {
  translateX.value = `${elementX.value}px`
  translateY.value = `${elementY.value}px`
}

//名字的由来
// let nameComeFrom = ref()

//项目涉及
// let projectInvolve = ref()

// let targetText = ref({
//     nameComeFrom:null,
//     projectInvolve:null
// })

// 标题对象数组
let targetTitleList = [] as (Element | ComponentPublicInstance)[]
const pushTarget = ( el : Element | ComponentPublicInstance | null ) => {
    if(el){
        targetTitleList.push(el)
    }
}

//获取about数据
let aboutData = ref<AboutDataType[]>()

const getAboutData = async () => {
    let result = await getAboutDataApi()
    aboutData.value = result.data
}
onMounted(() => {
    getAboutData()
})

//去往目标区域
const goTo = ( goToTarget : number ) => {
    (targetTitleList[goToTarget] as HTMLDivElement).scrollIntoView()
    // goToTarget.scrollIntoView()
}
</script>

<style lang="scss" scoped>
    .about_name_elCard{
        border-radius: 30px;
        margin-top: 30px;
        .about_nameContainer{
            border-radius: 20px;
            position: relative;
            background-color: #fff;
            height: 315px;
            overflow: hidden;
            user-select: none;
            &::after{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background-color: var(--sw-after-bg-color);
            }
            .name_cursor{
                position: absolute;
                background: #2128bd;
                width: 30px;
                height: 30px;
                margin: -10px 0 0 -10px;
                border-radius: 50%;
                will-change: transform;
                user-select: none;
                pointer-events: none;
                z-index: 3;
                translate: none;
                rotate: none;
                scale: none;
            }
            .name_shapes{
                position: relative;
                height: 100%;
                width: 100%;
                background: #2128bd;
                overflow: hidden;
            .shape{
                will-change: transform;
                position: absolute;
                border-radius: 50%;
                translate: none;
                rotate: none;
                scale: none;
            }
            .shape_1{
                background: #005ffe;
                width: 650px;
                height: 650px;
                margin: -325px 0 0 -325px;
            }
            .shape_2{
                background: #ffe5e3;
                width: 440px;
                height: 440px;
                margin: -220px 0 0 -220px;
            }
            .shape_3{
                background: #ffcc57;
                width: 270px;
                height: 270px;
                margin: -135px 0 0 -135px;
            }
            }
            .name_content{
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #fff;
                mix-blend-mode: screen;
                transition: all 1s;
                span{
                    font-size: 160px;
                    letter-spacing: 16px;
                    color: var(--sw-about-name-color);
                }
            }
        }

        .about_nameDefault{
            display: flex;
            flex-direction: column;
            .second_title{
                display: flex;
                align-items: center;
                cursor: url(../../../assets/link.cur),pointer;
                &:hover{
                    color: #409eff;
                }
                .iconfont{
                    font-size: 40px;
                    margin-right: 20px;
                    transition: all 0.5;
                }
                h2{
                    font-weight: 700;
                    font-size: 50px;
                }
            }
            .second_content{
                text-indent: 60px;
                line-height: 50px;
            }
            .tag_content{
                text-indent: 60px;
                line-height: 80px;
            }
        }
    }

    @media (max-width:772px) {
        .about_name_elCard{
            .about_nameDefault{
                .second_title{
                    .iconfont{
                        font-size: 22px;
                    }
                }
                .second_content{
                    line-height: 20px;
                    text-indent: 30px;
                }
                .tag_content{
                    text-indent: 20px;
                    line-height: 50px;
                }
            }
        }
    }
</style>

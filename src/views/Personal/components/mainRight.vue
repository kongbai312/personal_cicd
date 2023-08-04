<template>
  <div class="main_right">
    <!-- 个人资料 -->
    <el-card shadow="hover" class="main_right_elCard">
        <template #header>
            <div class="right_elCard_header">个人资料</div>
        </template>
        <template #default>
            <div class="right_elCard_content">
                <div class="imgContainer">
                    <el-image class="imgClass" fit="cover" src="/src/assets/homeCenter.png"></el-image>
                </div>
                <div class="textContainer">
                    <span class="name">Swhite</span>
                    <span class="email">312781556@qq.com</span>
                </div>
            </div>
        </template>
    </el-card>
    <!-- 日历 -->
    
    <el-card shadow="hover" class="right_calendar_elCard">
        <template #default>
            <!-- element-plus中文包 -->
            <el-config-provider :locale="zhCn">
                <el-calendar ref="calendar" class="calendarClass">
                    <template #header="{ date }">
                        <div class="calendar_header">
                            <i class="iconfont icon-zuojiantou"  @click="selectDate('prev-month')"></i>
                            <span class="header_date" @click="selectDate('today')">{{ date }}</span>
                            <i class="iconfont icon-youjiantou" @click="selectDate('next-month')"></i>
                        </div>
                    </template>
                    <template #date-cell="{ data }">
                        <div :class="{ isSelected : data.isSelected }" class="dayClass">{{ data.type === 'prev-month' || data.type === 'next-month' ? '' : getDay(data.day) }}</div>
                    </template>
                </el-calendar>
            </el-config-provider>
        </template>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 日历实例
const calendar = ref()

// 选择日期
const selectDate = (val: string) => {
    //如果实例为空直接返回
    if (!calendar.value) return
    //选择相应的日期
    calendar.value.selectDate(val)
}

//时间格式处理
// {
//   "isSelected": false,
//   "type": "current-month",
//   "day": "2023-06-11",
//   "date": "2023-06-11T10:25:42.209Z"
// }
const getDay = ( date : string) => {
    return date.split('-')[2]
}
</script>

<style lang="scss" scoped>
    .main_right{
        // 个人资料
        .main_right_elCard{
            border-radius: 20px;
            width: 420px;

            :deep(.el-card__header) {
                background-color: var(--el-bg-color-page);
            }
            // 头部
            .right_elCard_header{
                display: flex;
                align-items: center;
                height: 40px;
            }
            // 内容
            .right_elCard_content{
                display: flex;
                justify-content: space-between;
                .imgContainer{
                    box-sizing: border-box;
                    width: 120px;
                    height: 120px;
                    padding: 5px;
                    border: 1px solid var(--el-border-color);
                }
                .textContainer{
                    box-sizing: border-box;
                    height: 100%;
                    width: 230px;
                    display: flex;
                    flex-direction: column;
                    padding: 5px 0;
                    .name{
                        font-size: 24px;
                        font-weight: 700;
                    }
                    .email{
                        margin-top: 10px;
                        font-size: 20px;
                        color: var(--el-text-color-disabled);
                    }
                }
            }
        }
        //日历
        .right_calendar_elCard{
            border-radius: 20px;
            width: 420px;
            margin-top: 30px;
            .calendarClass{
                // 日历头部
                .calendar_header{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 40px;
                    .iconfont{
                        font-size: 26px;
                    }
                    .header_date{
                        font-size: 26px;
                    }
                }
                .dayClass{
                    font-size: 24px;
                }
                .isSelected{
                    box-sizing: border-box;
                    padding: 3px;
                    border: 1px solid red;
                    border-radius: 50%;
                }
                :deep(.el-calendar-day){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50px;
                    width: 50px;
                }
            }
        }
    }

    @media ( max-width:992px ) {
        .main_right{
            display: none;
        }
    }
</style>

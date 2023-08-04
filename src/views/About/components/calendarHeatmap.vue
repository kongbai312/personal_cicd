<template>
    <div class="calendarHeatmap_container">
        <el-card shadow="hover" class="headmap_elCard" v-if="commitList">
            <div class="headmap_title">项目提交统计</div>
            <calendar-heatmap 
                :values="commitList" 
                :end-date="Date()" 
                :round="3"
                :max="10"
                tooltip-unit="commit"
                class="calHeatmap"
                :tooltip-formatter="tooltipFunction"
                :range-color="rangeColor"
                :locale="{
                    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
                    days  : '日_一_二_三_四_五_六'.split('_'),
                    on    : '于',
                    less  : '少',
			        more  : '多'
                }"
            ></calendar-heatmap>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { getCommitApi } from '@/api/about_api';
import { CalendarHeatmap, type TooltipFormatter } from 'vue3-calendar-heatmap';
import moment from '@/utils/moment';
import type { CommitType, CommitItemType} from '@/types/about'
import { useUsuallyStore } from '@/stores';
    //热日历颜色
    // let rangeColor = ['#333', '#9be9a8', '#40c463', '#30a14e', '#216e39'] 
    // let rangeColor = ['#EBEDF0','#DAE2EF','#C0DDF9','#73B3F3','#3886E1','#17459E']

    //引入store
    const store = useUsuallyStore()
    //计算热日历颜色
    let rangeColor = computed(() => {
        return store.themeStatus ? ['#555','#DAE2EF','#C0DDF9','#73B3F3','#3886E1','#17459E'] : ['#EBEDF0','#DAE2EF','#C0DDF9','#73B3F3','#3886E1','#17459E']
    })

    //提交记录
    let commitList = ref()
    //获取commit记录
    const getCommit = async () => {
        let result = await getCommitApi()
        // 存储数据
        commitList.value = result
        //处理commit记录数据 提取时间
        let arr : CommitType[]= commitList.value.map(( item : CommitItemType) => {
            let obj = {
                date:item.commit.committer.date.split('T')[0],
                count:1
            }
            return obj
        })
        //清空数组
        commitList.value = []
        //去重并统计
        arr.forEach( (item) => {
            let index = commitList.value.findIndex( (commitItem : CommitType) => commitItem.date === item.date)
            //如果没有相同的
            if( index === -1){
                commitList.value.push(item)
            }
            else{//存在相同的
                commitList.value[index].count++
            }
            
        })
    }
    onMounted(() => {
        getCommit()
    })

    //
    const tooltipFunction : TooltipFormatter = ( item ) => {
        let time = moment(item.date).format('ll') 
        let text = `于${time},提交${item.count}次`
        return text
    }
</script>

<style lang="scss" scoped>
    .calendarHeatmap_container{
        .headmap_elCard{
            box-sizing: border-box;
            padding: 30px 40px;
            border-radius: 30px;
            margin-top: 30px;
            .headmap_title{
                margin-bottom: 30px;
                font-size: 30px;
            }
            .calHeatmap{
                fill: var(--sw-about-commit-color);
                ::v-deep(){
                    // 底部标注
                    .vch__legend{
                        .vch__legend-right{
                            .vch__legend{
                                display: flex;
                                align-items: center;
                                justify-content: flex-end;
                                .vch__external-legend-wrapper{
                                    margin:0 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 0px) {
        .calendarHeatmap_container{
            .headmap_elCard{
                .calHeatmap{
                    font-size: 10px;
                }
            }
        }
    }
</style>

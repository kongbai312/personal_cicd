<template>
  <div class="pagination_container">
    <el-config-provider :locale="zhCn">
        <el-pagination
            background
            :currentPage="currentPage"
            :total="total"
            :page-count="totalPage"
            :pager-count="5"
            layout="total, prev, pager, next, slot"
            @current-change="handleCurrentChange"
        >
            <div class="pagination_totalPage">总 {{totalPage}} 页</div>
        </el-pagination>
    </el-config-provider>
  </div>
</template>

<script setup lang='ts'>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
    defineProps<{
        // 当前页码
        currentPage: number,
        // 总数量
        total : number,
        // 总页数
        totalPage : number
    }>()

    const emit = defineEmits<{
        // 修改页码
        ( event : 'update:currentPage', data : number ) : void
    }>()

    //更改当前页码
    const handleCurrentChange = ( val: number ) => {
        emit('update:currentPage', val)
    }
</script>

<style lang="scss" scoped>
    .pagination_container{
        width: 100%;
        display: flex;
        justify-content: center;
        .el-pagination{
            font-size: 30px;
            ::v-deep(){
                // 分页
                .el-pager{
                    .number{
                        height: 40px;
                        width: 40px;
                        font-size: 18px;
                    }
                }
                // 上
                .btn-prev{
                    height: 40px;
                    width: 40px;
                    .el-icon{
                        font-size: 30px;
                    }
                }
                // 下
                .btn-next{
                    height: 40px;
                    width: 40px;
                    .el-icon{
                        font-size: 30px;
                    }
                }
                // 更多
                .more{
                    height: 40px;
                    width: 40px;
                    font-size: 20px;
                }
            }
            .pagination_totalPage{
                margin-left: 16px;
                color:var(--el-text-color-regular);
            }
        }
    }

    @media ( max-width: 772px ) {
        .pagination_container{
            .el-pagination{
                font-size: 12px;
                ::v-deep(){
                    // 分页
                    .el-pager{
                        .number{
                            height: 20px;
                            width: 20px;
                            font-size: 12px;
                        }
                    }
                    // 上
                    .btn-prev{
                        height: 20px;
                        width: 20px;
                        .el-icon{
                            font-size: 12px;
                        }
                    }
                    // 下
                    .btn-next{
                        height: 20px;
                        width: 20px;
                        .el-icon{
                            font-size: 12px;
                        }
                    }
                    // 更多
                    .more{
                        height: 20px;
                        width: 20px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>

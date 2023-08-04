<template>
  <div>
        <el-dialog
            :modelValue="modelValue" 
            class="contactDialog"
            :show-close="false"
            center
            :before-close="onClose"
        >
            <template #header>
                <span class="contactDialog_header">添加作者联系</span>
            </template>
            <div class="contactDialog_container">
                <el-image 
                    :src="activeIcon && activeIcon ==='qq'? QQImg : WeChatImg" 
                    class="wechatImg" 
                    fit="contain"
                ></el-image>
            </div>
        </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import WeChatImg from '@/assets/wechat.jpg';
import QQImg from '@/assets/qq.jpg';
    let { activeIcon = 'qq', modelValue } = defineProps<{
        // 当前点击的联系方式
        activeIcon : string,
        // 控制弹窗显示隐藏
        modelValue: boolean
    }>()

    const emit = defineEmits<{
        (event : 'update:modelValue', data : boolean) : void
    }>()

    //关闭前的回调
    const onClose = ( done : () => void ) => {
        // 通知父组件
        emit('update:modelValue',false)
        // 执行关闭函数
        done()
    }
</script>

<style lang="scss" scoped>
// 弹窗
:deep(.el-dialog__header){
    margin: 0;
}
.contactDialog{
    .contactDialog_header{
        font-size: 50px;
    }
    .contactDialog_container{
        display: flex;
        justify-content: center;
        .wechatImg{
            width: 60vw;
            height: 60vh;
        }
    }
}

@media (max-width: 600px) {
    .contactDialog{
        .contactDialog_header{
            font-size: 16px;
            height: 30px;
            line-height: 30px;
        }
        .contactDialog_container{
            .wechatImg{
                height: 60vw;
            }
        }
    }
}
</style>

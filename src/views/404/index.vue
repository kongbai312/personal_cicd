<template>
  <div class="error_container">
    <div class="error_box">
        <div class="error_container_left">
            <el-image fit="cover" class="error_img" src="https://pic.imgdb.cn/item/64ae6ac71ddac507cc1268bb.jpg"></el-image>
        </div>
        <div class="error_container_right">
            <span>404</span>
            <span>Page Not Found</span>
            <span @click="router.push('/personal')"><i class="iconfont icon-zhuye"></i><div>回到主页</div></span>
        </div>
    </div>
    
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';

   const router = useRouter()
</script>

<style lang="scss" scoped>
    .error_container{
        cursor: url(../../assets/default.cur),auto;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .error_box{
            display: flex;
            box-shadow: 0 12px 24px 18px rgba(7,17,27,0.06);
            border-radius: 20px;
            .error_container_left{
                .error_img{
                    width: 45vw;
                    height: 100%;
                }
            }
            .error_container_right{
                box-sizing: border-box;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 120px 80px;
                & span:nth-child(1){
                    font-size: 200px;
                    font-weight: 700;
                }
                & span:nth-child(2){
                    box-sizing: border-box;
                    padding: 26px 20px;
                    font-size: 34px;
                }
                & span:nth-child(3){
                    box-sizing: border-box;
                    padding: 26px 40px;
                    font-size: 32px;
                    border-radius: 10px;
                    margin-top: 20px;
                    background-color: #49b1f5;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    position: relative;
                    cursor: url(../../assets/link.cur),pointer;
                    .iconfont{
                        font-size: 38px;
                        margin-right: 10px;
                        z-index: 1;
                    }
                    div{
                        z-index: 1;
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 0;
                        z-index: 0;
                        border-radius: 10px;
                        background: #ff7242;
                        transition: width 0.5s ease-out;
                    }
                }
                & span:nth-child(3):hover::before{
                    transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
                    width: 100%;
                }
            }
        }
    }

    @media ( max-width:600px) {
        .error_container{
            .error_box{
                flex-direction: column;
                .error_container_left{
                    .error_img{
                        width: 70vw;
                        height: 35vh;
                    }
                }
            }
        }
    }
</style>

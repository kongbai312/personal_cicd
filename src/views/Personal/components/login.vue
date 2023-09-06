<template>
  <div class="login_container">
    <el-dialog 
        class="loginDialog"
        :model-value="true" 
        @close="close"
        @open="open"
        :close-on-click-modal="false"
    >
        <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
            <el-form-item prop="account">
                <el-input class="formInput" v-model="loginForm.account" placeholder="邮箱" />
            </el-form-item>
            <el-form-item prop="code" v-if="status === 'register'">
                <el-input class="formInput" v-model="loginForm.code" placeholder="验证码">
                    <template #append>
                        <span 
                            class="sendCode" 
                            :class="{ disabled : isSend }"
                            @click="sendCode"
                        >{{ !isSend ? '发送' : time }}</span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input class="formInput" type="password" show-password  v-model="loginForm.password" placeholder="密码" />
            </el-form-item>
        </el-form>
        <div class="loginBtn" @click="loginOrRegister">{{ status === 'login' ? '登录' : '注册'}}</div>
        <div class="textBox">
            <span class="textItem" @click="change">{{ status === 'login' ? '立即注册' : '立即登录'}}</span>
            <span class="textItem" @click="forget">忘记密码</span>
        </div>
        <div class="socialBox">
            <div class="socialTitle">社交账号登录</div>
            <div class="svgBox">
                <img @click="socialLogin" class="svgIcon" src="../../../assets/images/svg/qq.svg" />
                <img @click="socialLogin" class="svgIcon" src="../../../assets/images/svg/wechat.svg" />
            </div>
        </div>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores';    
import type { LoginType } from '@/types/user';
import { validateMail, validateCode } from '@/utils/rules';
import { getCodeApi, registerApi, loginApi } from '@/api/user_api';
import { useRouter } from 'vue-router';

    //引入store
    const store = useUserStore()

    //引入router 
    const router = useRouter()

    //表单
    let loginFormRef = ref()

    //登录表单
    let loginForm = reactive<LoginType>({
        account :'',
        password:'',
        code : ''
    })

    //校验规则
    const rules = reactive({
        account : [ 
            { validator : validateMail , trigger: 'blur'}
        ],
        password : [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 16, message: '密码长度应为6~16位', trigger: 'blur' }
        ],
        code : [
            { validator : validateCode , trigger : 'blur'}
        ]
    })
    
    //当前状态  login 登录 register注册
    let status = ref<'login' | 'register'>('login')

    //切换注册
    const change = () => {
        //重置校验规则
        loginFormRef.value.resetFields()
        // 状态更改
        status.value = ( status.value === 'login' ) ? 'register' : 'login'
    }

    //忘记密码
    const forget = () => {
        ElMessage.info('该功能还在开发哦(｡･∀･)ﾉﾞ')
    }

    //剩余时间
    let time = ref(3)

    //是否发送了验证码
    let isSend = ref(false)

    //发送验证码
    const sendCode = () => {
        //如果是发送状态
        if(isSend.value) return
        //校验邮箱是否正确
        loginFormRef.value.validateField('account',async ( valid : boolean ) => {
            if( valid ){//验证通过
                //更改发送状态
                isSend.value = true
                //发送请求获取验证码
                let result = await getCodeApi(loginForm.account)
                if(result.code === 200){
                    ElMessage.success('验证码发送成功')
                }
                else{
                    ElMessage.error(result.message)
                }
                //开启定时器
                let timer = setTimeout(function timeDown (){
                    time.value -- 
                    if(time.value === 0){//结束判定
                        //更改发送状态
                        isSend.value = false
                        //重置秒数
                        time.value = 3
                        //清空定时器
                        clearTimeout(timer)
                    }
                    else{//否则循环
                        timer = setTimeout(timeDown,1000)
                    }
                },1000)
            }
            else{//验证失败
                return
            }
        })
    }

    //登录弹层显示
    let showLoginDialog = computed(() => {
        return store.showLoginDialog
    })

    //打开时的回调
    const open = () => {
        //切换回登录
        status.value = 'login'
        //重置表单校验规则
        loginFormRef.value.resetFields()
    }

    //关闭的回调
    const close = () => {
        store.setShowLoginDialog(false)
    }

    //社交登录
    const socialLogin = () => {
        ElMessage.info('该功能还在开发哦(｡･∀･)ﾉﾞ')
    }

    // 登录或注册
    const loginOrRegister = () => {
        //表单整体校验
        loginFormRef.value.validate( async (valid :boolean) => {
            if( valid ){//校验通过
                let result : any
                if( status.value === 'login' ){//当前为登录
                    result = await loginApi( loginForm )
                }
                else if( status.value === 'register' ){//当前为注册
                    //发送请求注册
                    result = await registerApi( loginForm )
                }
                if(result.code === 200){//注册成功
                    //存储用户信息
                    store.setUserInfo( result.result )
                    //注册成功提示
                    ElMessage.success(`${status.value === 'login' ? '登录成功' : '注册成功'}`)
                    //关闭弹层
                    store.setShowLoginDialog(false)
                    //跳转用户中心
                    router.push('/user')
                }
                else{
                    ElMessage.error(result.message)
                }
            }
            else{//验证失败
                console.log('失败')
                return
            }
        })
        
    }
</script>

<style lang="scss" scoped>
    .login_container{
        ::v-deep(){
            .loginDialog{
                width: 30%;
                background-color: #F1F3F9;
                .el-dialog__header{
                    margin: 0;
                    .el-dialog__headerbtn{
                        font-size: 30px;
                        top: 20px;
                        right: 30px;
                        width: auto;
                        height: auto;
                    }
                }
                .el-dialog__body{
                    padding: 50px 30px 30px;
                    .el-form{
                        .el-form-item{
                            margin-bottom: 50px;
                        }
                    }
                    .formInput{
                        height:50px;
                        .el-input__wrapper{
                            .el-input__suffix{
                                .el-input__suffix-inner{
                                    .el-input__icon{
                                        font-size: 20px;
                                    }
                                }
                            }
                        }
                        // 发送按钮
                        .el-input-group__append{
                            background-color: #49B1F5;
                            color: #fff;
                            padding: 0;
                            &:hover{
                                background-color: #66BDF7;
                            }
                            .sendCode{
                                height:50px;
                                line-height: 50px;
                                padding: 0 20px;
                                user-select: none;
                                cursor: url(../../../assets/cursor/link.cur),pointer;
                            }
                            .disabled{
                                cursor:not-allowed;
                            }
                        }
                    }
                    // 登录按钮
                    .loginBtn{
                        box-sizing: border-box;
                        margin: 0 40px;
                        text-align: center;
                        line-height: 50px;
                        height: 50px;
                        font-size: 20px;
                        background-color: #409EFF;
                        color: #fff;
                        border-radius: 8px;
                        cursor: url(../../../assets/cursor/link.cur),pointer;
                        &:hover{
                            background-color: #79bbff;
                        }
                    }
                    // 立即注册 忘记密码
                    .textBox{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 20px 0;
                        height: 50px;
                        font-size: 18px;
                        .textItem{
                            cursor: url(../../../assets/cursor/link.cur),pointer;
                        }
                    }
                    // 社交账号登录
                    .socialBox{
                        .socialTitle{
                            color: #b5b5b5;;
                            text-align: center;
                            &::before,&::after{
                                content: "";
                                display: inline-block;
                                background-color: #d8d8d8;
                                width: 60px;
                                height: 1px;
                                margin: 0 12px;
                                vertical-align: middle;
                            }
                        }
                        .svgBox{
                            margin-top: 20px;
                            display: flex;
                            justify-content: center;
                            .svgIcon{
                                padding: 0 10px;
                                width: 50px;
                                height: 50px;
                                cursor: url(../../../assets/cursor/link.cur),pointer;
                            }
                        }
                    }
                }
            }
        }
    }


    @media (max-width: 700px) {
        .login_container{
            ::v-deep(){ 
                .loginDialog{
                    width: 60%;
                    .el-dialog__header{
                        .el-dialog__headerbtn{
                            font-size: 20px;
                        }
                    }
                    .el-dialog__body{
                        padding: 30px 15px 15px;
                        .formInput{
                            height: 25px;
                            .el-input__wrapper{
                                .el-input__inner{
                                    height: 20px;
                                }
                                .el-input__suffix{
                                    .el-input__suffix-inner{
                                        .el-input__icon{
                                            font-size: 16px;
                                        }
                                    }
                                }
                            }
                        }
                        // 登录按钮
                        .loginBtn{
                            border-radius: 5px;
                            line-height: 30px;
                            margin: 0 20px;
                            height: 30px;
                            font-size: 12px;
                        }
                        // 立即注册 忘记密码
                        .textBox{
                            padding: 5px 0;
                            height: 40px;
                            font-size: 10px;
                        }
                        // 社交账号登录
                        .socialBox{
                            .socialTitle{
                                &::before,&::after{
                                    width: 40px;
                                    margin: 0 8px;
                                }
                            }
                            .svgBox{
                                margin-top: 10px;
                                .svgIcon{
                                    padding: 0 10px;
                                    width: 30px;
                                    height: 30px;
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
</style>

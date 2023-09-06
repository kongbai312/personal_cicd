<template>
    <div class="user_container">
        <!-- 顶部 -->
        <pr_headerImg :right="true" :img="imgUrl" :titleArr="['个','人','中','心']"></pr_headerImg>
        <!-- 内容 -->
        <div class="user_content">
            <el-card shadow="hover" class="userCard">
                <template #header>
                    <div class="headerImg_box">
                        <img 
                            class="headerImg" 
                            :src="userDetailInfo.head_url ==='' ? defaultAvatar : userDetailInfo.head_url" 
                            alt=""
                        >
                    </div>
                </template>
                <template #default>
                    <div class="infoBox">
                        <el-form ref="formRef" :model="userDetailInfo" :rules="rules" require-asterisk-position="right">
                            <el-form-item label="昵称" prop="name" class="formItem">
                                <el-input 
                                    class="formInput" 
                                    v-model="userDetailInfo.name"
                                    maxlength="8"
                                    placeholder="你的昵称"
                                    show-word-limit 
                                />
                            </el-form-item>
                            <el-form-item label="简介" prop="blurb" class="formItem">
                                <el-input 
                                    class="formInput" 
                                    v-model="userDetailInfo.blurb"
                                    maxlength="30"
                                    placeholder="你的简介"
                                    show-word-limit
                                />
                            </el-form-item>
                            <el-form-item label="生日" prop="birthday" class="formItem">
                                <!-- element-plus中文包 -->
                                <el-config-provider :locale="zhCn">
                                    <el-date-picker
                                        v-model="userDetailInfo.birthday"
                                        class="formDatePicker" 
                                        placeholder="你的生日"
                                        value-format="YYYY-MM-DD"
                                        :default-value="defaultTime"
                                        :disabled-date="disabledDate"
                                    />
                                </el-config-provider>
                            </el-form-item>
                            <el-form-item label="头像" prop="head_url" class="formItem">
                                <el-cascader
                                    v-model="userDetailInfo['head_url']"
                                    :options="headerUrlOptions"
                                    :props="headerUrlProp"
                                    placeholder="选择你的头像"
                                />
                            </el-form-item>
                            <el-form-item label="更新" prop="updatedAt" class="formItem">
                                <el-input 
                                    class="formInput" 
                                    v-model="userDetailInfo.updatedAt"
                                    disabled
                                />
                            </el-form-item>
                        </el-form>
                        <div class="btnBox">
                            <div class="btnItem" @click="submit">修改</div>
                        </div>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { getDetailUserInfoApi } from '@/api/user_api';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores';
import type { UserDetailInfoType } from '@/types/user';
import { setDetailUserInfoApi } from '@/api/user_api';
import moment from '@/utils/moment';
//头像
import AvatarJson from '@/assets/json/avatarList.json';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

    //背景大图
    let imgUrl = 'https://pic.imgdb.cn/item/64ef74f9661c6c8e54cb552f.jpg'

    //当前头像
    let defaultAvatar = 'https://pic.imgdb.cn/item/64f83419661c6c8e54f32ead.png'

    //引入router 
    const router = useRouter()

    //引入store
    const store = useUserStore()

    //默认时间
    const defaultTime = ref(new Date())

    //头像
    const headerUrlOptions = ref(AvatarJson)
    
    //表单
    let formRef = ref()

    //头像选择框配置项
    const headerUrlProp = {
        emitPath : false,   //设置选项只返回值
    }

    //用户详情信息
    let userDetailInfo = ref<UserDetailInfoType>({
        birthday : '',
        blurb : '',
        name : '',
        updatedAt : '',
        "head_url" : ''
    })

    //校验规则
    let rules = reactive({
        name : [
            { min: 0, max: 8, message: '昵称长度为0~8', trigger: 'blur' }
        ],
        blurb : [
            { min: 0, max: 30, message: '简介长度为0~30', trigger: 'blur' }
        ],
    })

    //获取用户详情信息
    const getDetailUserInfo = async () => {
        //发送请求获取用户详情
        let result = await getDetailUserInfoApi()
        if( result.code === 200 ){//获取用户信息成功
            //如果birthday的初始值为0001-01-01，说明没有设置生日，初始化当天的日期
            if(result.result.birthday === '0001-01-01')  result.result.birthday = ''
            userDetailInfo.value = result.result
            //存储到store
            store.setUserDetailInfo( {...result.result} )
        }
        else if( result.code === 401 ){
            // 提示
            ElMessage.info( result.message + ',请重新登录' )
            // 返回主页
            router.push('/personal')
            // 弹出登录框
            store.setShowLoginDialog(true)
        }
    }

    onMounted(() => {
        getDetailUserInfo()
    })

    //检查本地详情信息是否和表格相同
    const checkObjSame = ( obj1 : Record<string, UserDetailInfoType> , obj2 : Record<string, UserDetailInfoType>) => {
        let isSame : boolean = true
        Object.keys(obj1).forEach(( key ) => {
            if(obj1[key] !== obj2[key]){//如果有一项不同,则两个对象不一样
                isSame = false
            }
        })
        return isSame
    }

    //提交个人信息
    const submit = () => {
        formRef.value.validate( async ( valid : boolean) => {
            if(valid){//校验通过
                //检验与上次提交内容是否相同
                let isSame = checkObjSame(store.userInfo.detail as Record<string, UserDetailInfoType>,userDetailInfo.value as Record<string, UserDetailInfoType>)
                if(isSame){//如果为true，则和上次提交相同
                    //提示
                    ElMessage.info('修改失败，与上次信息相同')
                }
                else{//可以提交
                    //提交时，获取当前时间
                    let time = moment().format('YYYY-MM-DD HH:mm:ss') 
                    //赋值表单
                    userDetailInfo.value.updatedAt = time
                    //发送请求
                    let result = await setDetailUserInfoApi(userDetailInfo.value)
                    console.log(result)
                    //提示
                    result.code === 200 ? ElMessage.success('保存成功') : ElMessage.error(result.message)
                    //存储到本地
                    if(result.code === 200) store.setUserDetailInfo( {...result.result} )
                }
            }
        })
    }

    //禁止选择日期
    const disabledDate = ( time : Date = new Date()) => {
        // getTime() 用来获取当前日期对象的时间戳
        return time.getTime() > Date.now();
    }

</script>

<style lang="scss" scoped>
    .user_container{
        user-select: none;
        // 内容
        .user_content{
            padding: 30px 50px;
            .userCard{
                border-radius: 20px;
                // 头像
                .headerImg_box{
                    display: flex;
                    justify-content: center;
                    .headerImg{
                        width: 300px;
                        height: 300px;
                        border-radius: 50%;
                        object-fit: fill;
                    }
                }

                //信息
                .infoBox{
                    box-sizing: border-box;
                    padding: 20px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    // 一个表单项
                    .formItem{
                        margin-bottom: 30px;
                        :deep(.el-form-item__label){
                            height: 50px;
                            line-height: 50px;
                            font-size: 22px;
                        }
                        .formInput{
                            width: 600px;
                            height: 50px;
                        }
                        ::v-deep(){
                            .formDatePicker{
                                width: 600px;
                                height: 50px;
                                .el-input__wrapper{
                                    box-sizing: border-box;
                                    width: 600px;
                                    height: 50px;
                                }
                            }
                            //下拉选项
                            .el-form-item__content{
                                .el-cascader{
                                    .el-input{
                                        width: 600px;
                                        height: 50px;
                                    }
                                }
                            }
                        }   
                    }
                    //按钮
                    .btnBox{
                        .btnItem{
                            border-radius: 10px;
                            text-align: center;
                            height: 50px;
                            line-height: 50px;
                            font-size: 24px;
                            width: 200px;
                            background-color: var(--sw-user-btn-bg-color);
                            color: var(--sw-user-btn-color);
                            cursor: url(../../assets/cursor/link.cur),pointer;
                            &:hover{
                                background-color: var(--sw-user-btn-hover);
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 700px){
        .user_container{
            .user_content{
                .userCard{
                    border-radius: 10px;
                    // 头像
                    .headerImg_box{
                        .headerImg{
                            width: 150px;
                            height: 150px;
                        }
                    }
                    //信息
                    .infoBox{
                        padding: 15px 0;
                        // 一个表单项
                        .formItem{
                            margin-bottom: 20px;
                            :deep(.el-form-item__label){
                                height: 30px;
                                line-height: 30px;
                                font-size: 18px;
                            }
                            .formInput{
                                width: 200px;
                                height: 30px;
                                ::v-deep(){
                                    .el-input__wrapper{
                                        border-radius: 5px;
                                        padding: 1px 5px;
                                        .el-input__inner{
                                            height: 20px;
                                            font-size: 10px;
                                        }
                                    }
                                }
                            }
                            ::v-deep(){
                                .formDatePicker{
                                    width: 200px;
                                    height: 30px;
                                    .el-input__wrapper{
                                        border-radius: 5px;
                                        padding: 1px 5px;
                                        width: 200px;
                                        height: 30px;
                                        //左日历icon
                                        .el-input__prefix{
                                            .el-input__prefix-inner{
                                                .el-icon{
                                                    font-size: 10px;
                                                }
                                            }
                                        }
                                        .el-input__inner{
                                            height: 20px;
                                            font-size: 9px;
                                        }
                                    }
                                }
                                //下拉选项
                                .el-form-item__content{
                                    .el-cascader{
                                        .el-input{
                                            width: 200px;
                                            height: 30px;
                                            .el-input__wrapper{
                                                border-radius: 5px;
                                                .el-input__inner{
                                                    height: 20px;
                                                    font-size: 9px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

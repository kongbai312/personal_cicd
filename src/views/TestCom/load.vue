<template>
  <div class="load_container">
    <!-- 按钮区 -->
    <div class="load_btnBox">
        <el-select class="load_select" placeholder="上传方式" v-model="loadMethod" size="large">
            <el-option
                v-for="item in SelectOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <div class="btn_load" @click="clickUpload">上传</div>
    </div>
    <!-- 上传区 -->
    <div class="loadBox">
        <el-upload
            ref="elUploadRef"
            :limit="5"
            :class="fileSizeInfo.class"
            drag
            multiple
            list-type="picture"
            :before-upload="beforeAvatarUpload"
            :on-success="handleAvatarSuccess"
            :http-request="uploadImg"
            :auto-upload="false"
            :on-exceed="fileExceed"
            :on-preview="clickUploadedFile"
        >
            <template v-if="loadMethod === 'imgLoad'">
                <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
                <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
            </template>
            <template v-if="loadMethod === 'excelLoad'">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                将文件拖动到区域<em>点击区域上传</em>
                </div>
            </template>
            <template #tip>
            <div class="el-upload__tip">
                {{fileSizeInfo.text}}
            </div>
            </template>
        </el-upload>
    </div>
    <!-- 解析区 -->
  </div>
</template>

<script setup lang='ts'>
import { UploadFilled, Plus } from '@element-plus/icons-vue';
import { uploadImgApi } from '@/api/test_api';
import useClipboard from 'vue-clipboard3';
// @ts-ignore
import type { UploadProps,UploadRawFile,UploadFile } from 'element-plus';

    //上传方式
    let loadMethod = ref('imgLoad')

    //上传的文件数据
    let loadData = ref()

    //上传组件ref
    let elUploadRef = ref()

    //图片地址
    const imageUrl = ref<{uid:string,url:string}[]>([])

    //选项
    let SelectOptions = [
        {
            label : '头像上传',
            value : 'imgLoad',
        },
        {
            label : 'Excel上传',
            value : 'excelLoad'
        }
    ]

    //文件大小限制
    let fileSizeInfo  = computed(() => {
        if(loadMethod.value === 'imgLoad'){
            return {
                text:"图片大小小于 1MB",
                class:"avatar_uploader",
                listType : 'picture'
            }
        }
        else if(loadMethod.value === 'excelLoad'){
            return {
                text:"excel文件大小小于 2MB",
                class:"file_uploader",
                listType : 'text'
            }
        }
        else {
            return {}
        }
    })
    
    // 上传前的函数
    const beforeAvatarUpload: UploadProps['beforeUpload'] = ( rawFile : UploadRawFile) => {
        //图片上传
        if(loadMethod.value === "imgLoad"){
            if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png' ) {
                ElMessage.error('图片必须为jpg格式或者png格式')
                return false
            } else if (rawFile.size / 1024 / 1024 > 1) {
                ElMessage.error('图片的大小不能超过1MB')
                return false
            }
            //创建FormData实例对象
            loadData.value = new FormData()
            //什么字段由后台定义
            loadData.value.append('photo',rawFile)
            return true
        }
    }

    //上传文件到服务器
    const uploadImg = async () => {
        try {
            let result = await uploadImgApi(loadData.value)
            return result
        } catch (error) {
            return Promise.reject('上传失败:' + error)
        }
    }

    //上传成功的函数
    const handleAvatarSuccess: UploadProps['onSuccess'] = (response :any,uploadFile : UploadFile) =>{
        //返回图片地址在response.data.photo
        // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
        imageUrl.value.push({
            uid:uploadFile.uid,
            url:response.data.photo
        })
        ElMessage.success('上传成功')
    }

    //点击上传
    const clickUpload = () => {
        //调用组件方法
        elUploadRef.value!.submit()
    }

    //超出文件最大个数
    const fileExceed = () => {
        ElMessage.info('文件不能超过5个')
    }

    //引入复制到剪切板的函数
    const { toClipboard } = useClipboard()
    //点击文件列表中已上传的文件时的函数
    const clickUploadedFile = async(uploadFile: UploadFile) => {
        try {
            // 找出上传成功的文件
            let currentFile = imageUrl.value.find(item => item.uid === uploadFile.uid)
            //复制上传返回的url
            await toClipboard(currentFile!.url)
            ElMessage.success('已复制图片地址到剪贴板')
        } catch (error) {
            ElMessage.error('当前浏览器不兼容')
        }
    }

    onUpdated(()=>{
        // console.log(loadMethod.value)
    })
</script>

<style lang="scss" scoped>
    .load_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 100px;
        // 按钮区
        .load_btnBox{
            height: 60px;
            width: 500px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .btn_load{
                padding: 20px 30px;
                border-radius: 10px;
                background-color: #409EFF;
                color: #fff;
                cursor: pointer;
                font-size: 18px;
                &:hover{
                    background-color: #79bbff;
                }
            }
        }
        // 上传区
        .loadBox{
            margin-top: 50px;
            .avatar_uploader{
                height: 400px;
                width: 400px;
                ::v-deep(){
                    .el-upload-dragger{
                        height: 400px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .avatar{
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
            .file_uploader{
                height: 240px;
                width: 800px;
                ::v-deep(){
                    .el-upload-dragger{
                        height: 240px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
</style>

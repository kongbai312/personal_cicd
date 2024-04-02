<template>
  <div class="resume_container">
    <div class="resumeItem" @click="downResume">下载</div>
    <div class="resumeItem" @click="previewResume">在线预览</div>
  </div>
</template>

<script setup lang='ts'>
import ResumePdf from '@/assets/resume/朱博艺-前端开发工程师-13760171072.pdf';
   // 在组件中触发全局方法弹出弹窗
const { showPopup } = inject('globalMethods') as any;

//简历下载
const downResume = async () => {
  showPopup().warn('即将下载作者的简历')
  //文件名
  let fileName = '朱博艺-前端开发工程师-13760171072.pdf'
  const link = document.createElement('a');
  link.href = ResumePdf
  link.setAttribute('download', fileName);
  link.click();
  //释放url
  window.URL.revokeObjectURL(link.href)
}

//简历点击
const previewResume = async () => {
    // 在线预览地址
    let ResumeUrl = 'https://docs.qq.com/pdf/DR29EaFRaVmtMeXBS';
    //打开
    window.open(ResumeUrl)
}
</script>

<style lang="scss" scoped>
    .resume_container{
        width: 100vw;
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .resumeItem{
            box-sizing: border-box;
            border: 1px solid #a0cfff;
            padding: 40px 80px;
            border-radius: 30px;
            margin-bottom: 60px;
            color: #409eff;
            background-color: #ecf5ff;
            cursor: pointer;
            &:hover{
                color: #ffffff;
                background-color: #409eff;
                border: 1px solid #409eff;
            }
        }
    }

    @media (max-width : 992px) {
        .resume_container{
            .resumeItem{
                padding: 20px 40px;
                border-radius: 15px;
                margin-bottom: 40px;
            }
        }
    }
</style>

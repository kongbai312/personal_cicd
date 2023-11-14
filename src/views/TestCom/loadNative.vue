<template>
  <div class="loadNative_container">
    <!-- 拖拽上传区 -->
    <div class="drop_container" 
        @drop.prevent="dropEvent" 
        @dragenter.prevent="preventEvent" 
        @dragover="preventEvent"
    >
        <input ref="inputRef" multiple type="file" class="fileInput" @change="inputClick">
        <span class="text">将文件拖动到此处或点击按钮上传</span>
        <button class="uploadBtn" @click="uploadBtnClick">上传</button>
    </div>
    <!-- 数据渲染区 -->
    <button class="exportBtn" @click="exportBtnClick">导出Excel</button>
    <el-table border :data="tableData" stripe style="width: 80%;margin-top: 30px;">
        <el-table-column v-for="header in tableHeadersList" :prop="header" :label="header" />
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import * as XLSX from 'xlsx';
    //传入的校验方法
    const emit = defineEmits<{
        (event:'beforeUpload',data : any) : Boolean
    }>()

    //input实例对象
    let inputRef = ref()

    //是否正在上传
    let isUpload = ref(false)

    //限制最大上传数量
    const limitCount = 2

    //所需要的文件类型
    const fileType = ['.xlsx','.xls']

    //阻止默认事件
    const preventEvent = (e : any) => {
        e.preventDefault()
    }

    //判断是否是所需文件结尾文件
    const isFileType = ( name : string ) => {
        //是否在所需文件
        let isType = false
        for(let type of fileType){
            if( name.trim().endsWith(type) ){
                isType = true
                break
            }
        }
        return isType
    }

    //文件校验
    const fileCheck = ( rawFile : any ) => {
        //文件数量限制
        if(rawFile.length > limitCount){
            ElMessage.info('文件超过最大上传数量')
            return false
        }
        //文件类型判断
        for(let file of rawFile){
            //存在不是所需类型
            if(!isFileType(file.name)){
                //拼接数组成字符串来提示类型
                let fileTypeText = fileType.join('、')
                ElMessage.info(`文件格式必须为${fileTypeText}。`)
                return false
            }
        }
        return true
    }

    //拖拽放下文件
    const dropEvent = (e :any) => {
        //文件数组
        let fileList = e.dataTransfer.files
        //文件校验
        if(!fileCheck(fileList)){//校验失败
            return
        }
        //上传文件
        upload(fileList)
    }

    //上传
    const upload = ( rawList : any ) => {
        //设置这个可以允许重复上传文件
        inputRef.value.value = null
        //说明没有传入校验
        if(emit('beforeUpload',rawList) === undefined){
            //直接读取文件
            renderData(rawList)
        }
        else{//传入了校验
            //调用校验方法
            let isType = emit('beforeUpload',rawList)
            //校验失败
            if(!isType) return
            //读取文件
            renderData(rawList)
        }
    }

    //file类型的Input点击
    const inputClick = (e : any) => {
        //文件数组 e.target.files的类型为fileList不是数组，得先转换Array.from(e.target.files)
        let fileList = [...e.target.files]
        //文件校验
        if(!fileCheck(fileList)){//校验失败
            return
        }
        //上传文件
        upload(fileList)
    }

    //上传按钮点击
    const uploadBtnClick = () => {
        inputRef.value.click()
    }


    //获取excel表头数据
    const getHeaderRow = (sheet : any) => {
        //定义数组用于存放表头数据
        const headers = []
        //读取sheet的单元格数据
        const range = XLSX.utils.decode_range(sheet['!ref'])
        let C
        const R = range.s.r
        /* 从第一行开始 */
        for (C = range.s.c; C <= range.e.c; ++C) { /* 遍历范围内的每一列 */
            const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
            //查找第一行中的单元格 C表示为第0 + C 列 
            let hdr = '该行未设置 ' + C // <-- 替换为所需的默认值
            if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
            headers.push(hdr)
        }
        return headers
    }

    //读取数据
    const renderData = ( rawList : any ) => {
        //改为正在上传读取状态
        isUpload.value = true
        for(let file of rawList){
            
            //文件读取器
            const reader = new FileReader()
            //开启onload监听,读取成功后执行
            reader.onload = ( e : any ) => {
                //文件流数据
                let data = e.target.result
                /*
                //这里可以文档流上传数据到后端,或者从可以拿到file对象的地方上传数据到后端
                const fd = new FormData()
                // 说明：formData对象的key属性值后台定义
                fd.append('file', data)
                //发送请求
                */
                //通过XLSX插件读取数据
                const workbook = XLSX.read(data, { type: 'binary', cellDates: true })
                //第一个excel里面的表格名
                const fisrtSheetName = workbook.SheetNames[0]
                //获取第一个表格数据
                const workSheet = workbook.Sheets[fisrtSheetName]
                //获取header
                const headers = getHeaderRow(workSheet)
                // console.log(headers)
                //获取excel数据的内容
                const results = XLSX.utils.sheet_to_json(workSheet)
                // console.log(results)
                //处理数据
                handleData(results,headers)
                //上传读取完成
                isUpload.value = false
            }
            //读取文件
            reader.readAsArrayBuffer(file)
        }
    }

    //表格数据
    let tableData = ref([] as any)
    //表头
    let tableHeadersList = ref(new Set())
    //数据处理
    const handleData = ( data : any , tableHeaders :string[]) => {
        //数据放入数组
        tableData.value.push(...data)
        //表头添加，set数据结构是唯一的
        tableHeaders.forEach( ( header ) => {
            tableHeadersList.value.add(header)
        });
        //这里可以通过处理完数据格式，发送请求
    }

    //导出excel
    const exportBtnClick = () => {

    }

</script>

<style lang="scss" scoped>
    .loadNative_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        .drop_container{
            box-sizing: border-box;
            height: 400px;
            width: 600px;
            margin-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 5px #999 dashed;
            .fileInput{
                display: none;
            }
            .text{
                color: #999;
            }
            .uploadBtn{
                margin-left: 5px;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                background-color: #409EFF;
                color: #fff;
                cursor: pointer;
                &:hover{
                    background-color: #79bbff;
                }
            }
        }

        .exportBtn{
            margin-top: 20px;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #409EFF;
            color: #fff;
            cursor: pointer;
            &:hover{
                background-color: #79bbff;
            }
        }
    }
    
</style>

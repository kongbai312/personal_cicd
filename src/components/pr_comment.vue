<template>
  <div class="prComment_container">
    <!-- 头部标题 -->
    <div class="comment_header">
        <i class="iconfont icon-pinglun1"></i>
        <span class="text">评论</span>
    </div>
    <!-- 评论 -->
    <div class="comment_content">
        <img class="avatar" :src="avatar" alt="">
        <el-input
            class="input"
            v-model="text"
            rows="3"
            type="textarea"
            placeholder="评论区很精彩，期待你的评论！"
        />
        <div class="content_button" @click="setComment">评论</div>
    </div>
    <!-- 表情 -->
    <div class="emoji">
        <el-popover 
            width="300px" 
            placement="bottom" 
            trigger="click" 
            popper-class="emojiPopover" 
            :teleported="false"
            v-model:visible="showPopover"
        >
            <template #reference>
                <i class="iconfont icon-biaoqing"></i>
            </template>
            <el-tabs type="border-card" tab-position="bottom" class="elTabs">
                <el-tab-pane :label="keyItem" v-for="(emojiItem,keyItem) in emojiJson" :key="keyItem">
                    <el-scrollbar class="elTab">
                        <div @click="emojiClick(key,emoji)" class="elItem" v-for="(emoji , key) in emojiItem" :key="key">
                            <img class="emojiItem" :src="emoji" alt="">
                        </div>
                    </el-scrollbar>
                </el-tab-pane>
            </el-tabs>
        </el-popover>
    </div>
    <!-- 评论区 -->
    <div class="comments">
        <div class="commentItem" v-for="( item , index ) in commentsList" :key="index">
            <img class="commentItem_avatar" :src="item.avatar">
            <div class="commentItem_content">
                <div class="name">{{ item.name }}</div>
                <div class="text" v-html="renderingText(item.text)"></div>
                <div class="time">
                    <span class="timeText">{{ item.time }}</span>
                    <i class="iconfont icon-dianzan"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useUserStore , useRelaxStore} from '@/stores';
import emojiJson from '@/assets/json/emoji.json';
import { useRouter } from 'vue-router';
import moment from '@/utils/moment';
import { loginApi } from '@/api/user_api';
import { setCommentApi } from '@/api/relax_api'
import type { SetCommentType } from '@/types/relax'

    //引入store
    const store = useUserStore()

    //引入relaxStore
    const relaxStore = useRelaxStore()

    //引入router
    const router = useRouter()

    //用户信息
    let userInfo = computed(() => {
        return store.userInfo
    })
    
    //用户头像
    let avatar = computed(() => {
        return store.userInfo.detail?.head_url === undefined ? 'https://pic.imgdb.cn/item/64f83419661c6c8e54f32ead.png' : store.userInfo.detail?.head_url
    })

    //输入框内容
    let text = ref('')

    //是否显示弹窗
    const showPopover = ref(false)

    //表情点击
    const emojiClick = ( key : string , value : string) => {
        text.value = text.value + `[${key}]`
        //关闭弹窗
        showPopover.value = false
    }

    //评论数据类型
    type CommentType = {
        name : string,
        avatar: string,
        text : string,
        time : string
    }

    //评论内容数组
    let commentsList = ref<CommentType[]>([])

    //发送请求获取评论token
    const getCommentToken = async () => {
        //发送请求获取token
        let result : any = await loginApi({
            account : 'osyvhps79@163.com',
            password : 'AAA123321'
        })
        if(result.code === 200){//登录成功
            //存储评论token
            relaxStore.setCommentToken( result.result.token )
        }
        else{
            ElMessage.error(result.message)
        }
    }

    //通过请求，发送评论
    const setCommentFn = async ( obj : SetCommentType ) => {
        //发送评论 所需的参数
        let commentInfoParams = [
            obj.name,
            obj.avatar,
            obj.time
        ]
        //利用所需账号发送请求，发送评论
        let result : any = await setCommentApi(commentInfoParams,obj.text)
        if(result.code === 200){
            ElMessage.success('评论成功')
            //获取当前时间戳并存储
            relaxStore.setCommentTime(new Date().getTime())
            //刷新当前评论
            
        }
        else{
            ElMessage.error(result.message)
        }
    }

    //发送评论按钮功能
    const setComment = async () => {
        // 如果用户登录了
        if( userInfo.value.account !== undefined ){
            //创建评论对象
            let obj = {
                name:'',
                avatar:'',
                text:'',
                time:''
            }
            //判断是否设置了用户名
            let haveName = userInfo.value.detail?.name !== ''
            //是否设置了用户名
            !haveName ? obj.name = userInfo.value.position?.ip as string : obj.name = userInfo.value.detail?.name as string
            //存储当前用户头像
            obj.avatar = avatar.value
            //获取当前输入内容
            obj.text = text.value
            //获取当前时间
            obj.time = moment().format('YYYY-MM-DD HH:mm:ss') 
            //通过请求发送评论
            if( relaxStore.commentToken === '' ){//如果本地没有评论用的token
                //获取评论token并存储
                await getCommentToken()
            }
            //获取当前时间戳
            let nowTime = new Date().getTime()
            //获取上次评论时间戳
            let lastTime = relaxStore.commentTime
            //如果上次评论和这次评论大于1天
            if( nowTime - lastTime >= 24*60*60*1000 ){
                //重新发送请求获取评论Token
                await getCommentToken()
            }
            //通过请求，发送评论
            await setCommentFn(obj)
            //清空输入框
            text.value = ""
        }
        else{
            //未登录提示
            ElMessage.info('您还未登录，请先登录！')
            //跳转登录
            router.push('/personal')
            //弹窗
            store.setShowLoginDialog(true)
        }
    }

    //评论表情渲染
    const renderingText = ( comment : string ) => {
        // 获取中括号的内容
        let reg = new RegExp(/\[(.+?)\]/g)
        // 根据正则提取中括号内容进入数组
        let commentArr = comment.match(reg)
        // 数据遍历提取对应的表情地址
        commentArr?.forEach(( arrItem ) => {
            // 去掉中括号,得用去除第一和最后一个字符串的方法，防止中括号嵌套全部去除掉
            // let arrItemNo = arrItem.replace(/\[|]/g,'')
            let arrItemNo = arrItem.slice(1,arrItem.length -1 )
            // 拆分键值对
            let itemArr = arrItemNo.split('-')
            // 如果拆分的数组长度为2 才进行查询
            if( itemArr.length === 2){
                // 查Json是否有对应数据
                if( (emojiJson as Record<string, Record<string,string>>)[itemArr[0]][arrItemNo] !== undefined ){
                    //存在则说明在表情库里，则进行替换
                    let imgText = `<img class="imgEmojiItem" src="${(emojiJson as Record<string, Record<string,string>>)[itemArr[0]][arrItemNo]}" />`
                    comment = comment.replace(arrItem , imgText) 
                
                }
            }
        })
        
        return comment
    }

    onMounted(()=>{
        renderingText('哈哈哈哈哈哈哈[TV-牛牛]，[TV-坏笑],[[123]][')
    })
</script>

<style lang="scss" scoped>
    .prComment_container{
        // 头部
        .comment_header{
            display: flex;
            align-items: center;
            height: 80px;
            
            .iconfont{
                font-size: 30px;
                font-weight: 700;
            }
            .text{
                font-size: 30px;
                font-weight: 700;
                margin-left: 10px;
            }
        }
        // 内容
        .comment_content{
            height: 100px;
            display: flex;
            align-items: center;
            
            .avatar{
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
            }
            .input{
                height: 100%;
                margin: 0 20px;
                font-size: 20px;
            }
            .content_button{
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                padding: 10px 20px;
                width: 120px;
                background-color: #ED9ABB;
                border-radius: 20px;
                font-size: 24px;
                color: #fff;
                height: 100%;
                cursor: url(../assets/cursor/link.cur),pointer;
            }
        }
        // 表情
        .emoji{
            box-sizing: border-box;
            display: inline-block;
            padding-left: 20px;
            margin-top: 30px;
            margin-left: 100px;
            .iconfont{
                font-size: 30px;
            }
            ::v-deep(){
                // 表情弹层
                .emojiPopover{
                    padding: 0;
                    .elTabs{
                        border: none;
                        .el-tabs__content{
                            padding: 0;
                        }
                        //滚动条
                        .elTab{
                            height: 200px;
                            .el-scrollbar__wrap{
                                .el-scrollbar__view{
                                    padding: 15px;
                                    display: grid;
                                    grid-template-columns: repeat(auto-fill, minmax( 50px , 1fr ));
                                    grid-gap: 10px 20px;
                                    grid-template-rows: repeat(auto-fill , 50px);
                                    .elItem{
                                        width: 50px;
                                        height: 50px;
                                        cursor: url(../assets/cursor/link.cur),pointer;
                                        &:hover{
                                            background-color: #e3e5e7;
                                            border-radius: 10px;
                                        }
                                        .emojiItem{
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                        }
                                    }
                                }
                            }
                        }
                        // 表情包标题
                        .el-tabs__header{
                            .el-tabs__nav-wrap{
                                .el-tabs__item{
                                    user-select: none;
                                }
                            }
                        }
                    }
                }
            }
        }
        //评论区
        .comments{
            padding: 100px 0;
            .commentItem{
                padding: 30px 0;
                display: flex;
                border-bottom: 1px solid rgb(153, 153, 153,0.2);
                .commentItem_avatar{
                    height: 100px;
                    width: 100px;
                    object-fit: cover;
                    border-radius: 20px;
                }
                .commentItem_content{
                    margin-left: 20px;
                    .name{
                        font-size: 22px;
                        font-weight: 700;
                    }
                    .text{
                        font-size: 20px;
                        margin: 20px 0;
                        ::v-deep(){
                            .imgEmojiItem{
                                width: 60px;
                                height: 60px;
                                object-fit: cover;
                            }
                        }
                        
                    }
                    .time{
                        .timeText{
                            font-size: 20px;
                        }
                        .iconfont{
                            margin-left: 20px;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 600px) {
        .prComment_container{
            // 头部
            .comment_header{
                min-height: 50px;
            }
            // 内容
            .comment_content{
                min-height: 60px;
                .content_button{
                    min-width: 60px;
                }
            }

            //评论区
            .comments{
                .commentItem{
                    .commentItem_avatar{
                        min-height: 60px;
                        min-width: 60px;
                    }
                }
            }
        }
    }

    @media (min-width: 600px) and (max-width: 900px) {
        .prComment_container{
            // 头部
            .comment_header{
                .iconfont{
                    font-size: 18px;
                }
                .text{
                    font-size: 18px;
                }
            }
            // 表情
            .emoji{
                margin-left: 60px;
                ::v-deep(){
                    .emojiPopover{
                        left: 15px !important;
                        // 箭头
                        .el-popper__arrow{
                            width: 8px;
                            height: 8px;
                            top: -4px;
                            &::before{
                                width: 8px;
                                height: 8px;
                            }
                        }
                        .elTabs{
                            // 滚动条
                            .elTab{
                                height: 200px;
                                .el-scrollbar__wrap{
                                    .el-scrollbar__view{
                                        padding: 15px;
                                        display: grid;
                                        grid-template-columns: repeat(auto-fill, minmax( 50px , 1fr ));
                                        grid-gap: 10px 20px;
                                        grid-template-rows: repeat(auto-fill , 50px);
                                        .elItem{
                                            width: 50px;
                                            height: 50px;
                                            .emojiItem{
                                                width: 100%;
                                                height: 100%;
                                                object-fit: cover;
                                            }
                                        }
                                    }
                                }
                            }
                            // 表情包标题
                            .el-tabs__header{
                                .el-tabs__nav-wrap{
                                    padding: 0 10px;
                                    // 左,右箭头
                                    .el-tabs__nav-prev,.el-tabs__nav-next{
                                        height: 100%;
                                        line-height: 100%;
                                        font-size: 14px;
                                        width: 10px;
                                        .el-icon{
                                            height: 100%;
                                            line-height: 100%;
                                            width: 10px;
                                        }
                                    }
                                    .el-tabs__item{
                                        font-size: 16px;
                                        padding: 15px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            // 评论区
            .comments{
                .commentItem{
                    .commentItem_content{
                        .text{
                            ::v-deep(){
                                .imgEmojiItem{
                                    width: 40px;
                                    height: 40px;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        .prComment_container{
            // 头部
            .comment_header{
                height: 50px;
                .iconfont{
                    font-size: 16px;
                }
                .text{
                    font-size: 16px;
                }
            }
            // 内容
            .comment_content{
                height: 50px;
                .input{
                    font-size: 11px;
                }
                .content_button{
                    width: 70px;
                    font-size: 12px;
                }
            }
            // 表情
            .emoji{
                margin-left: 50px;
                .iconfont{
                    font-size: 16px;
                }
                ::v-deep(){
                    .emojiPopover{
                        left: 10px !important;
                        // 箭头
                        .el-popper__arrow{
                            width: 8px;
                            height: 8px;
                            top: -4px;
                            &::before{
                                width: 8px;
                                height: 8px;
                            }
                        }
                        .elTabs{
                            // 滚动条
                            .elTab{
                                height: 200px;
                                .el-scrollbar__wrap{
                                    .el-scrollbar__view{
                                        padding: 15px;
                                        display: grid;
                                        grid-template-columns: repeat(auto-fill, minmax( 50px , 1fr ));
                                        grid-gap: 10px 20px;
                                        grid-template-rows: repeat(auto-fill , 50px);
                                        .elItem{
                                            width: 50px;
                                            height: 50px;
                                            .emojiItem{
                                                width: 100%;
                                                height: 100%;
                                                object-fit: cover;
                                            }
                                        }
                                    }
                                }
                            }
                            // 表情包标题
                            .el-tabs__header{
                                .el-tabs__nav-wrap{
                                    padding: 0 10px;
                                    // 左,右箭头
                                    .el-tabs__nav-prev,.el-tabs__nav-next{
                                        height: 100%;
                                        line-height: 100%;
                                        font-size: 14px;
                                        width: 10px;
                                        .el-icon{
                                            height: 100%;
                                            line-height: 100%;
                                            width: 10px;
                                        }
                                    }
                                    .el-tabs__item{
                                        font-size: 14px;
                                        padding: 14px;
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
            //评论区
            .comments{
                .commentItem{
                    padding: 10px 0;
                    .commentItem_avatar{
                        height: 50px;
                        width: 50px;
                    }
                    .commentItem_content{
                        margin-left: 10px;
                        .name{
                            font-size: 14px;
                        }
                        .text{
                            margin: 10px 0;
                            font-size: 14px;
                            ::v-deep(){
                                .imgEmojiItem{
                                    width: 40px;
                                    height: 40px;
                                    object-fit: cover;
                                }
                            }
                        }
                        .time{
                            .timeText{
                                font-size: 10px;
                            }
                            .iconfont{
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
  <div class="leaveword_container">
    <vue-danmaku 
      ref="danmuRef"
      v-model:danmus="danmus" 
      class="danmu_style"
      :top="6" 
      isSuspend
      useSlot
    >
      <template v-slot:dm="{ index, danmu }">
        <div class="danmuItem" :class="{danmuItem_active : index === danmuIndex}">
          <img class="danmuItem_img" :src="danmu.avatar"  />
          <span class="danmuItem_text">{{ danmu.name }}：{{ danmu.text }}</span>
        </div>
      </template>
    </vue-danmaku>

    <!-- 发送留言 -->
    <div class="leaveword_box">
      <div class="leaveword_title">留言板</div>
      <div class="leaveword_inputBox">
        <input 
          class="leaveword_input" 
          @keyup.enter="addDanmu" 
          placeholder="留下你的足迹吧！"
          @focus="leavewordInputFocus"
          v-model="danmuText" 
          clearable 
        />
        <div class="leaveword_sent" v-show="show" @click="addDanmu" >发送</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import vueDanmaku from 'vue3-danmaku';
  import { getIp } from '@/utils/getIp';
  import { useUserStore } from '@/stores';
  import { useRandomAvatar } from '@/hooks';
  import { getDanmuApi } from '@/api/mock_api';
  import '@/mock';

  //弹幕
  const danmus = ref()

  //获取弹幕列表
  const getDanmu = async () => {
    let result = await getDanmuApi()
    danmus.value = result.data
    //通过ref播放弹幕
    danmuRef.value.play()
  }
  onMounted(() => {
    getDanmu()
  })

  //input绑定内容
  let danmuText = ref()

  //显示发送按钮
  let show = ref(false)
  
  //获取焦点触发
  const leavewordInputFocus = () => {
    show.value = true
  }

  //引入store
  const store = useUserStore()

  //用户信息
  let userInfo = computed(() => {
    return store.userInfo
  })

  //获取用户信息
  const getUserInfo = async () => {
    if( !store.userInfo.position?.ip ){//如果没有用户信息
      let result = await getIp()
      //存储本地
      store.setUserPosition(result)
    }
  }

  onMounted( async () => {
    await getUserInfo()
  })

  //弹幕展示ref
  let danmuRef = ref()

  //当前插入的弹幕编号
  let danmuIndex = ref()

  // 添加弹幕
  const addDanmu = () => {
    // 添加弹幕
    danmuIndex.value = danmuRef.value.add({
      id: danmus.value.length + 1,
      name:`${userInfo.value.position?.address}用户`,
      text: danmuText.value,
      avatar: useRandomAvatar(2)
    })
    //清空input
    danmuText.value = ''
    //隐藏按钮
    show.value = false
  }
</script>

<style lang="scss" scoped>
  .leaveword_container{
    height: calc( 100vh - 80px );
    background-color: var(--sw-leaveword-bg-color);
    background-image: url('https://pic.imgdb.cn/item/64c4b14a1ddac507cc1f832d.jpg');
    background-size: cover;
    position: relative;
    // 弹幕
    .danmu_style{
      height: calc( 100vh - 80px );
      width: 100vw;
      .danmuItem{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: rgb(114, 95, 119,0.5);
        padding: 10px 20px;
        border-radius: 30px;
        // 用户头像
        .danmuItem_img{
          height: 50px;
          width: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
        //弹幕
        .danmuItem_text{
          color: #fff;
        }
        
        
      }
      //当前激活弹幕
      .danmuItem_active{
        box-sizing: border-box;
        border: 1px solid #FFC3C3;
      }
    }

    // 留言盒子
    .leaveword_box{
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 600px;
      height: 260px;
      //标题
      .leaveword_title{
        display: inline-block;
        font-size: 50px;
      }
      .leaveword_inputBox{
        margin-top: 60px;
        display: flex;
        // 输入
        .leaveword_input{
          box-sizing: border-box;
          height: 80px;
          border: 1px solid #fff;
          outline: none;
          padding: 10px 30px;
          border-radius: 40px;
          color: #eee;
          background-color: transparent;
        }
        // Input的placeholder样式
        input::-webkit-input-placeholder{
          color: #eee;
        }
        // 发送
        .leaveword_sent{
          box-sizing: border-box;
          border: 1px solid #fff;
          padding: 0px 30px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          // font-size: 26px;
          border-radius: 40px;
          color: #eee;
          cursor: url(../../../assets/cursor/link.cur),pointer;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .leaveword_container{
      height: calc( 100vh - 50px );
      .danmu_style{
        height: calc( 100vh - 50px );
        width: 100vw;
        .danmuItem{
          .danmuItem_img{
            min-height: 30px;
            min-width: 30px;
          }
        }
      }
      .leaveword_box{
        .leaveword_title{
          font-size: 26px;
        }
        .leaveword_inputBox{
          .leaveword_input{
            min-height: 30px;
          }
          .leaveword_sent{
            min-height: 30px;
            padding: 0px 5px;
            min-width: 50px;
          }
        }
      }
    }
  }
</style>

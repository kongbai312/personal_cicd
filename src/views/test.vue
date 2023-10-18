<template>
  <div class="a-text">1</div>
  <div class="a-img1">2</div>
  <div class="a-text">3</div>
  <div class="a-img2">4</div>
  <div class="a-text">5</div>
  <div class="a-img3">6</div>
  <div class="a-text">7</div>
</template>

<script setup lang="ts">
import imgBase64 from '@/assets/json/imgBase64.json';

  //设置打印的输入样式
  const setConsole = () => {
    console.log('%c %c竟然被你发现此地，那么只好...',`background:url(${imgBase64.love}) no-repeat;padding:30px;background-size:100%;background-position:center;`,'color:red;font-size:20px;height:60px;line-height:60px;')
    console.log('%c2023年%c10月18日','background: #35495e; padding: 4px; border-radius: 3px 0 0 3px; color: #fff','background: #41b883; padding: 4px; border-radius: 0 3px 3px 0; color: #fff')
  }

  onMounted(() => {
    setConsole()
  })
</script>
  
<style lang="scss" scoped>
@media (min-width: 600px) {
  div {
    height: 100vh;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    line-height: 100vh;
    text-align: center;
    font-size: 20vh;
  }

  .a-img1 {
    background-image: url(https://pic.imgdb.cn/item/64cdf7521ddac507cc0fa9ef.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }

  .a-img2 {
    background-image: url(https://pic.imgdb.cn/item/64ae6b561ddac507cc1464c1.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }

  .a-img3 {
    background-image: url(https://pic.imgdb.cn/item/64cdf3d51ddac507cc05b6dc.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }
}
</style>
  
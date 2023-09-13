import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import routes from './routes';
//引入store
import { useUserStore } from '@/stores';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // 控制路由跳转位置
  scrollBehavior (to, from, savedPosition){
    if (savedPosition) {
      return savedPosition 
    } 
    else {
      // 如果不是通过上述行为切换组件，就会让页面回到顶部
      window.scrollRef.setScrollTop(0)
      return {
        left: 0, 
        top: 0
      }
    }
    
  }
})

//导航前置守卫
router.beforeEach((to,from,next) => {
  //每次页面更改的时候改变网页标题
  document.title = `Swhite's小窝-${to.meta.title || '页面'}`
  //store
  let store = useUserStore()
  //token
  let token = store.userInfo.token
  if(!!token){
    //放行
    next()
  }
  else{//没登陆
    if( to.path === '/user'){//且要去用户中心
      //提示
      ElMessage.info('您还未登录')
      //跳转
      router.push('/personal')
      //弹出登录框
      store.setShowLoginDialog(true)
    }
    else{//其他地方放行
      //放行
      next()
    }
  }
})

export default router
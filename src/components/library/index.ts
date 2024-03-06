//注册全局组件，全局自定义指令，挂载原型方法，注意vue3没有全局过滤器

import { messageObj } from '@/components/library/Message';

export default{
    install(app : any){
        //app上提供，component directive等函数
        //如果要挂载原型 用 app.config.globalProperties的方式
        //如app.config.globalProperties.$https
        // app.component(Skeleton.name,Skeleton)

        //挂载消息盒子原型，优化前
        // app.config.globalProperties.$message = messageObj
        //优化后
        //全局方法
        const globalMethods = {
            //显示弹窗
            showPopup() {
                return messageObj
            }
        }
    
        //将全局方法提供给后代
        app.provide('globalMethods', globalMethods)
    }
}
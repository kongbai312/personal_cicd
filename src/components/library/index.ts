//注册全局组件，全局自定义指令，挂载原型方法，注意vue3没有全局过滤器

import { messageObj } from '@/components/library/Message';

export default{
    install(app : any){
        //app上提供，component directive等函数
        //如果要挂载原型 用 app.config.globalProperties的方式
        //如app.config.globalProperties.$https
        // app.component(XtxSkeleton.name,XtxSkeleton)
        // app.component(XtxCarousel.name,XtxCarousel)
        // app.component(XtxMore.name,XtxMore)
        // app.component(XtxBread.name, XtxBread)
        // app.component(XtxBreadItem.name, XtxBreadItem)

        //挂载消息盒子原型
        app.config.globalProperties.$message = messageObj
    }
}
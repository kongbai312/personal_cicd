// 实现使用函数调用xtx-message组件的逻辑
import { createVNode, render} from 'vue';
import PrMessage from '../pr_message.vue';


//步骤
// 1. 引入组件
// 2. 根据组件创建虚拟节点
// 3. 准备一个DOM容器
// 4. 把虚拟节点渲染DOM容器中

//从Vue中引入:    createVNode('标签名/组件', { 属性 })
//创建了一个虚拟节点
const divVNode = createVNode('div',{class:'xtx-message-container'})
// 把虚拟 DOM 渲染到 body 中
// render(虚拟节点,DOM容器)
render(divVNode,document.body)
// 虚拟 DOM 渲染成功后，可以通过 el 属性获取到真实的 DOM 节点
//将真实的DOM节点赋值给div形成真实的DOM容器
const div = divVNode.el

//定时器
let timer : any = null

// export default (type,message) => {
//   //根据组件创建虚拟节点
//   const vNode = createVNode(XtxMessage,{type,message})
//   // 把虚拟 DOM 渲染到 容器 中
//   render(vNode,div)
// }

//如果要挂载原型上，在components/library/index.js中
export const Message =  (type : string,message : string) => {
  //根据组件创建虚拟节点
  const vNode = createVNode(PrMessage,{type,message})
  // 把虚拟 DOM 渲染到 容器 中
  render(vNode,div as Element)
  //开启定时器前，先清空定时器
  clearTimeout(timer)
  timer = setTimeout(()=>{
    //销毁弹窗
    render(null,div as Element)
  },2000)
}

//仿造element-UI的调用方法 将这个挂载到原型链上
export const messageObj = {
  success:(text : string)=>{
    Message('success',text)
  },
  error:(text : string)=>{
    Message('error',text)
  },
  warn:(text : string)=>{
    Message('warn',text)
  }
}

# 使用live2d

前言：不知道写些什么了，那就总结一下我这博客live2d的使用吧。希望能对大家有所帮助

## 一：安装

```javascript
npm install -S live2d-widget
//
pnpm install -S live2d-widget
```

## 二：使用

在需要的界面引入

```javascript
import {L2Dwidget} from 'live2d-widget';
//如在ts中引入，需自己配置声明文件
在types/live2d-widget.d.ts中声明
declare module 'live2d-widget'
```

## 三：模型

通过github找自己需要的模型，下面的例子

```
//通过npm安装
pnpm i -s live2d-widget-model-shizuku
//或者下载到本地引入
https://github.com/summerscar/live2dDemo/tree/master
https://github.com/xiazeyu/live2d-widget-models
```

## 四：配置

注：部署打包时，需要将模型文件放在public文件夹

在index.html可以引入

```
<!-- 看板娘 -->
<script src="/live2d/lib/L2Dwidget.min.js" type="text/javascript" charset="utf-8"></script>
```

## 五：参考代码

```
<canvas id="live2dcanvas" width="600" height="600"></canvas>

import { onMounted } from 'vue';
import {L2Dwidget} from 'live2d-widget'
  const live2dInit = () => {
    window.L2Dwidget.init({
      // pluginRootPath: '/live2d/',//插件在站点上的根目录(相对路径)
      // pluginJsPath: 'lib/',//脚本文件相对与插件根目录路径
      // pluginModelPath: 'live2d-widget-model-shizuku/assets/',//模型文件相对与插件根目录路径
      tagMode: false,//标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
      debug: false,//调试, 是否在控制台输出日志
      // name:{
      //   canvas:'live2dcanvas'//自定义cavas标签的id（可不需要,默认live2dcanvas）
      // },
      model: { 
        // jsonPath: '/src/assets/live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json',
        //jsonPath:'/node_modules/live2d-widget-model-shizuku/assets/shizuku.model.json',
        // jsonPath:'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json',
        jsonPath: '/live2d/live2d-widget-model-shizuku/assets/shizuku.model.json',
        scale:1,//模型与canvas的缩放 
      },
      display: { 
        // superSample: 2, // 超采样等级
        // position: 'right', //显示位置：左或右
        width: 600,// canvas的长度
        height: 800,//canvas的高度
        // hOffset:-20,//canvas水平偏移
        // vOffset:-40,//canvas垂直偏移
      },
      // react:{//透明度条件
      //   opacityDefault:1,//默认透明度
      //   opacityOnHover: 0.5//鼠标移上透明度
      // },
      // dev:{
      //   border:false,//在canvas周围显示边界
      // },
      mobile: { 
        show: true,//是否在移动设备上显示
        // scale:0.5,//移动设备上的缩放
        motion: true, // 移动设备是否开启重力感应
      },
      log: false,
      dialog:{
        enable:true,//显示人物对话框
        hitokoto:false,//使用一言API
      }
    })
  }
  
  onMounted(() => {
    live2dInit()
  })
```


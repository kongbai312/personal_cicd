# Vue中使用二维码功能

前言：做项目时用到二维码分享功能，大致做了一下，以下仅供参考。

## 一：安装

pnpm add vue@3 qrcode@1 @chenfengyuan/vue-qrcode@2

## 二：使用

在main.ts中

```javascript
import { createApp } from 'vue'; 
import VueQrcode from '@chenfengyuan/vue-qrcode'; 
const app = createApp({}); 
app.component(VueQrcode.name, VueQrcode);
```

组件使用

```javascript
<vue-qrcode value="Hello, World!" :options="{ width: 200 }" tag="img"></vue-qrcode>
```

官网：https://github.com/fengyuanchen/vue-qrcode
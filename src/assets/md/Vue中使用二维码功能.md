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
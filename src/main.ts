import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/stores/index';


//引入重置样式包
import 'normalize.css';
//引入暗黑模式样式
import 'element-plus/theme-chalk/dark/css-vars.css';

//引入mockServer  在这引入会影响主页live2d的使用
// import '@/mock/index'

// 引入自定义样式
import '@/styles/index.scss';
import '@/styles/dark.scss';


//引入md-editor-v3
import '@/utils/md-editor-v3';

//引入echarts
import echarts from '@/utils/echarts';

//引入热日历
import VueCalendarHeatmap from 'vue3-calendar-heatmap'; 

//导入自己封装的组件库
import PrUI from '@/components/library/index';

const app = createApp(App)

app.provide('$echarts', echarts);
app.use(pinia)
app.use(router)
app.use(VueCalendarHeatmap)
app.use(PrUI)

app.mount('#app')

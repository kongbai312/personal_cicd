import { createPinia } from 'pinia';
//导入pinia数据持久化插件
import persist from 'pinia-plugin-persistedstate';

const pinia = createPinia()

//使用插件
pinia.use(persist)
export default pinia

// 统一暴露模块
export * from './modules/usually';
export * from './modules/user';
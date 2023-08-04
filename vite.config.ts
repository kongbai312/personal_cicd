import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
// @ts-ignore
export default ( { mode }) => {
    const env = loadEnv(mode, process.cwd());
    return defineConfig({
      plugins: [
        vue({
          reactivityTransform: true
        }),
        AutoImport({
          // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
          imports: ['vue'],
          resolvers: [
              ElementPlusResolver(),
              // 自动导入图标组件
              IconsResolver({
              prefix: 'Icon',
              }),
          ],
        }),
        Components({
          resolvers: [
              ElementPlusResolver(),
              // 自动注册图标组件
              IconsResolver({
              enabledCollections: ['ep'],
              }),
          ],
        }),
        Icons({
          autoInstall: true,
        }),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      //服务器端口
      server: {
        port: 8080,
        open: true
      },
      //github部署
      base: env.MODE === 'production' ? '/personal_ts_up/' : './'
    })
}
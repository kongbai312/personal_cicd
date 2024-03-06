import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
// @ts-ignore
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue({
        //defineProps使用默认值
        reactivityTransform: true
      }),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          })
        ]
      }),
      Icons({
        autoInstall: true
      })
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
      // proxy:{
      //   '/api/':{
      //     target:'http://geek.itheima.net',
      //     changeOrigin: true,
      //     //去除api
      //     rewrite: ( path ) => path.replace(/^\/api/, '')
      //   }
      // }
    },
    //github部署
    base: env.MODE === 'production' ? '/personaltsup/' : './',
    // base: './',
    // 打包配置
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: 'assets/js/[name]-[hash].js', 
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: 'assets/js/[name]-[hash].js', 
          // 用于输出静态资源的命名放到dist中的static文件夹下，[ext]表示文件扩展名
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  })
}

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 自动引入组件和各种依赖
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
  VantResolver,
  VueUseComponentsResolver,
} from 'unplugin-vue-components/resolvers';
// 自动引入icones库的图标
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
// px自动转换为rem
import postCssPxToRem from 'postcss-pxtorem';

/* 
  跨域失败原因总结（主要是出在baseUrl上）：https://blog.csdn.net/qq_52014705/article/details/130161061
*/

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // 可以以IP访问
    port: 5200, // 服务启动端口
    open: true, // 自动打开游览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        // 这里配置真实的后端环境地址
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: false,
        pure_funcs: ['console.log', 'console.info'],
        drop_debugger: true,
      },
    },
    assetsDir: 'static/assets',
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      dts: './src/auto-imports.d.ts', // 生成类型声明文件路径，设为 false 可禁止生成文件
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'], // 配合VueUseComponentsResolver实现自动按需引入
      eslintrc: {
        enabled: true, // 启用与 Eslint 集成
        filepath: './eslintrc-auto-import.json', // 生成 EsLint 配置文件的路径，在下面 Eslint 配置部分会使用
        globalsPropValue: true, // 用于覆盖 globals 属性，
      },
      resolvers: [], // 路径解析器列表
    }),
    Components({
      dts: './src/components.d.ts', // 生成类型声明文件路径，设为 false 可禁止生成文件
      resolvers: [
        VantResolver(), // vant组件自动按需引入
        VueUseComponentsResolver(),
        IconsResolver(),
      ], // 组件路径解析器列表
    }),
    Icons({ autoInstall: true, compiler: 'vue3' }),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75, // 1rem，根据 设计稿宽度/10 进行设置
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
  },
});

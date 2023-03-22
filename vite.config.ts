/*
 * @Author: WangXin
 * @Date: 2023-02-20 14:50:42
 * @LastEditors: WangXin
 * @LastEditTime: 2023-03-14 09:51:10
 * @FilePath: \code\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import removeConsole from 'vite-plugin-remove-console';
import AutoImport from 'unplugin-auto-import/vite';
import svgLoader from 'vite-svg-loader';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
const root: string = process.cwd();

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};
/** 设置别名 */
const alias: Record<string, string> = {
  '@': pathResolve('src'),
  '@build': pathResolve('build')
};
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    base: mode === 'production' ? './' : '/',
    server: {
      host: '0.0.0.0',
      proxy: {
        '/telemetryParams': {
          target: 'http://10.2.0.106:8001',
          changeOrigin: true
        }
      }
    },
    build: {
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve('index.html')
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
        // 静态资源分类打包
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      svgLoader(),
      removeConsole(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: alias
    }
  };
};
// export default defineConfig({
//   base:'',
// })

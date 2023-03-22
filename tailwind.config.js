/*
 * @Author: WangXin
 * @Date: 2023-02-20 22:16:37
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-22 09:52:38
 * @FilePath: \pnpm-demo\tailwind.config.js
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: 'var(--el-bg-color)',
        blue: '#60CAFF',
        primary_light_9: 'var(--el-color-primary-light-9)',
        text_color_primary: 'var(--el-text-color-primary)',
        text_color_regular: 'var(--el-text-color-regular)',
        text_color_disabled: 'var(--el-text-color-disabled)'
      }
    },
    spacing: {
      200: '200px',
      10: '10px',
      20: '20px',
      30: '30px'
    }
  }
};

/*
 * @Author: WangXin
 * @Date: 2023-02-20 14:50:42
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-20 15:54:27
 * @FilePath: \vue3-tem\vue3.0-tem\.eslintrc.js
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
    'func-names': ['error', 'as-needed'], // 需要时添加函数名称
    'no-param-reassign': ['error', { props: false }], // 函数形参可修改
    'no-plusplus': 'off',
    'vue/multi-word-component-names': 'off',
    'no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto'
    }
  ]
};

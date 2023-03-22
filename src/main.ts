/*
 * @Author: WangXin
 * @Date: 2023-02-20 14:50:42
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-22 10:11:06
 * @FilePath: \code\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupStore } from "@/store";
import App from "./App.vue";
import router from "./router";
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "./style/index.scss";

// import "./style/tailwind.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);
setupStore(app);
app.mount("#app");

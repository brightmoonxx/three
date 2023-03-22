/*
 * @Author: WangXin
 * @Date: 2023-02-20 14:50:42
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-20 17:02:47
 * @FilePath: \vue3-tem\vue3.0-tem\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import NProgress from "@/utils/progress";
import { normalRoute } from './normal'
import {createRouter, createWebHashHistory,type RouteRecordRaw} from "vue-router";
const constantRoutes: Array<RouteRecordRaw> = []
constantRoutes.push(normalRoute as any)
console.log(constantRoutes)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
});
router.beforeEach((to,_from,next)=>{
  NProgress.start();
  next()
})
router.afterEach(() => {
  NProgress.done();
});
export default router;

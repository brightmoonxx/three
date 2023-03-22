/*
 * @Author: WangXin
 * @Date: 2023-02-20 16:00:08
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-22 09:33:48
 * @FilePath: \pnpm-demo\types\global.d.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by YuXing, All Rights Reserved. 
 */
import { type RouteComponent, type RouteLocationNormalized } from "vue-router";
declare global {
    const __APP_INFO__: {
        pkg: {
          name: string;
          version: string;
          dependencies: Recordable<string>;
          devDependencies: Recordable<string>;
        };
        lastBuildTime: string;
    };
    interface RouteChildrenConfigsTable {
      /** 子路由地址 `必填` */
      path: string;
      /** 路由名字（对应不要重复，和当前组件的`name`保持一致）`必填` */
      name?: string;
      /** 路由重定向 `可选` */
      redirect?: string;
      /** 按需加载组件 `可选` */
      component?: RouteComponent;
      meta?: {
        /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加） `必填` */
        title: string;
        /** 菜单图标 `可选` */
        icon?: string;
        /** 菜单名称右侧的额外图标，支持`fontawesome`、`iconfont`、`element-plus-icon` `可选` */
        extraIcon?: {
          svg?: boolean;
          name?: string;
        };
      };
      /** 子路由配置项 */
      children?: Array<RouteChildrenConfigsTable>;
    }
    interface RouteConfig {
         /** 路由地址 `必填` */
         path: string;
         /** 路由名字（保持唯一）`可选` */
         name?: string;
          /** `Layout`组件 `可选` */
        component?: RouteComponent;
        /** 路由重定向 `可选` */
        redirect?: string;
        meta?: {
            /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加）`必填` */
            title: string;
            /** 菜单图标 `可选` */
            icon?: string;
            /** 是否在菜单中显示（默认`true`）`可选` */
            showLink?: boolean;
            /** 菜单升序排序，值越高排的越后（只针对顶级路由）`可选` */
            rank?: number;
          };
           /** 子路由配置项 */
        children?: Array<RouteChildrenConfigsTable>;
    }
    interface TableHeaderConfig {
      label: string;
      prop?: string;
      width?: number;
      component?: string;
      operate?: string[];
      value?: {
        activeValue: string | number;
        inactiveValue: string | number;
      };
    }
}
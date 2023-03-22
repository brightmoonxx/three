/*
 * @Author: WangXin
 * @Date: 2023-02-20 22:16:37
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-21 11:16:23
 * @FilePath: \pnpm-demo\src\utils\http\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by YuXing, All Rights Reserved. 
 */
import Axios from "axios";
import type {AxiosRequestConfig,AxiosInstance} from "axios";
import type {
  HttpError,
  RequestMethods,
  HttpResponse,
  HttpRequestConfig
} from "./types.d";
  import { stringify } from "qs";
  import NProgress from "../progress";
import type { type } from "os";
// //   import { getToken, formatToken } from "@/utils/auth";
// //   import { useUserStoreHook } from "@/store/modules/user";

  const defaultConfig:AxiosRequestConfig = {
    timeout: 10000,
    headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
    },
  }
  
  class Http {
      /** 保存当前Axios实例对象 */
     private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);
    constructor() {
   
    }
    
    public request<T>( url: string,method:RequestMethods = 'POST',data:any = {},isParams:Boolean = false): Promise<T> {

      const config:AxiosRequestConfig = {
        url,
        method,
        [`${method === 'GET' || isParams ? 'params' : 'data'}`]: data,
      }
       return new Promise((resolve,reject)=>{
        Http.axiosInstance.request(config).then((response:undefined)=>{
          resolve(response);
        }).catch(error=>{
          reject(error);
        })
       })
    }
  
    /** 单独抽离的post工具函数 */
    public post<T, P>(
      url: string,
      params?: AxiosRequestConfig<T>,
      isParams?: Boolean
    ): Promise<P> {
      return this.request<P>(url,"POST", params, isParams);
    }
  
    /** 单独抽离的get工具函数 */
    public get<T, P>(
      url: string,
      params?: AxiosRequestConfig<T>,
      isParams?: Boolean
    ): Promise<P> {
      return this.request<P>(url,"GET", params, isParams);
    }
  }
  
  export const http = new Http();
  
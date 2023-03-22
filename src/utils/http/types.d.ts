/*
 * @Author: WangXin
 * @Date: 2023-02-20 21:50:15
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-21 11:04:11
 * @FilePath: \pnpm-demo\src\utils\http\types.d.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by YuXing, All Rights Reserved. 
 */
import Axios, {
    Method,
    AxiosError,
    AxiosResponse,
    AxiosRequestConfig
  } from "axios";
  
  export type resultType = {
    accessToken?: string;
  };
  
  export type RequestMethods = Extract<
    Method,
    "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTION" | "HEAD"
  >;
  
  export interface HttpError extends AxiosError {
    isCancelRequest?: boolean;
  }
  
  export interface HttpResponse extends AxiosResponse {
    config:HttpRequestConfig;
  }
  
  export interface HttpRequestConfig  {
    url:string,
    method:RequestMethods,
    data:any,
    isParams:boolean
  }
  
  export default class Http {
    request<T>(
      method: RequestMethods,
      url: string,
      param?: AxiosRequestConfig,
      axiosConfig?: HttpRequestConfig
    ): Promise<T>;
    post<T, P>(
      url: string,
      params?: T,
      config?: PureHttpRequestConfig
    ): Promise<P>;
    get<T, P>(
      url: string,
      params?: T,
      config?: PureHttpRequestConfig
    ): Promise<P>;
  }
  
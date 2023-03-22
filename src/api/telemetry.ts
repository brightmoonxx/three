/*
 * @Author: WangXin
 * @Date: 2023-02-21 10:49:04
 * @LastEditors: WangXin
 * @LastEditTime: 2023-03-14 09:48:49
 * @FilePath: \code\src\api\telemetry.ts
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import { http } from '@/utils/http';
const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(import.meta.env);
export const getTelemetryParams = (data?: object) => {
  return http.request<any>(`${BASE_URL}telemetryParams`, 'GET', data, true);
};

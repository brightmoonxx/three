/*
 * @Author: WangXin
 * @Date: 2023-02-21 11:20:39
 * @LastEditors: WangXin
 * @LastEditTime: 2023-03-09 18:26:38
 * @FilePath: \code\src\store\modules\socket.ts
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import { defineStore } from 'pinia';
import { store } from '@/store';
export const useSocketStore = defineStore({
  id: 'socket',
  state: () => ({
    status: false,
    code: ''
  }),
  actions: {
    setStatus(value: boolean) {
      this.status = value;
    },
    setCode(value: string) {
      this.code = value;
    }
  }
});
export function useSocketStoreHook() {
  return useSocketStore(store);
}

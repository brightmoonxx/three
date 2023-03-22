<!--
 * @Author: WangXin
 * @Date: 2023-02-20 15:05:50
 * @LastEditors: WangXin
 * @LastEditTime: 2023-03-22 16:14:09
 * @FilePath: \study\src\layout\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by YuXing, All Rights Reserved. 
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted } from 'vue';
import { initScene } from './three-xiaodao';
onMounted(() => {
  initScene(document.querySelector('.three'));
});
</script>
<template>
  <div class="three w-full h-full"></div>
</template>
<style scoped lang="scss">
.three {
  background: #040405;
  user-select: none;
  .logo {
    min-height: 60px;
  }
  .app-menu {
    width: 300px;
    background: #1b1b23;
    border-radius: 4px;
  }
  .app-container {
    display: flex;
    flex-direction: column;
  }
  .app-container-nav {
    height: 50px;
    background: #1b1b23;
    border-radius: 2px;
    color: #e6df4e;
    font-weight: bold;
  }
  .app-container-body {
    background: #1b1b23;
    overflow: auto;
  }
}
</style>

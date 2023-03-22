/*
 * @Author: WangXin
 * @Date: 2023-02-22 15:52:13
 * @LastEditors: WangXin
 * @LastEditTime: 2023-02-22 15:54:29
 * @FilePath: \code\src\plugins\echarts\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by YuXing, All Rights Reserved. 
 */
import type { App } from "vue";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {  LineChart } from "echarts/charts";
import {
    GridComponent,
    TitleComponent,
    LegendComponent,
    GraphicComponent,
    ToolboxComponent,
    TooltipComponent,
    DataZoomComponent,
    VisualMapComponent
  } from "echarts/components";
const { use } = echarts;
use([
    LineChart,
    CanvasRenderer,
    GridComponent,
    TitleComponent,
    LegendComponent,
    GraphicComponent,
    ToolboxComponent,
    TooltipComponent,
    DataZoomComponent,
    VisualMapComponent
  ]);
  export default echarts;
/*
 * @Author: WangXin
 * @Date: 2023-03-21 15:11:00
 * @LastEditors: WangXin
 * @LastEditTime: 2023-03-22 14:42:14
 * @FilePath: \study\src\layout\three.js
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import xp from '@/assets/room/x+.png';
import xr from '@/assets/room/x-.png';
import yp from '@/assets/room/y+.png';
import yr from '@/assets/room/y-.png';
import zp from '@/assets/room/z+.png';
import zr from '@/assets/room/z-.png';
const room = [xp, xr, yp, yr, zp, zr];
let camera, scene, renderer, env;
export const initScene = (renderDom) => {
  init(renderDom).then(render);
};
async function init(renderDom) {
  //初始化场景
  scene = new THREE.Scene();
  //初始化相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //初始化相机位置
  camera.position.set(0, 0, 0.5);
  //初始化渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //添加控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; //加阻尼感觉
  renderDom.appendChild(renderer.domElement);
  render();
  //添加立方体
  const geometry = new THREE.BoxGeometry(10, 10, 10); //创建立方体
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //创建材质
  let boxMaterial = [];
  room.forEach((item) => {
    //纹理加载
    let texture = new THREE.TextureLoader().load(item);
    //创建材质
    boxMaterial.push(new THREE.MeshBasicMaterial({ map: texture })); //添加纹理贴图
  });
  //修改立方体材质
  const cube = new THREE.Mesh(geometry, boxMaterial);
  cube.geometry.scale(1, 1, -1); //进入到立方体里面
  scene.add(cube);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

/*
 * @Author: WangXin
 * @Date: 2023-03-21 15:11:00
 * @LastEditors: WangXin
 * @LastEditTime: 2023-03-22 16:02:23
 * @FilePath: \study\src\layout\three-360-ball.js
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import ballimg from '@/assets/ball/ball.jpg';
// import hdrball from '@/assets/ball/ball.hdr';
// const room = [xp, xr, yp, yr, zp, zr];
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
  //添加球体
  const ball = new THREE.SphereGeometry(15, 32, 15);
  //   const texture = new THREE.TextureLoader().load(ballimg); //img
  new RGBELoader().load('./src/assets/ball/ball.hdr', (texture) => {
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    const ball360 = new THREE.Mesh(ball, material);
    scene.add(ball360);
  });
  //side: THREE.BackSide 在背面渲染
  //   ball360.geometry.scale(1, 1, -1); //进入到球里面
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

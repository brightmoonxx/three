/*
 * @Author: WangXin
 * @Date: 2023-03-22 16:09:33
 * @LastEditors: WangXin
 * @LastEditTime: 2023-03-22 18:11:30
 * @FilePath: \study\src\layout\three-xiaodao.js
 * @Description:
 *
 * Copyright (c) 2023 by YuXing, All Rights Reserved.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
let camera, scene, renderer, env;
export const initScene = (renderDom) => {
  init(renderDom).then(render);
};
async function init(renderDom) {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(-50, 50, 100);
  scene.add(camera);
  //   scene.add(controls);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.outputEncoding = THREE.sRGBEncoding; //设置编码
  renderDom.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
  window.addEventListener('resize', onWindowResize);
  controls();
  render();
}
function onWindowResize() {
  //更新摄像头宽高比例
  camera.aspect = window.innerWidth / window.innerHeight;
  //更新摄像头投影矩阵
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function controls() {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; //加阻尼感觉
}
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function createSphere() {
  //创建巨大球体
  const skyGeometry = new THREE.SphereGeometry(1000, 60, 60);
  //   const skyMaterial = new THREE.MeshBasicMaterial({ map: });
  const plane = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(plane);
}

<template>
  <div>
  </div>
</template>

<script>
import { onMounted } from "vue"

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// import { OrbitControls } from '../three/OrbitControls.js';
// import { FlakesTexture } from '../three/FlakesTexture.js';
// import { RGBELoader } from '../three/RGBELoader.js';

let scene, camera, hlight, renderer, controls, loader, car;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
  camera.rotation.y = 45 / 180 * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight)

  renderer = new THREE.WebGLRenderer({ antialias:true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  loader = new GLTFLoader()
  loader.load('textures/datsun/scene.gltf', (gltf) => {
    car = gltf.scene.children[0];
    car.scale.set(0.3, 0.3, 0.3);
    scene.add(gltf.scene);
    animate();
  })


}
function animate() {
  // controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

export default {
  name: 'HomePage',
  setup() {

    onMounted(() => {
      init();
    })
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;

  a {
    padding: 0 1rem;
  }
}
</style>

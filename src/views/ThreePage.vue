<template>
  <div>
  </div>
</template>

<script>
import { onMounted } from "vue"

import * as THREE from 'three';
import { OrbitControls } from '../three/OrbitControls.js';
import { FlakesTexture } from '../three/FlakesTexture.js';
import { RGBELoader } from '../three/RGBELoader.js';

let scene, camera, renderer, controls, pointlight;

function init() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,1000);
  camera.position.set(0,0,500);
  controls = new OrbitControls(camera, renderer.domElement);

  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.enableDamping = true;

  pointlight = new THREE.PointLight(0xffffff,1);
  pointlight.position.set(200,200,200);
  scene.add(pointlight);

  let envmaploader = new THREE.PMREMGenerator(renderer);

  new RGBELoader().setPath('textures/').load('cayley_interior_4k.hdr', function(hdrmap) {

    let envmap = envmaploader.fromCubemap(hdrmap);
    let texture = new THREE.CanvasTexture(new FlakesTexture());
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.x = 10;
    texture.repeat.y = 6;

    const ballMaterial = {
      clearcoat: 1.0,
      cleacoatRoughness:0.1,
      metalness: 0.9,
      roughness:0.5,
      color: 0x8418ca,
      normalMap: texture,
      normalScale: new THREE.Vector2(0.15,0.15),
      envMap: envmap.texture
    };

    let ballGeo = new THREE.SphereGeometry(100,64,64);
    let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
    let ballMesh = new THREE.Mesh(ballGeo,ballMat);
    scene.add(ballMesh);

    animate();

  });
}
function animate() {
  controls.update();
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

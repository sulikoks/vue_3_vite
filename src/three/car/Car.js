import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import directionalLightNode from "three/addons/nodes/lighting/DirectionalLightNode";

// import { OrbitControls } from '../three/OrbitControls.js';
// import { FlakesTexture } from '../three/FlakesTexture.js';
// import { RGBELoader } from '../three/RGBELoader.js';

let scene, camera, hlight, renderer, controls, loader, car;
let directionalLight, light0, light1, light2, light3;

export function init(node) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight)

    directionalLight = new THREE.DirectionalLight(0xffffff, 60)
    directionalLight.position.set(0, 1, 0)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    light0 = new THREE.PointLight(0xc4c4c4, 2)
    light0.position.set(0, 300, 500)
    scene.add(light0)

    light1 = new THREE.PointLight(0xc4c4c4, 2)
    light1.position.set(500, 100, 0)
    scene.add(light1)

    light2 = new THREE.PointLight(0xc4c4c4, 2)
    light2.position.set(0, 100, -500)
    scene.add(light2)

    light3 = new THREE.PointLight(0xc4c4c4, 2)
    light3.position.set(-500, 300, 0)
    scene.add(light3)

    renderer = new THREE.WebGLRenderer({ antialias:true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    node.appendChild(renderer.domElement);

    return new Promise(((resolve, reject) => {
        loader = new GLTFLoader()
        loader.load('textures/datsun/scene.gltf', (gltf) => {
            car = gltf.scene.children[0];
            car.scale.set(0.3, 0.3, 0.3);
            scene.add(gltf.scene);
            animate();
            resolve()
        })
    }))
}
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

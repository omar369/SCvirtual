import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { gsap } from "gsap"

//Global variables
let currentRef = null;

const timeline = new gsap.timeline({ 
  defaults:{
    duration: 30,
  }
})

//Scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 2000);
scene.add(camera);
camera.position.set(0, 0, 5);
camera.lookAt(new THREE.Vector3());

//Ambient / World
scene.background = new THREE.Color(0x131215)

scene.fog = new THREE.FogExp2( 0x131215, 0.1 )

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(100, 100);

//OrbitControls
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.target.y = 0

//Resize canvas
const resize = () => {
  renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
  camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);


//LIGHTS
const ambLight = new THREE.AmbientLight(0x9f9fff, 1)
scene.add(ambLight)

const pointLight = new THREE.PointLight(0x323292, 4)
pointLight.position.y = 5
pointLight.position.x = 1
scene.add( pointLight );

const pointLight2 = new THREE.PointLight(0xaf526a, 2)
pointLight2.position.set(-2,1,5)
scene.add( pointLight2 );

const envMap = new THREE.CubeTextureLoader()
const eMap = envMap.load([
  './hdri/px.png',
  './hdri/nx.png',
  './hdri/py.png',
  './hdri/ny.png',
  './hdri/pz.png',
  './hdri/nz.png',
])

scene.environment = eMap
// scene.background = eMap

// cube TEXTURES
// const textureloader = new THREE.TextureLoader()
// const map = textureloader.load('textures/eroded-stylized-cliff3-albedo.png')
// const ao = textureloader.load('textures/eroded-stylized-cliff3-ao.png')
// const norm = textureloader.load('textures/eroded-stylized-cliff3-normal-ogl.png')
// const disp = textureloader.load('textures/eroded-stylized-cliff3-height.png')
// const metal = textureloader.load('textures/eroded-stylized-cliff3-metallic.png')
// const rough = textureloader.load('textures/eroded-stylized-cliff3-roughness.png')

//cube GEO
// const boxBuff = new THREE.SphereGeometry( 0.5, 64, 64)
// const stdrMat = new THREE.MeshStandardMaterial({
//     map: map,
//     aoMap: ao,
//     roughnessMap: rough,
//     normalMap: norm,
//     displacementMap: disp,
//     displacementScale: 0.1,
//     metalnessMap: metal,
//     wireframe: true
//   })

// const cube = new THREE.Mesh(
//   boxBuff,
//   stdrMat
// )
// scene.add(cube);


//MODELS
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
gltfLoader.load('./models/cubetas/pro.gltf',
  (gltf)=>{
    scene.add(gltf.scene)
  },
  ()=>{
    console.log("Progress")
  },
  ()=>{
    console.log("Error")
  },
)



//Animate the scene
const animate = () => {
  orbitControls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();



//Init and mount the scene
export const initScene = (mountRef) => {
  currentRef = mountRef.current;
  resize();
  currentRef.appendChild(renderer.domElement);
};

//Dismount and clena up the buffer from the scene
export const cleanUpScene = () => {
  scene.dispose();
  currentRef.removeChild(renderer.domElement);
};

// export const moveBuket = ()=>{
//   timeline.from(cube.rotation, {
//     y: Math.PI * 2,
//   })
// }
// moveBuket()
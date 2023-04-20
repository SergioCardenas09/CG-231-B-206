//variables globales esfera

var radio=1
var divisiones=10

//variables de escala
var sx=0.5;
var sy=0.5;
var sz=3;
//variables de rotacion
var Rx=(Math.PI /(2));
var Ry=-(Math.PI /(3));
var Rz=Math.PI /(3);
//variable de transalacion
var Tx=5.1*radio;
var Ty=5.9*radio;
var Tz=2;


//medidas de la pantalla

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//render
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

//camara
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//cracion de la esfera 

var geometry = new THREE.SphereGeometry(radio, divisiones, divisiones);
var material = new THREE.MeshBasicMaterial( {color: 0xfff6ca} );
var sphere = new THREE.Mesh(geometry, material);

//proceso de escalado

sphere.scale.setX(sx);

sphere.scale.setY(sy);

sphere.scale.setZ(sz);

//proceso de traslacion y rotacion para acomodar

//Rotacion del esfera

sphere.translateY(Ty);

sphere.rotation.x += Rx;
sphere.rotation.y += Ry;

sphere.translateX(Tx);


//luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

//grilla
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

scene.add(sphere)

//funcion de imagen
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
import * as THREE from '/three/three.module.js'
import { OrbitControls } from '/three/OrbitControls.js'
import { STLLoader } from '/three/STLLoader.js'

const colorScene = new THREE.Color(0xF0F0F2);


const scene = new THREE.Scene({
    background: colorScene,
});

const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 100, 100, 100 ); //default; light shining from top
light.castShadow = false; // default false
scene.add( light );

const light1 = new THREE.DirectionalLight( 0xffffff, 1 );
light1.position.set( -100, -100, -100 ); //default; light shining from top
light1.castShadow = false; // default false
scene.add( light1 );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const controls = new OrbitControls(camera, renderer.domElement);
const material = new THREE.MeshPhongMaterial({
    color: 0xF0F0F2,
    emissive: 0x000000,
    specular: 0x111111,
    shininess: 30,
    reflectivity: 1.0,
    refractionRatio: 0.98,
})


const loader = new STLLoader();
loader.load('3Dmodels/Bracket.stl',
            function (geometry){
                const mesh = new THREE.Mesh(geometry, material)
                scene.add(mesh)
                },
                () => {
                    console.log("loaded")
                },
                (error) => {
                    console.log(error);
                }
)

camera.position.set(0,100,200)
controls.update();

function animate() {
    requestAnimationFrame( animate );

    controls.update();
    
    renderer.render( scene, camera );
};

animate();
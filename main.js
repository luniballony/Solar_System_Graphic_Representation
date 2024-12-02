// efolio b - matilde carmo 2201036 v1
// v1 : Sizes and Colors set
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 

// imports file with constants defined
import {Sizes, Colors} from './constants.js';

// easier to manage the code and test sizes
const SpeedRotation = 0.025;
const Shine = 18;
const distance = 14; //sets distance between planets in case we want it to be the same between all

const radius = 10; // Distance from the rotation center
let angle = 0; // Initial angle


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50; // positions the camera (how far/close it is to the objects)
camera.position.y = 10;

const renderer = new THREE.WebGLRenderer();          
renderer.setSize(window.innerWidth, window.innerHeight); // Defines the window size to be a square
document.body.appendChild(renderer.domElement);


// Sun
const SunGeometry = new THREE.SphereGeometry(Sizes.Sun, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const SunMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Sun,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Sun = new THREE.Mesh(SunGeometry, SunMaterial);
Sun.scale.set(1, 1, 1); // Resizes the sphere
Sun.position.set(0, 0, 0); // Moves the sphere on the screen (vertically)
scene.add(Sun);



// Mercury
const MercuryGeometry = new THREE.SphereGeometry(Sizes.Mercury, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const MercuryMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Mercury,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Mercury = new THREE.Mesh(MercuryGeometry, MercuryMaterial);
Mercury.scale.set(1, 1, 1); // Resizes the sphere
Mercury.position.set(distance, 0, 0); // Moves the sphere on the screen (horizontally)

scene.add(Mercury);


// Venus
const VenusGeometry = new THREE.SphereGeometry(Sizes.Venus, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const VenusMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Venus,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);
Venus.scale.set(1, 1, 1); // Resizes the sphere
Venus.position.set(distance * 2, 0, 0); // Moves the sphere on the screen (horizontally)
scene.add(Venus);


// Earth
const EarthGeometry = new THREE.SphereGeometry(Sizes.Earth, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const EarthMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Earth,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Earth = new THREE.Mesh(EarthGeometry, EarthMaterial);
Earth.scale.set(1, 1, 1); // Resizes the sphere
Earth.position.set(distance * 3, 0, 0); // Moves the sphere on the screen (horizontally)
scene.add(Earth);

// Moon
const MoonGeometry = new THREE.SphereGeometry(Sizes.Moon, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const MoonMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Moon,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Moon = new THREE.Mesh(MoonGeometry, MoonMaterial);
Moon.scale.set(1, 1, 1); // Resizes the sphere
Moon.position.set(3, 0, 0); // Moves the sphere on the screen (horizontally)
Earth.add(Moon);

// Mars
const MarsGeometry = new THREE.SphereGeometry(Sizes.Mars, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const MarsMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Mars,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Mars = new THREE.Mesh(MarsGeometry, MarsMaterial);
Mars.scale.set(1, 1, 1); // Resizes the sphere
Mars.position.set(distance * 4, 0, 0); // Moves the sphere on the screen (horizontally)
scene.add(Mars);


// Jupiter
const JupiterGeometry = new THREE.SphereGeometry(Sizes.Jupiter, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const JupiterMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Jupiter,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Jupiter = new THREE.Mesh(JupiterGeometry, JupiterMaterial);
Jupiter.scale.set(1, 1, 1); // Resizes the sphere
Jupiter.position.set(distance * 5, 0, 0); // Moves the sphere on the screen (horizontally)
scene.add(Jupiter);

// Saturn
const SaturnGeometry = new THREE.SphereGeometry(Sizes.Saturn, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const SaturnMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Saturn,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Saturn = new THREE.Mesh(SaturnGeometry, SaturnMaterial);
Jupiter.scale.set(1, 1, 1); // Resizes the sphere
Jupiter.position.set(distance * 6, 0, 0); // Moves the sphere on the screen (horizontally)
scene.add(Saturn);

// Uranos
const UranusGeometry = new THREE.SphereGeometry(Sizes.Uranus, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const UranusMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Uranus,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Uranus = new THREE.Mesh(UranusGeometry, UranusMaterial);
Uranus.scale.set(1, 1, 1); // Resizes the sphere
Uranus.position.set(distance * 7, 0, 0); // Moves the sphere on the screen (horizontally)
scene.add(Uranus);


// Neptune
const NeptuneGeometry = new THREE.SphereGeometry(Sizes.Neptune, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
const NeptuneMaterial = new THREE.MeshPhongMaterial ({
    color: Colors.Neptune,
    specular: 0x33333,   // Specular color, adjust for shininess
    shininess: Shine     // Higher shininess = smaller, sharper reflections
});
const Neptune = new THREE.Mesh(NeptuneGeometry, NeptuneMaterial);
Neptune.scale.set(1, 1, 1); // Resizes the sphere
Neptune.position.set(distance * 8, 0, 0); // Moves the sphere on the screen (horizontally)
scene.add(Neptune);


// LIGHT
const pointLight = new THREE.PointLight(0xffffff, 1.3); // Color, intensity
pointLight.position.set(0, 10, 30);  // Position of the light
scene.add(pointLight);


//set speeds as 0
let MercurySpeed = 0;
let VenusSpeed = 0;
let EarthSpeed = 0;
let MarsSpeed = 0;
let JupiterSpeed = 0;
let SaturnSpeed = 0;
let UranusSpeed = 0;
let NeptuneSpeed = 0;

function animate() {
    requestAnimationFrame(animate);

    Earth.rotation.y += 0.01; // the value determines the speed

    // Update angle
    MercurySpeed += 0.01;
    VenusSpeed += 0.01;
    EarthSpeed += 0.01;
    MarsSpeed += 0.01;
    JupiterSpeed += 0.01;
    SaturnSpeed += 0.01;
    UranusSpeed += 0.01;
    NeptuneSpeed += 0.01;

    // Calculate new position to allow rotation
    Mercury.position.x = distance * Math.cos(MercurySpeed);
    Mercury.position.z = distance * Math.sin(MercurySpeed);

    Venus.position.x = (distance + Sizes.Venus ) * Math.cos(MercurySpeed);
    Venus.position.z = (distance + Sizes.Venus )  * Math.sin(MercurySpeed);

    Earth.position.x = (distance + Sizes.Earth )  * Math.cos(EarthSpeed);
    Earth.position.z = (distance + Sizes.Earth )  * Math.sin(MercurySpeed);

    Mars.position.x = (distance + 16 )  * Math.cos(MarsSpeed);
    Mars.position.z = (distance + 16 )  * Math.sin(MarsSpeed);

    Jupiter.position.x = (distance + 27 )  * Math.cos(JupiterSpeed);
    Jupiter.position.z = (distance + 27 )  * Math.sin(JupiterSpeed);

    Saturn.position.x = (distance + 13 )  * Math.cos(SaturnSpeed);
    Saturn.position.z = (distance + 13 )  * Math.sin(SaturnSpeed);

    Uranus.position.x = (distance * 2.5 )  * Math.cos(UranusSpeed);
    Uranus.position.z = (distance * 2.5 )  * Math.sin(UranusSpeed);

    Neptune.position.x = (distance * 3 )  * Math.cos(NeptuneSpeed);
    Neptune.position.z = (distance * 3 )  * Math.sin(NeptuneSpeed);

    renderer.render(scene, camera);

};



animate();  
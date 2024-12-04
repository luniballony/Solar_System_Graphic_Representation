// functions.js 
// imports file with constants defined
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 
import {Sizes, Colors, Distances} from './constants.js';
import {distance, distance_between, r_smoothness, Shine} from './constants.js';
import {scene} from './main.js';

import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';


// Function to set up images for objects
export function image_setup (image_path) {
    const image = new THREE.TextureLoader().load(image_path);
    image.wrapS = THREE.RepeatWrapping;  // Horizontal axis (x-axis)
    image.wrapT = THREE.RepeatWrapping;  // Vertical axis (y-axis)

    // Set the number of repeats (adjust this based on the size of the sphere and desired effect)
    image.repeat.set(1, 1);
    return image;
}


// Function for planet creation
export function planet_creator (p_name, p_size, image_name) {
    const planet_geometry = new THREE.SphereGeometry(p_size, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
    const planet_material = new THREE.MeshPhongMaterial ({
        map: image_name,
        specular: 0x33333,   // Specular color, adjust for shininess
        shininess: Shine     // Higher shininess = smaller, sharper reflections
    });
    const planet_mesh = new THREE.Mesh(planet_geometry, planet_material);
    planet_mesh.name = p_name;
    planet_mesh.scale.set(1, 1, 1); // Resizes the planet
    planet_mesh.position.set(0, 0, 0); // position object
    scene.add(planet_mesh);

    return planet_mesh;
}


// Function for ring creation
export function ring_creator (r_name, r_distance, r_color) {
    const RingOuterRadius = r_distance;  
    const RingInnerRadius = r_distance - 0.15;  
    const RingThetaSegments = r_smoothness;  // number of segments makes ring smoother    
    // Create the ring geometry
    const RingGeometry = new THREE.RingGeometry(RingInnerRadius, RingOuterRadius, RingThetaSegments);
    const RingMaterial = new THREE.MeshBasicMaterial({
        color: r_color, // Set to desired, r_color: makes it so that you can change color of each ring
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const ring_mesh = new THREE.Mesh(RingGeometry, RingMaterial);
    ring_mesh.name = r_name;
    ring_mesh.position.set( 0, 0, 0); // position of ring
    ring_mesh.rotation.x = Math.PI / 2; // Makes the ring horizontal
    ring_mesh.rotation.y = 0; 
    ring_mesh.rotation.z = 0; 
    scene.add(ring_mesh);  

    return ring_mesh;
}

// currently they all have same distance between each other
// to change that, replace distance_2 for new variable with new value
// format: Previous_dist + previous_plan_radius + current_plan_radius + distance_between_plan
// allows for modifications done to variables like distance_between and therefore to have an effect
export function distance_calculater (Previous_dist, previous_plan_radius, current_plan_radius, distance_between_plan) {
    let random = previous_plan_radius + current_plan_radius + distance_between_plan + Previous_dist;
    return random;
}; 



// Function to create stars
export  function star_creator(s_size, s_color, s_amount, range) {
    const starGroup = new THREE.Group(); // Group to manage all stars together (optional)

    for (let n = 0; n < s_amount; n++) {
        const s_geometry = new THREE.SphereGeometry(s_size, 30, 30);
        const s_material = new THREE.MeshPhongMaterial({
            color: s_color,
            specular: 0xffffff,
            shininess: 30,
        });

        const s_mesh = new THREE.Mesh(s_geometry, s_material);

        // Generate random positions for the star
        const x = (Math.random() - 0.5) * range; // Random number between -100 and 100
        const y = (Math.random() - 0.5) * range;
        const z = (Math.random() - 0.5) * range;

        s_mesh.position.set(x, y, z); // Set random position
        scene.add(s_mesh); // Add the star to the scene

        starGroup.add(s_mesh); // Add star to the group (optional)
    }

    scene.add(starGroup); // Add the group to the scene (optional)
    return starGroup; // Return the group of stars (optional)
}
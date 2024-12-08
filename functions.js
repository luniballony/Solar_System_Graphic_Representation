/* 
Solar System - Graphic Representation
CG - efolio b 
Matilde Carmo 2201036
November 2024
*/


// functions.js 
// imports file with constants defined
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 
import {Sizes, Colors} from './constants.js';
import {default_distance, distance_between, r_smoothness, Shine, star_range} from './constants.js';
import {scene, ringsOn, rings, createRings} from './main.js';

import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';

 
// IMAGES
// Function to set up images for objects
export function image_setup (image_path) {
    const image = new THREE.TextureLoader().load(image_path);
    image.wrapS = THREE.RepeatWrapping;  // Horizontal axis (x-axis)
    image.wrapT = THREE.RepeatWrapping;  // Vertical axis (y-axis)

    // Set the number of repeats (adjust this based on the size of the sphere and desired effect)
    image.repeat.set(1, 1);
    return image;
}


// PLANETS
// Function for planet creation
export function planet_creator (p_name, p_size, image_name, position, parent) {
    const planet_geometry = new THREE.SphereGeometry(p_size, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
    const planet_material = new THREE.MeshPhongMaterial ({
        map: image_name,
        specular: 0x33333,   // Specular color, adjust for shininess
        shininess: Shine     // Higher shininess = smaller, sharper reflections
    });
    const planet_mesh = new THREE.Mesh(planet_geometry, planet_material);
    planet_mesh.name = p_name;
    planet_mesh.scale.set(1, 1, 1); // Resizes the planet
    planet_mesh.position.set(position, 0, 0); // position object
    parent.add(planet_mesh);

    return planet_mesh;
}


// RINGS
// Function for ring creation
export function ring_creator (r_name, r_distance, r_thickness, r_image, r_angle, r_parent) {
    const RingOuterRadius = r_distance;  
    const RingInnerRadius = r_distance - r_thickness;  // the smaller the r_thickness the thinnest it will  be 
    const RingThetaSegments = r_smoothness;  // number of segments makes ring smoother    

    const RingGeometry = new THREE.RingGeometry(RingInnerRadius, RingOuterRadius, RingThetaSegments);
    const RingMaterial = new THREE.MeshBasicMaterial({
        map: r_image, // Set to desired imagine / needed for saturn outer ring
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const ring_mesh = new THREE.Mesh(RingGeometry, RingMaterial);
    ring_mesh.name = r_name;
    ring_mesh.position.set( 0, 0, 0); // position of ring
    ring_mesh.rotation.x = r_angle; // Makes the ring horizontal
    ring_mesh.rotation.y = 0; 
    ring_mesh.rotation.z = 0; 
    r_parent.add(ring_mesh);  

    return ring_mesh;
}

// Rings update based on button: 
// Function to remove all rings
export function removeRings() {
    rings.forEach((ring) => {
        scene.remove(ring); // Remove ring from scene
    });
    rings.length = 0; // Clear the array
}

// Function to update rings based on 'ringsOn'
export function updateRings() {
    if (ringsOn) {
        createRings(); // Add rings
    } else {
        removeRings(); // Remove rings
    }
}



// DISTANCES
// format: Previous_dist + previous_plan_radius + current_plan_radius + distance_between_plan
// allows for modifications done to variables like distance_between and therefore to have an effect
export function distance_calculater (Previous_dist, previous_plan_radius, current_plan_radius, distance_between_plan) {
    let random = previous_plan_radius + current_plan_radius  + Previous_dist + distance_between_plan;
    return random;
}; 


// STARS
// star creation
export function star_creator(s_size, s_color, s_amount, max_radius, inner_radius) {
    const starGroup = new THREE.Group(); // Create a group to manage all stars

    for (let i = 0; i < s_amount; i++) {
        const s_geometry = new THREE.SphereGeometry(s_size, 1, 1); // Smooth stars - low value for performance
        const s_material = new THREE.MeshPhongMaterial({
            color: s_color,
            shininess: 50, // Small shine for a glowing effect
        });
        const s_mesh = new THREE.Mesh(s_geometry, s_material);

        // Randomize position within a spherical shell
        let x, y, z, distanceFromCenter;
        do {
            const theta = Math.random() * 2 * Math.PI; // Random angle for the XY plane
            const phi = Math.acos(2 * Math.random() - 1); // Random angle for Z axis
            const radius = Math.random() * (max_radius - inner_radius) + inner_radius;

            // Convert spherical coordinates to Cartesian coordinates
            x = radius * Math.sin(phi) * Math.cos(theta);
            y = radius * Math.sin(phi) * Math.sin(theta);
            z = radius * Math.cos(phi);

            distanceFromCenter = Math.sqrt(x * x + y * y + z * z); // Calculate distance from center
        } while (distanceFromCenter < inner_radius || distanceFromCenter > max_radius); // Ensure within spherical bounds

        s_mesh.position.set(x, y, z); // Set position for the star
        starGroup.add(s_mesh); // Add each star to the group
    }

    scene.add(starGroup); // Add the group to the scene
    return starGroup;
}




let tiny_star; 
let medium_star;
let big_star;
let another_star;

// Attach the slider's event listener
starSlider.addEventListener('input', update_stars);

// updates stars based on the slider
export function update_stars() {
    const starAmount = parseInt(starSlider.value); // Get the slider value
    starCountDisplay.textContent = starAmount; // Update display with the current count

    // Remove the old group of stars, if any
    if (tiny_star || medium_star || big_star) {
        scene.remove(tiny_star);
        scene.remove(medium_star);
        scene.remove(big_star);
        scene.remove(another_star);
    }

    // Create a new group of stars
    tiny_star = star_creator(0.6, Colors.Stars, starAmount, star_range, star_range - 200); // Adjust size, color, range and safe_zone as needed
    medium_star = star_creator (0.8, Colors.Stars, starAmount, star_range, star_range - 200);
    big_star = star_creator (0.9, Colors.Stars, starAmount, star_range, star_range - 200);
    another_star = star_creator (0.8, Colors.Stars, starAmount, star_range, star_range - 200);
};




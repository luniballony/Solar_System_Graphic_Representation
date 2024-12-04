    // efolio b - matilde carmo 2201036 v1
    // v1 : Sizes and Colors set
    import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 

    // imports file with constants defined
    import {Sizes, Colors, Distances} from './constants.js';
    import {distance, distance_between, r_smoothness, ring_angle, saturn_ring_angle} from './constants.js';
    import {image_setup, planet_creator, ring_creator, distance_calculater, star_creator} from './functions.js';

    import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';


    export const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(115, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50; // positions the camera (how far/close it is to the objects)
    camera.position.y = 15;

    const renderer = new THREE.WebGLRenderer();          
    renderer.setSize(window.innerWidth, window.innerHeight); // Defines the window size to be a square
    document.body.appendChild(renderer.domElement);


    const controls = new OrbitControls(camera, renderer.domElement);

    // Enable or customize zoom behavior
    controls.enableZoom = true; // This allows zooming
    controls.zoomSpeed = 1.2;   // Adjust zoom speed (default is 1)

    // Optional: Add limits to zoom
    controls.minDistance = 5;  // Minimum zoom distance
    controls.maxDistance = 150; // Maximum zoom distance


    

    // STARS
    // Reference to the current group of stars
    let tiny_star; 
    let medium_star;
    let big_star;
    

    function updateStars() {
        const starAmount = parseInt(starSlider.value); // Get the slider value
        starCountDisplay.textContent = starAmount; // Update display with the current count
    
        // Remove the old group of stars, if any
        if (tiny_star || medium_star || big_star) {
            scene.remove(tiny_star);
            scene.remove(medium_star);
            scene.remove(big_star);
        }
    
        // Create a new group of stars
        tiny_star = star_creator(0.2, Colors.Stars, starAmount, 250); // Adjust size, color, and range as needed
        medium_star = star_creator (0.3, Colors.Stars, starAmount, 250);
        big_star = star_creator (0.4, Colors.Stars, starAmount, 250);
    }
    
    // Attach the slider's event listener
    starSlider.addEventListener('input', updateStars);
    // Create initial stars when the scene loads
    updateStars();
    


    // PLANETS + SUN + MOON
    // Sun + Planets + Moon image set up
    let SunImage = image_setup ("/sun.jpg");
    let MercuryImage = image_setup ("/mercury.jpg");
    let VenusImage = image_setup ("/venus.jpg");
    let EarthImage = image_setup ("/earth.jpg");
    let MarsImage = image_setup ("/mars.jpg");
    let JupiterImage = image_setup ("/jupiter.jpg");
    let SaturnImage = image_setup ("/saturn.jpg");
    let UranusImage = image_setup ("/uranus.jpg");
    let NeptuneImage = image_setup ("/neptune.jpg");
    let MoonImage = image_setup ("/moon.jpg");
    let SaturnRingImage = image_setup ("/saturnring.png");
    let RingImage = image_setup ("/ring.png");

    // Planet + Sun + Moon Creation
    let Sun = planet_creator ('Sun', Sizes.Sun, SunImage, 0, scene); 
    let Mercury = planet_creator ('Mercury', Sizes.Mercury, MercuryImage, 0, scene);
    let Venus = planet_creator ('Venus', Sizes.Venus, VenusImage, 0, scene);
    let Earth = planet_creator ('Earth', Sizes.Earth, EarthImage, 0, scene);
    let Mars = planet_creator ('Mars', Sizes.Mars, MarsImage, 0, scene);
    let Jupiter = planet_creator ('Jupiter', Sizes.Jupiter, JupiterImage, 0, scene);
    let Saturn = planet_creator ('Saturn', Sizes.Saturn, SaturnImage, 0, scene);
    let Uranus = planet_creator ('Uranus', Sizes.Uranus, UranusImage, 0, scene);
    let Neptune = planet_creator ('Neptune', Sizes.Neptune, NeptuneImage, 0, scene);
    let Moon = planet_creator ('Moon', Sizes.Moon, MoonImage, Distances.Moon, Earth);


    // DISTANCES
    // currently they all have same distance between each other
    // to change that, replace distance_between for new variable with new value
    // distances through functions
    let MercuryDistance = distance + Sizes.Mercury; // must be called like this as its the first planet
    let VenusDistance = distance_calculater (MercuryDistance, Sizes.Mercury, Sizes.Venus, distance_between);
    let EarthDistance = distance_calculater (VenusDistance, Sizes.Venus, Sizes.Earth, distance_between);
    let MarsDistance = distance_calculater (EarthDistance, Sizes.Earth, Sizes.Mars, distance_between);
    let JupiterDistance = distance_calculater (MarsDistance, Sizes.Mars, Sizes.Jupiter, distance_between);
    let SaturnDistance = distance_calculater (JupiterDistance, Sizes.Jupiter, Sizes.Saturn, distance_between); 
    let UranusDistance = distance_calculater (SaturnDistance, Sizes.Saturn, Sizes.Uranus, distance_between);
    let NeptuneDistance = distance_calculater (UranusDistance, Sizes.Uranus, Sizes.Neptune, distance_between);

    

    // RINGS
    let ringsOn = true;

    // Get checkboxes
    const toggleNoRingsCheckbox = document.getElementById('NoRings');
    toggleNoRingsCheckbox.addEventListener('change', (event) => {
        ringsOn = !event.target.checked; // rings appear when unchecked
    });

    // Rings Creation
    if (ringsOn) {
        let MercuryRing = ring_creator ('MercuryRing', MercuryDistance, 0.15, RingImage, ring_angle, scene);
        let VenusRing = ring_creator ('VenusRing', VenusDistance, 0.15, RingImage, ring_angle, scene);
        let EarthRing = ring_creator ('EarthRing', EarthDistance, 0.15, RingImage, ring_angle, scene);
        let MarsRing = ring_creator ('MarsRing', MarsDistance, 0.15, RingImage, ring_angle, scene);
        let JupiterRing = ring_creator ('JupiterRing', JupiterDistance, 0.15, RingImage, ring_angle, scene);
        let SaturnRing = ring_creator ('SaturnRing', SaturnDistance, 0.15, RingImage, ring_angle, scene);
        let UranusRing = ring_creator ('UranusRing', UranusDistance, 0.15, RingImage, ring_angle, scene);
        let NeptuneRing = ring_creator ('NeptuneRing', NeptuneDistance, 0.15, RingImage, ring_angle, scene);
        let MoonRing = ring_creator ('MoonRing', Distances.Moon, 0.1, RingImage, ring_angle, Earth);
        let SaturnOuterRing = ring_creator ('SaturnOuterRing', 4, 0.8, SaturnRingImage, saturn_ring_angle, Saturn);
    }   


    // LIGHT
    const SunLight = new THREE.PointLight (Colors.Sun, 1, 3000);
    SunLight.position.set(0, 0, 0);
    scene.add (SunLight);
    const ambientlight = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
    scene.add( ambientlight );
    
    
    // Set speeds as 0
    // must be set in this file due to later modifications to variables
    let MercurySpeed = 0;
    let VenusSpeed = 0;
    let EarthSpeed = 0;
    let MarsSpeed = 0;
    let JupiterSpeed = 0;
    let SaturnSpeed = 0;
    let UranusSpeed = 0;
    let NeptuneSpeed = 0;
   


    // Botton to stop planets
    let planetsMove = true;
    // Get checkboxes
    const toggleMovementCheckbox = document.getElementById('NoMovement');
    toggleMovementCheckbox.addEventListener('change', (event) => {
        planetsMove = !event.target.checked; // Planets move when unchecked
    });

    // Botton to stop rotations
    let planetsRotate = true;
    const toggleRotationCheckbox = document.getElementById('NoRotation');
    toggleRotationCheckbox.addEventListener('change', (event) => {
        planetsRotate = !event.target.checked; // Planets rotate when unchecked
    });



    function animate() {
        requestAnimationFrame(animate);

         // Update the controls
        controls.update();

        // the value determines the speed of rotation on itself
        if (planetsRotate) {
            Mercury.rotation.y += 0.01; 
            Venus.rotation.y += 0.01; 
            Earth.rotation.y += 0.01; 
            Mars.rotation.y += 0.01; 
            Jupiter.rotation.y += 0.01; 
            Saturn.rotation.y += 0.01; 
            Uranus.rotation.y += 0.01; 
            Neptune.rotation.y += 0.01;
        }

        // Update speed of rotation around sun
        if (planetsMove) {
            MercurySpeed += 0.01;
            VenusSpeed += 0.01;
            EarthSpeed += 0.01;
            MarsSpeed += 0.01;
            JupiterSpeed += 0.01;
            SaturnSpeed += 0.01;
            UranusSpeed += 0.01;
            NeptuneSpeed += 0.01;
        }


        // Calculate new position to allow rotation
        Mercury.position.x = MercuryDistance * Math.cos(MercurySpeed);
        Mercury.position.z = MercuryDistance * Math.sin(MercurySpeed);

        Venus.position.x = VenusDistance * Math.cos(MercurySpeed);
        Venus.position.z = VenusDistance  * Math.sin(MercurySpeed);

        Earth.position.x = EarthDistance  * Math.cos(EarthSpeed);
        Earth.position.z = EarthDistance  * Math.sin(MercurySpeed);

        Mars.position.x = MarsDistance  * Math.cos(MarsSpeed);
        Mars.position.z = MarsDistance  * Math.sin(MarsSpeed);

        Jupiter.position.x = JupiterDistance  * Math.cos(JupiterSpeed);
        Jupiter.position.z = JupiterDistance  * Math.sin(JupiterSpeed);

        Saturn.position.x = SaturnDistance  * Math.cos(SaturnSpeed);
        Saturn.position.z = SaturnDistance  * Math.sin(SaturnSpeed);

        Uranus.position.x = UranusDistance  * Math.cos(UranusSpeed);
        Uranus.position.z = UranusDistance  * Math.sin(UranusSpeed);

        Neptune.position.x = NeptuneDistance  * Math.cos(NeptuneSpeed);
        Neptune.position.z = NeptuneDistance  * Math.sin(NeptuneSpeed);

        renderer.render(scene, camera);

    };


    animate();  

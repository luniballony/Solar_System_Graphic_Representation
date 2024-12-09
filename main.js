    /* 
    Solar System - Graphic Representation
    CG - efolio b 
    Matilde Carmo 2201036
    November 2024
    */


    import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 

    // imports file with constants defined
    import {Sizes, DistancesScale} from './constants.js';
    import {default_distance, distance_between, ring_angle, saturn_ring_angle, r_thickness, realistic_distance, SpeedScale} from './constants.js';
    import {image_setup, planet_creator, ring_creator, distance_calculater, update_stars, updateRings, removeRings} from './functions.js';

    import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';

    // SCENE + CONTROLS
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

    // Zoom Limits
    controls.minDistance = 2;  // Minimum zoom distance
    controls.maxDistance = 150; // Maximum zoom distance

    // Get slider and display elements
    const speedSlider = document.getElementById('speedSlider');
    const speedDisplay = document.getElementById('speedDisplay');



    // STARS
    // Create initial stars when the scene loads
    update_stars();


    // PLANETS + SUN + MOON
    // Sun + Planets + Moon image set up
    let SunImage = image_setup ("/sun.jpg");
    let MercuryImage = image_setup ("/mercury.jpg");
    let VenusImage = image_setup ("/venus.jpg");
    let EarthImageNight = image_setup ("/earthnight.jpg");
    let EarthImageDay = image_setup ("/earthday.jpg");
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
    let Mercury = planet_creator ('Mercury', Sizes.Sun * 20 * Sizes.Mercury, MercuryImage, 0, scene);
    let Venus = planet_creator ('Venus', Sizes.Sun * 15 * Sizes.Venus, VenusImage, 0, scene);
    export let Earth = planet_creator ('Earth', Sizes.Sun * 15 * Sizes.Earth, EarthImageNight, 0, scene);
    let Mars = planet_creator ('Mars', Sizes.Sun * 15 *  Sizes.Mars, MarsImage, 0, scene);
    let Jupiter = planet_creator ('Jupiter', Sizes.Sun * 3 * Sizes.Jupiter, JupiterImage, 0, scene);
    let Saturn = planet_creator ('Saturn', Sizes.Sun * 3 * Sizes.Saturn, SaturnImage, 0, scene);
    let Uranus = planet_creator ('Uranus', Sizes.Sun * 3 * Sizes.Uranus, UranusImage, 0, scene);
    let Neptune = planet_creator ('Neptune', Sizes.Sun * 3 * Sizes.Neptune, NeptuneImage, 0, scene);
    let Moon = planet_creator ('Moon', Sizes.Sun * 5 * Sizes.Moon, MoonImage, DistancesScale.Moon * 8, Earth);


    // Set earth to day time 
    let earthNightTime = true;

    const toggleNightTime = document.getElementById('DayTime');
    toggleNightTime.addEventListener ('change', (event) => {
        earthNightTime = !event.target.checked;

        // Swap texture on Earth material
        const newEarthImage = earthNightTime ? EarthImageNight : EarthImageDay;
        Earth.material.map = newEarthImage; // updates the image
        Earth.material.needsUpdate = true;   // Ensure the material updates
    });




    // DISTANCES
    // Distances for realistic mode
    let RealisticMercuryDistance = default_distance + DistancesScale.Mercury * realistic_distance;
    let RealisticVenusDistance = default_distance + DistancesScale.Venus * realistic_distance;
    let RealisticEarthDistance = default_distance + DistancesScale.Earth * realistic_distance;
    let RealisticMarsDistance = default_distance + DistancesScale.Mars * realistic_distance;
    let RealisticJupiterDistance = default_distance + DistancesScale.Jupiter * realistic_distance;
    let RealisticSaturnDistance = default_distance + DistancesScale.Saturn * realistic_distance;
    let RealisticUranusDistance = default_distance + DistancesScale.Uranus * realistic_distance;
    let RealisticNeptuneDistance = default_distance + DistancesScale.Neptune * realistic_distance;
    let RealisticNeptuneOuterRingDistance = RealisticSaturnDistance + 3;


    // Distances for Default Mode
    // All planets have same distance between each other
    // To change distance modify "distance_between" in constants.js
    let MercuryDefaultDistance = default_distance + Sizes.Mercury; // must be called like this as its the first planet
    let VenusDefaultDistance = distance_calculater (MercuryDefaultDistance, Sizes.Mercury, Sizes.Venus, distance_between);
    let EarthDefaultDistance = distance_calculater (VenusDefaultDistance, Sizes.Venus, Sizes.Earth, distance_between);
    let MarsDefaultDistance = distance_calculater (EarthDefaultDistance, Sizes.Earth, Sizes.Mars, distance_between);
    let JupiterDefaultDistance = distance_calculater (MarsDefaultDistance, Sizes.Mars, Sizes.Jupiter, distance_between);
    let SaturnDefaultDistance = distance_calculater (JupiterDefaultDistance, Sizes.Jupiter, Sizes.Saturn, distance_between); 
    let UranusDefaultDistance = distance_calculater (SaturnDefaultDistance, Sizes.Saturn, Sizes.Uranus, distance_between);
    let NeptuneDefaultDistance = distance_calculater (UranusDefaultDistance, Sizes.Uranus, Sizes.Neptune, distance_between);
    let NeptuneOuterRingDefaultDistance = DistancesScale.Saturn + 0.02;


    // Initialization of variables
    // Allows switch between Default and Realistic Values
    let MercuryDistance = MercuryDefaultDistance;
    let VenusDistance = VenusDefaultDistance;
    let EarthDistance = EarthDefaultDistance;
    let MarsDistance = MarsDefaultDistance;
    let JupiterDistance = JupiterDefaultDistance;
    let SaturnDistance = SaturnDefaultDistance;
    let UranusDistance = UranusDefaultDistance; 
    let NeptuneDistance = NeptuneDefaultDistance;
    let NeptuneOuterRingDistance = NeptuneOuterRingDefaultDistance;

    // RINGS
    // Rings Creation
    // Only uses DefaultDistance because in realistic mode is set to off
    export let ringsOn = true;

    // Get checkboxes
    const toggleNoRingsCheckbox = document.getElementById('NoRings');
    toggleNoRingsCheckbox.addEventListener('change', (event) => {
        ringsOn = !event.target.checked; // Update ringsOn based on checkbox state
        updateRings();
    });

    // Store references to the rings
    export let rings = [];

    // Function to create all rings
    export function createRings() {
        rings.push(ring_creator('MercuryRing', MercuryDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('VenusRing', VenusDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('EarthRing', EarthDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('MarsRing', MarsDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('JupiterRing', JupiterDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('SaturnRing', SaturnDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('UranusRing', UranusDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('NeptuneRing', NeptuneDefaultDistance, r_thickness, RingImage, ring_angle, scene));
        rings.push(ring_creator('MoonRing', DistancesScale.Moon * 8, 0.009, RingImage, ring_angle, Earth));
        rings.push(ring_creator('SaturnOuterRing', NeptuneOuterRingDistance, 0.8, SaturnRingImage, saturn_ring_angle, Saturn));
    };

    // Initialize rings
    if (ringsOn) {
        createRings();
    };



    // SPEEDS
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

    let planet_speed = parseFloat (speedSlider.value);

    // cannot export to functions.js because it wouldnt modify the variables as they have been 
    // defined in this file
    function control_planet_speed () {
        planet_speed = parseFloat(speedSlider.value); // Update the global speed
        speedDisplay.textContent = planet_speed.toFixed(5); // Display with 2 decimal places

        MercurySpeed = planet_speed; 
        VenusSpeed = planet_speed;
        EarthSpeed = planet_speed;
        MarsSpeed = planet_speed;
        JupiterSpeed = planet_speed;
        SaturnSpeed = planet_speed;
        UranusSpeed = planet_speed;
        NeptuneSpeed = planet_speed;
    };

    // Attach event listener to slider
    speedSlider.addEventListener('input', control_planet_speed);
    control_planet_speed();



    // LIGHT
    const SunLight = new THREE.PointLight (0x404040, 2, 3000); // intensity and range
    SunLight.position.set(0, 0, 0);
    scene.add (SunLight);
    const ambientlight = new THREE.AmbientLight( 0x404040, 2); // soft white light
    scene.add( ambientlight );



    // Button to stop planets
    let planetsMove = true;
    // Get checkboxes
    const toggleMovementCheckbox = document.getElementById('NoMovement');
    toggleMovementCheckbox.addEventListener('change', (event) => {
        planetsMove = !event.target.checked; // Planets move when unchecked
    });
    


    // Button to stop rotations
    let planetsRotate = true;
    const toggleRotationCheckbox = document.getElementById('NoRotation');
    toggleRotationCheckbox.addEventListener('change', (event) => {
        planetsRotate = !event.target.checked; // Planets rotate when unchecked
    });



    // Realistic Mode
    export let RealisticMode = false; 
    const toggleRealisticMode = document.getElementById('RealisticMode');

    // Planets array for easy access. Allows for easy modification upon Realistic Mode
    const planets = [
    { planet: Mercury, defaultSize: Sizes.Mercury * 20 * Sizes.Sun, realisticSize: Sizes.Mercury * Sizes.Sun},
    { planet: Venus, defaultSize: Sizes.Venus * 15 * Sizes.Sun, realisticSize: Sizes.Venus * Sizes.Sun},
    { planet: Earth, defaultSize: Sizes.Earth * 15 * Sizes.Sun, realisticSize: Sizes.Earth * Sizes.Sun},
    { planet: Mars, defaultSize: Sizes.Mars  * 15 * Sizes.Sun, realisticSize: Sizes.Mars * Sizes.Sun },
    { planet: Jupiter, defaultSize: Sizes.Jupiter  * 3 * Sizes.Sun, realisticSize: Sizes.Jupiter * Sizes.Sun},
    { planet: Saturn, defaultSize: Sizes.Saturn  * 3 * Sizes.Sun, realisticSize: Sizes.Saturn * Sizes.Sun},
    { planet: Uranus, defaultSize: Sizes.Uranus * 3 * Sizes.Sun, realisticSize: Sizes.Uranus * Sizes.Sun},
    { planet: Neptune, defaultSize: Sizes.Neptune * 3 * Sizes.Sun, realisticSize: Sizes.Neptune * Sizes.Sun},
    { planet: Moon, defaultSize: Sizes.Moon * 5 * Sizes.Sun, realisticSize: Sizes.Moon * Sizes.Sun},
    ];


    toggleRealisticMode.addEventListener ('change', (event) => {
        RealisticMode = event.target.checked;

        if (RealisticMode) {
            // Update planets to realistic sizes
            planets.forEach(({ planet, realisticSize }) => {
                const geometry = new THREE.SphereGeometry(realisticSize, 30, 30);
                planet.geometry = geometry;
                planet.geometry.needsUpdate = true;
            });

            // update sun size
            const RealisticSunGeometry = new THREE.SphereGeometry(Sizes.Realistic_Sun, 30, 30);
            Sun.geometry = RealisticSunGeometry;
            Sun.geometry.needsUpdate = true;      
            
            removeRings ();
            
            // update distance
            MercuryDistance = RealisticMercuryDistance;
            VenusDistance = RealisticVenusDistance;
            EarthDistance = RealisticEarthDistance;
            MarsDistance = RealisticMarsDistance;
            JupiterDistance = RealisticJupiterDistance;
            SaturnDistance = RealisticSaturnDistance;
            UranusDistance = RealisticUranusDistance;
            NeptuneDistance = RealisticNeptuneDistance; 

        }
        else {    
        
            // On Default Mode
            // Update sun size
            const RealisticSunGeometry = new THREE.SphereGeometry(Sizes.Sun, 60, 60);
            Sun.geometry = RealisticSunGeometry;
            Sun.geometry.needsUpdate = true;   
            toggleNoRingsCheckbox.checked = true;

            createRings ();

            // Update planets to default sizes
            planets.forEach(({ planet, defaultSize }) => {
                const geometry = new THREE.SphereGeometry(defaultSize, 60, 60);
                planet.geometry = geometry;
                planet.geometry.needsUpdate = true;
            });

            // update distances to default
            MercuryDistance = MercuryDefaultDistance;
            VenusDistance = VenusDefaultDistance;
            EarthDistance = EarthDefaultDistance;
            MarsDistance = MarsDefaultDistance;
            JupiterDistance = JupiterDefaultDistance;
            SaturnDistance = SaturnDefaultDistance;
            UranusDistance = UranusDefaultDistance; 
            NeptuneDistance = NeptuneDefaultDistance;
        }
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
            MercurySpeed += planet_speed;
            VenusSpeed += planet_speed;
            EarthSpeed += planet_speed;
            MarsSpeed += planet_speed;
            JupiterSpeed += planet_speed;
            SaturnSpeed += planet_speed;
            UranusSpeed += planet_speed;
            NeptuneSpeed += planet_speed;
        }


        // Calculate new position to allow rotation
        Mercury.position.x = MercuryDistance * Math.cos(MercurySpeed * SpeedScale.Mercury);
        Mercury.position.z = MercuryDistance * Math.sin(MercurySpeed * SpeedScale.Mercury);

        Venus.position.x = VenusDistance * Math.cos(VenusSpeed * SpeedScale.Venus);
        Venus.position.z = VenusDistance  * Math.sin(VenusSpeed * SpeedScale.Venus);

        Earth.position.x = EarthDistance  * Math.cos(EarthSpeed * SpeedScale.Earth);
        Earth.position.z = EarthDistance  * Math.sin(EarthSpeed * SpeedScale.Earth);

        Mars.position.x = MarsDistance  * Math.cos(MarsSpeed * SpeedScale.Mars);
        Mars.position.z = MarsDistance  * Math.sin(MarsSpeed * SpeedScale.Mars);

        Jupiter.position.x = JupiterDistance  * Math.cos(JupiterSpeed * SpeedScale.Jupiter);
        Jupiter.position.z = JupiterDistance  * Math.sin(JupiterSpeed * SpeedScale.Jupiter);

        Saturn.position.x = SaturnDistance  * Math.cos(SaturnSpeed * SpeedScale.Saturn);
        Saturn.position.z = SaturnDistance  * Math.sin(SaturnSpeed * SpeedScale.Saturn);

        Uranus.position.x = UranusDistance  * Math.cos(UranusSpeed * SpeedScale.Uranus);
        Uranus.position.z = UranusDistance  * Math.sin(UranusSpeed * SpeedScale.Uranus);

        Neptune.position.x = NeptuneDistance  * Math.cos(NeptuneSpeed * SpeedScale.Neptune);
        Neptune.position.z = NeptuneDistance  * Math.sin(NeptuneSpeed * SpeedScale.Neptune);

        renderer.render(scene, camera);

    };


    animate();  

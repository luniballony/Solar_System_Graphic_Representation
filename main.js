    // efolio b - matilde carmo 2201036 v1
    // v1 : Sizes and Colors set
    import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 

    // imports file with constants defined
    import {Sizes, Colors, Distances, DistancesScale} from './constants.js';
    import {default_distance, distance_between, r_smoothness, ring_angle, saturn_ring_angle, r_thickness, realistic_distance, SpeedScale} from './constants.js';
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

    // Get slider and display elements
    const speedSlider = document.getElementById('speedSlider');
    const speedDisplay = document.getElementById('speedDisplay');

   

    // STARS
    // Reference to the current group of stars
    let tiny_star; 
    let medium_star;
    let big_star;
    

    function update_stars() {
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
    starSlider.addEventListener('input', update_stars);
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
    let Mercury = planet_creator ('Mercury', Sizes.Sun * Sizes.Mercury , MercuryImage, 0, scene);
    let Venus = planet_creator ('Venus', Sizes.Sun * Sizes.Venus, VenusImage, 0, scene);
    let Earth = planet_creator ('Earth', Sizes.Sun * Sizes.Earth, EarthImageNight, 0, scene);
    let Mars = planet_creator ('Mars', Sizes.Sun *  Sizes.Mars, MarsImage, 0, scene);
    let Jupiter = planet_creator ('Jupiter', Sizes.Sun * Sizes.Jupiter, JupiterImage, 0, scene);
    let Saturn = planet_creator ('Saturn', Sizes.Sun * Sizes.Saturn, SaturnImage, 0, scene);
    let Uranus = planet_creator ('Uranus', Sizes.Sun * Sizes.Uranus, UranusImage, 0, scene);
    let Neptune = planet_creator ('Neptune', Sizes.Sun * Sizes.Neptune, NeptuneImage, 0, scene);
    let Moon = planet_creator ('Moon', Sizes.Sun * Sizes.Moon, MoonImage, Distances.Moon, Earth);

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
    let RealisticMercuryDistance = DistancesScale.Mercury * realistic_distance;
    let RealisticVenusDistance = DistancesScale.Venus * realistic_distance;
    let RealisticEarthDistance = DistancesScale.Earth * realistic_distance;
    let RealisticMarsDistance = DistancesScale.Mars * realistic_distance;
    let RealisticJupiterDistance = DistancesScale.Jupiter * realistic_distance;
    let RealisticSaturnDistance = DistancesScale.Saturn * realistic_distance;
    let RealisticUranusDistance = DistancesScale.Uranus * realistic_distance;
    let RealisticNeptuneDistance = DistancesScale.Neptune * realistic_distance;
    /*


    // Realistic distances
    let RealisticDistance = {
        Mercury: DistancesScale.Mercury * realistic_distance,
        Venus: DistancesScale.Venus * realistic_distance,
        Earth: DistancesScale.Earth * realistic_distance,
        Mars: DistancesScale.Mars * realistic_distance,
        Jupiter: DistancesScale.Jupiter * realistic_distance,
        Saturn: DistancesScale.Saturn * realistic_distance,
        Uranus: DistancesScale.Uranus * realistic_distance,
        Neptune: DistancesScale.Neptune * realistic_distance,
    }; 
 
    // currently they all have same distance between each other
    // to change that, replace distance_between for new variable with new value
    // distances through functions
    // dsitancias para modo não realista
    let MercuryDefaultDistance = distance + Sizes.Mercury; // must be called like this as its the first planet
    let VenusDefaultDistance = distance_calculater (MercuryDistance, Sizes.Mercury, Sizes.Venus, distance_between);
    let EarthDefaultDistance = distance_calculater (VenusDistance, Sizes.Venus, Sizes.Earth, distance_between);
    let MarsDefaultDistance = distance_calculater (EarthDistance, Sizes.Earth, Sizes.Mars, distance_between);
    let JupiterDefaultistance = distance_calculater (MarsDistance, Sizes.Mars, Sizes.Jupiter, distance_between);
    let SaturnDefaultDistance = distance_calculater (JupiterDistance, Sizes.Jupiter, Sizes.Saturn, distance_between); 
    let UranusDefaultDistance = distance_calculater (SaturnDistance, Sizes.Saturn, Sizes.Uranus, distance_between);
    let NeptuneDefaultDistance = distance_calculater (UranusDistance, Sizes.Uranus, Sizes.Neptune, distance_between);
    */ 

    let MercuryDefaultDistance = default_distance + Sizes.Mercury; // must be called like this as its the first planet
    let VenusDefaultDistance = distance_calculater (MercuryDefaultDistance, Sizes.Mercury, Sizes.Venus, distance_between);
    let EarthDefaultDistance = distance_calculater (VenusDefaultDistance, Sizes.Venus, Sizes.Earth, distance_between);
    let MarsDefaultDistance = distance_calculater (EarthDefaultDistance, Sizes.Earth, Sizes.Mars, distance_between);
    let JupiterDefaultDistance = distance_calculater (MarsDefaultDistance, Sizes.Mars, Sizes.Jupiter, distance_between);
    let SaturnDefaultDistance = distance_calculater (JupiterDefaultDistance, Sizes.Jupiter, Sizes.Saturn, distance_between); 
    let UranusDefaultDistance = distance_calculater (SaturnDefaultDistance, Sizes.Saturn, Sizes.Uranus, distance_between);
    let NeptuneDefaultDistance = distance_calculater (UranusDefaultDistance, Sizes.Uranus, Sizes.Neptune, distance_between);
   

    // initialization of variables
    // allows switch between Default and Realistic Values
    let MercuryDistance = MercuryDefaultDistance;
    let VenusDistance = VenusDefaultDistance;
    let EarthDistance = EarthDefaultDistance;
    let MarsDistance = MarsDefaultDistance;
    let JupiterDistance = JupiterDefaultDistance;
    let SaturnDistance = SaturnDefaultDistance;
    let UranusDistance = UranusDefaultDistance; 
    let NeptuneDistance = NeptuneDefaultDistance;
   

    // RINGS
    let ringsOn = true;

    // Get checkboxes
    const toggleNoRingsCheckbox = document.getElementById('NoRings');
    toggleNoRingsCheckbox.addEventListener('change', (event) => {
        ringsOn = !event.target.checked; // rings appear when unchecked
    });


    // Rings Creation
    // Only uses DefaultDistance because in realistic mode is set to off
    if (ringsOn) {
        let MercuryRing = ring_creator ('MercuryRing', MercuryDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let VenusRing = ring_creator ('VenusRing', VenusDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let EarthRing = ring_creator ('EarthRing', EarthDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let MarsRing = ring_creator ('MarsRing', MarsDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let JupiterRing = ring_creator ('JupiterRing', JupiterDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let SaturnRing = ring_creator ('SaturnRing', SaturnDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let UranusRing = ring_creator ('UranusRing', UranusDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let NeptuneRing = ring_creator ('NeptuneRing', NeptuneDefaultDistance, r_thickness, RingImage, ring_angle, scene);
        let MoonRing = ring_creator ('MoonRing', Distances.Moon, r_thickness, RingImage, ring_angle, Earth);
        let SaturnOuterRing = ring_creator ('SaturnOuterRing', Sizes.Saturn + 0.02 , 0.8, SaturnRingImage, saturn_ring_angle, Saturn); 
    }   



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

    function control_planet_speed () {
        planet_speed = parseFloat(speedSlider.value); // Update the global speed
        speedDisplay.textContent = planet_speed.toFixed(5); // Display with 2 decimal places

        MercurySpeed = planet_speed; // Update Mercury's speed directly
        VenusSpeed = planet_speed;
        EarthSpeed = planet_speed;
        MarsSpeed = planet_speed;
        JupiterSpeed = planet_speed;
        SaturnSpeed = planet_speed;
        UranusSpeed = planet_speed;
        NeptuneSpeed = planet_speed;
    }
    
    // Attach event listener to slider
    speedSlider.addEventListener('input', control_planet_speed);
    control_planet_speed();
   



    // LIGHT
    const SunLight = new THREE.PointLight (Colors.Sun, 1, 3000);
    SunLight.position.set(0, 0, 0);
    scene.add (SunLight);
    const ambientlight = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
    scene.add( ambientlight );
    


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



  // Realistic Mode
  let RealisticMode = false; 


  const toggleRealisticMode = document.getElementById('RealisticMode');
  toggleRealisticMode.addEventListener ('change', (event) => {
      RealisticMode = event.target.checked;

      if (RealisticMode) {
        // update sun size
        const RealisticSun = 10; 
        const RealisticSunGeometry = new THREE.SphereGeometry(RealisticSun, 30, 30);
        Sun.geometry = RealisticSunGeometry;
        Sun.geometry.needsUpdate = true;        

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
        const RealisticSunGeometry = new THREE.SphereGeometry(Sizes.Sun, 60, 60);
        Sun.geometry = RealisticSunGeometry;
        Sun.geometry.needsUpdate = true;   

        MercuryDistance = MercuryDefaultDistance;
        VenusDistance = VenusDefaultDistance;
        EarthDistance = EarthDefaultDistance;
        MarsDistance = MarsDefaultDistance;
        JupiterDistance = JupiterDefaultDistance;
        SaturnDistance = SaturnDefaultDistance;
        UranusDistance = UranusDefaultDistance; 
        NeptuneDistance = NeptuneDefaultDistance;
    }

      /*

      MercuryDistance = RealisticDistance.Mercury ;
      VenusDistance = RealisticDistance.Venus ;
      EarthDistance = RealisticDistance.Earth;
      MarsDistance = RealisticDistance.Mars ;
      JupiterDistance = RealisticDistance.Jupiter;
      SaturnDistance = RealisticDistance.Saturn;
      UranusDistance = RealisticDistance.Uranus;
      NeptuneDistance = RealisticDistance.Neptune; */ 
      // update rings
      // update speed


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

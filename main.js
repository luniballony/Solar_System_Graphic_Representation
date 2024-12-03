    // efolio b - matilde carmo 2201036 v1
    // v1 : Sizes and Colors set
    import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 

    // imports file with constants defined
    import {Sizes, Colors, Distances} from './constants.js';
    // backup
    //import {MercuryDistance, VenusDistance, EarthDistance, MarsDistance, 
      //  JupiterDistance, SaturnDistance, UranusDistance, NeptuneDistance} from './constants.js';

    import {distance, distance_between, distance_calculater, r_smoothness} from './constants.js';

    
    const Shine = 18;
    //const distance = 12.2; //sets distance between planets in case we want it to be the same between all
    const distance_2 = 4;


   
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(115, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 90; // positions the camera (how far/close it is to the objects)
    camera.position.y = 15;

    const renderer = new THREE.WebGLRenderer();          
    renderer.setSize(window.innerWidth, window.innerHeight); // Defines the window size to be a square
    document.body.appendChild(renderer.domElement);


    // Function for planet creation
    function planet_creator (p_name, p_size, p_color) {
        const planet_geometry = new THREE.SphereGeometry(p_size, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
        const planet_material = new THREE.MeshPhongMaterial ({
            color: p_color,
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
    function ring_creator (r_name, r_distance, r_color) {
        const RingOuterRadius = r_distance;  
        const RingInnerRadius = r_distance - 0.4;  
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

   


    // Planet + Sun Creation
    let Sun = planet_creator ('Sun', Sizes.Sun, Colors.Sun); 
    let Mercury = planet_creator ('Mercury', Sizes.Mercury, Colors.Mercury);
    let Venus = planet_creator ('Venus', Sizes.Venus, Colors.Venus);
    let Earth = planet_creator ('Earth', Sizes.Earth, Colors.Earth);
    let Mars = planet_creator ('Mars', Sizes.Mars, Colors.Mars);
    let Jupiter = planet_creator ('Jupiter', Sizes.Jupiter, Colors.Jupiter);
    let Saturn = planet_creator ('Saturn', Sizes.Saturn, Colors.Saturn);
    let Uranus = planet_creator ('Uranus', Sizes.Uranus, Colors.Uranus);
    let Neptune = planet_creator ('Neptune', Sizes.Neptune, Colors.Neptune);


    // Moon
    const MoonGeometry = new THREE.SphereGeometry(Sizes.Moon, 30, 30); // 1st: radius, 2nd: horizontal smooth appearance, 3rd: vetical smooth appearance
    const MoonMaterial = new THREE.MeshPhongMaterial ({
        color: Colors.Moon,
        specular: 0x33333,   // Specular color, adjust for shininess
        shininess: Shine     // Higher shininess = smaller, sharper reflections
    });
    const Moon = new THREE.Mesh(MoonGeometry, MoonMaterial);
    Moon.scale.set(1, 1, 1); // Resizes the sphere
    Moon.position.set(Distances.Moon, 0, 0); // places moon 
    Earth.add(Moon);


    // distances through functions
    let MercuryDistance = distance + Sizes.Mercury; // must be called like this as its the first planet
    let VenusDistance = distance_calculater (MercuryDistance, Sizes.Mercury, Sizes.Venus, distance_between);
    let EarthDistance = distance_calculater (VenusDistance, Sizes.Venus, Sizes.Earth, distance_between);
    let MarsDistance = distance_calculater (EarthDistance, Sizes.Earth, Sizes.Mars, distance_between);
    let JupiterDistance = distance_calculater (MarsDistance, Sizes.Mars, Sizes.Jupiter, distance_between);
    let SaturnDistance = distance_calculater (JupiterDistance, Sizes.Jupiter, Sizes.Saturn, distance_between); 
    let UranusDistance = distance_calculater (SaturnDistance, Sizes.Saturn, Sizes.Uranus, distance_between);
    let NeptuneDistance = distance_calculater (UranusDistance, Sizes.Uranus, Sizes.Neptune, distance_between);


    // Rings Creation
    let MercuryRing = ring_creator ('MercuryRing', MercuryDistance, Colors.Rings);
    let VenusRing = ring_creator ('VenusRing', VenusDistance, Colors.Rings);
    let EarthRing = ring_creator ('EarthRing', EarthDistance, Colors.Rings);
    let MarsRing = ring_creator ('MarsRing', MarsDistance, Colors.Rings);
    let JupiterRing = ring_creator ('JupiterRing', JupiterDistance, Colors.Rings);
    let SaturnRing = ring_creator ('SaturnRing', SaturnDistance, Colors.Rings);
    let UranusRing = ring_creator ('UranusRing', UranusDistance, Colors.Rings);
    let NeptuneRing = ring_creator ('NeptuneRing', NeptuneDistance, Colors.Rings);


    // Saturn Outer Ring 
    const SaturnOuterRingOuterRadius = 4;  
    const SaturnOuterRingInnerRadius = 3.2;  
    const SaturnOuterRingThetaSegments = r_smoothness;  // number of segments makes ring smoother    
    // Create the ring geometry
    const SaturnOuterRingGeometry = new THREE.RingGeometry(SaturnOuterRingOuterRadius, SaturnOuterRingInnerRadius, SaturnOuterRingThetaSegments);
    const SaturnOuterRingMaterial = new THREE.MeshBasicMaterial({
        color: Colors.SaturnOuterRing, // Set to desired, r_color: makes it so that you can change color of each ring
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const SaturnOuterRing = new THREE.Mesh(SaturnOuterRingGeometry, SaturnOuterRingMaterial);
    SaturnOuterRing.position.set(0, 0, 0); // position of ring
    SaturnOuterRing.rotation.x = Math.PI / 2 - 0.8; // Makes the ring horizontal
    SaturnOuterRing.rotation.y = 0; 
    SaturnOuterRing.rotation.z = 0; 
    Saturn.add(SaturnOuterRing); 


    // LIGHT
    const pointLight = new THREE.PointLight(0xffffff, 1.3); // Color, intensity
    pointLight.position.set(0, 10, 30);  // Position of the light
    scene.add(pointLight);

    
    
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
   

    function animate() {
        requestAnimationFrame(animate);

        // the value determines the speed of rotation
        Mercury.rotation.y += 0.01; 
        Venus.rotation.y += 0.01; 
        Earth.rotation.y += 0.01; 
        Mars.rotation.y += 0.01; 
        Jupiter.rotation.y += 0.01; 
        Saturn.rotation.y += 0.01; 
        Uranus.rotation.y += 0.01; 
        Neptune.rotation.y += 0.01; 

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
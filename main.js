    // efolio b - matilde carmo 2201036 v1
    // v1 : Sizes and Colors set
    import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js'; 

    // imports file with constants defined
    import {Sizes, Colors, Distances} from './constants.js';

    // easier to manage the code and test sizes
    const SpeedRotation = 0.025;
    const Shine = 18;
    const distance = 14; //sets distance between planets in case we want it to be the same between all

    const radius = 10; // Distance from the rotation center
    let angle = 0; // Initial angle


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(115, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100; // positions the camera (how far/close it is to the objects)
    camera.position.y = 15;

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
    Mercury.position.set(distance * Distances.Mercury, 0, 0); // Moves the sphere on the screen (horizontally)
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
    Venus.position.set(distance * Distances.Venus, 0, 0); // Moves the sphere on the screen (horizontally)
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
    Earth.position.set((distance * Distances.Earth), 0, 0); // Moves the sphere on the screen (horizontally)
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
    Moon.position.set(Distances.Moon, 0, 0); // Moves the sphere on the screen (horizontally)
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
    Mars.position.set(distance * Distances.Mars, 0, 0); // Moves the sphere on the screen (horizontally)
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
    Jupiter.position.set(distance * Distances.Jupiter, 0, 0); // Moves the sphere on the screen (horizontally)
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
    Jupiter.position.set(distance * Distances.Saturn, 0, 0); // Moves the sphere on the screen (horizontally)
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
    Uranus.position.set(distance * Distances.Uranus, 0, 0); // Moves the sphere on the screen (horizontally)
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
    Neptune.position.set(distance * 50, 0, 0); // Moves the sphere on the screen (horizontally)
    scene.add(Neptune);



    // RINGS


    // Mercury Ring    
    const MercuryRingOuterRadius = distance + Sizes.Mercury ;  
    const MercuryRingInnerRadius = distance - 0.4 + Sizes.Mercury;  
    const MercuryRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const MercuryRingGeometry = new THREE.RingGeometry(MercuryRingInnerRadius, MercuryRingOuterRadius, MercuryRingThetaSegments);
    const MercuryRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const MercuryRing = new THREE.Mesh(MercuryRingGeometry, MercuryRingMaterial);
    MercuryRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    MercuryRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    MercuryRing.rotation.y = 0; 
    MercuryRing.rotation.z = 0; 
    scene.add(MercuryRing);   

    //Venus Ring 
    const VenusRingOuterRadius = distance + Sizes.Venus + Distances.Venus;  
    const VenusRingInnerRadius = distance - 0.4 + Sizes.Venus + Distances.Venus;  
    const VenusRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const VenusRingGeometry = new THREE.RingGeometry(VenusRingInnerRadius, VenusRingOuterRadius, VenusRingThetaSegments);
    const VenusRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const VenusRing = new THREE.Mesh(VenusRingGeometry, VenusRingMaterial);
    VenusRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    VenusRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    VenusRing.rotation.y = 0; 
    VenusRing.rotation.z = 0; 
    scene.add(VenusRing); 

    // Earth Ring
    const EarthRingOuterRadius = distance + Sizes.Earth + Distances.Earth;  
    const EarthRingInnerRadius = distance - 0.4 + Sizes.Earth + Distances.Earth;  
    const EarthRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const EarthRingGeometry = new THREE.RingGeometry(EarthRingInnerRadius, EarthRingOuterRadius, EarthRingThetaSegments);
    const EarthRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const EarthRing = new THREE.Mesh(EarthRingGeometry, EarthRingMaterial);
    EarthRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    EarthRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    EarthRing.rotation.y = 0; 
    EarthRing.rotation.z = 0; 
    scene.add(EarthRing); 
    
    // Mars Ring
    const MarsRingOuterRadius = distance + Sizes.Mars + Distances.Mars;  
    const MarsRingInnerRadius = distance - 0.4 + Sizes.Mars + Distances.Mars;  
    const MarsRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const MarsRingGeometry = new THREE.RingGeometry(MarsRingInnerRadius, MarsRingOuterRadius, MarsRingThetaSegments);
    const MarsRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const MarsRing = new THREE.Mesh(MarsRingGeometry, MarsRingMaterial);
    MarsRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    MarsRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    MarsRing.rotation.y = 0; 
    MarsRing.rotation.z = 0; 
    scene.add(MarsRing); 
    
    // Jupiter Ring
    const JupiterRingOuterRadius = distance + Sizes.Jupiter + Distances.Jupiter;  
    const JupiterRingInnerRadius = distance - 0.4 + Sizes.Jupiter + Distances.Jupiter;  
    const JupiterRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const JupiterRingGeometry = new THREE.RingGeometry(JupiterRingInnerRadius, JupiterRingOuterRadius, JupiterRingThetaSegments);
    const JupiterRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const JupiterRing = new THREE.Mesh(JupiterRingGeometry, JupiterRingMaterial);
    JupiterRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    JupiterRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    JupiterRing.rotation.y = 0; 
    JupiterRing.rotation.z = 0; 
    scene.add(JupiterRing);


    // Saturn Ring
    const SaturnRingOuterRadius = distance + Sizes.Saturn + Distances.Saturn;  
    const SaturnRingInnerRadius = distance - 0.4 + Sizes.Saturn + Distances.Saturn;  
    const SaturnRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const SaturnRingGeometry = new THREE.RingGeometry(SaturnRingInnerRadius, SaturnRingOuterRadius, SaturnRingThetaSegments);
    const SaturnRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const SaturnRing = new THREE.Mesh(SaturnRingGeometry, SaturnRingMaterial);
    SaturnRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    SaturnRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    SaturnRing.rotation.y = 0; 
    SaturnRing.rotation.z = 0; 
    scene.add(SaturnRing);

    // Uranus Ring
    const UranusRingOuterRadius = distance + Sizes.Uranus + Distances.Uranus;  
    const UranusRingInnerRadius = distance - 0.4 + Sizes.Uranus + Distances.Uranus;  
    const UranusRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const UranusRingGeometry = new THREE.RingGeometry(UranusRingInnerRadius, UranusRingOuterRadius, UranusRingThetaSegments);
    const UranusRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const UranusRing = new THREE.Mesh(UranusRingGeometry, UranusRingMaterial);
    UranusRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    UranusRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    UranusRing.rotation.y = 0; 
    UranusRing.rotation.z = 0; 
    scene.add(UranusRing);

    // Neptune Ring 
    const NeptuneRingOuterRadius = distance + Sizes.Neptune + Distances.Neptune;  
    const NeptuneRingInnerRadius = distance - 0.4 + Sizes.UrNeptuneanus + Distances.Neptune;  
    const NeptuneRingThetaSegments = 50;  // number of segments makes ring smoother    
    // Create the ring geometry
    const NeptuneRingGeometry = new THREE.RingGeometry(NeptuneRingInnerRadius, NeptuneRingOuterRadius, NeptuneRingThetaSegments);
    const NeptuneRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Set your desired color
        side: THREE.DoubleSide, // Render both sides of the ring
    });
    const NeptuneRing = new THREE.Mesh(NeptuneRingGeometry, NeptuneRingMaterial);
    NeptuneRing.position.set( 1, 0, 0); // Moves the sphere on the screen (horizontally)
    NeptuneRing.rotation.x = Math.PI / 2; // Makes the ring horizontal
    NeptuneRing.rotation.y = 0; 
    NeptuneRing.rotation.z = 0; 
    scene.add(NeptuneRing);

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

        Mercury.rotation.y += 0.01; 
        Venus.rotation.y += 0.01; 
        Earth.rotation.y += 0.01; // the value determines the speed
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
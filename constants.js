    /* 
    Solar System - Graphic Representation
    CG - efolio b 
    Matilde Carmo 2201036
    November 2024
    */


// constants.js

// Sizes 
export let Sizes = {
    Sun : 16,
    Realistic_Sun : 35,
    Mercury: 0.004,
    Venus: 0.01,
    Earth: 0.01,
    Mars: 0.005,
    Jupiter: 0.1,
    Saturn: 0.09,
    Uranus: 0.04,
    Neptune: 0.04,
    Stars: 1,       // must be a low value to avoid lag and crash
    Moon: 0.002,
};



// Scale for distances
export const DistancesScale = {
    Mercury : 0.4,
    Venus : 0.7,
    Earth : 1, // Base Distance
    Mars : 1.5,
    Jupiter : 2.8,
    Saturn : 5.2,
    Uranus : 9.6,
    Neptune : 30,
    Moon: 0.5,
    SaturnOuterRing: 3,
};


export let SpeedScale = {

    Mercury: 1.59,
    Venus: 1.17,
    Earth: 1, // Base speed
    Mars: 0.81,
    Jupiter: 0.44,
    Saturn: 0.33,
    Uranus: 0.23,
    Neptune: 0.18,
};


// Colors  
export const Colors = {
    Stars : 0xffffff,
    Rings: 0xffffff,
};


// Distances
export let default_distance = Sizes.Sun + 20; //sets distance between planets in case we want it to be the same between all
export let distance_between = 15; // sets distance between planets in Default Mode
export let realistic_distance = Sizes.Realistic_Sun * 3; // if sun radius = 10 with Sun-Mercury = 20


// others
export let ring_angle = Math.PI / 2; // ring angle for planets + moon
export let saturn_ring_angle = Math.PI / 2 - 0.8; // ring angle for saturn's ring
export let r_smoothness = 80; // ring smoothness. the higher the more smooth the ring will be
export let r_thickness = 0.03 * Sizes.Sun; // ring tickness
export let star_range = 800; 

export const Shine = 18;







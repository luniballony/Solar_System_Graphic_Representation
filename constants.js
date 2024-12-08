// constants.js
// dont forget to add the list name to the index.html file

// Sizes 
export let Sizes = {
    Sun : 16,
    Mercury: 0.004,
    Venus: 0.01,
    Earth: 0.01,
    Mars: 0.005,
    Jupiter: 0.1,
    Saturn: 0.09,
    Uranus: 0.04,
    Neptune: 0.04,
    Stars: 4,
    Moon: 0.002,
};



// Distances - the distances shall be calculated as distance * specific_planet so that the slider is easier to code
export const Distances = {
    Mercury : 2,
    Venus : 2,
    Earth : 2,
    Mars : 2,
    Jupiter : 2,
    Saturn : 2,
    Uranus : 2,
    Neptune : 2,
    Moon: 3,
    SaturnOuterRing: 3,
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
    Sun : 0xf5c64f,
    Mercury : 0xCC0000,
    Venus : 0x0f0f0f,
    Earth : 0x4FB06D,
    Mars : 0xEDE8D0,
    Jupiter : 0xEDE8D0,
    Saturn : 0xEDE8D0,
    Uranus : 0xADD8E6,
    Neptune : 0xADD8E6, 
    Stars : 0xffffff,
    Moon: 0xffffff,
    Rings: 0xffffff,
    SaturnOuterRing: 0xADD8E6,
};


// Distances
export let default_distance = Sizes.Sun + 20; //sets distance between planets in case we want it to be the same between all
export let distance_between = 4;
export let realistic_distance = 75; // if sun ray = 10 with Sun-Mercury = 20
export let ring_angle = Math.PI / 2;
export let saturn_ring_angle = Math.PI / 2 - 0.8;


// others
export let r_smoothness = 70; // ring smoothness. the higher the more smooth the ring will be
export let r_thickness = 0.005 * Sizes.Sun;

export const Shine = 18;







// constants.js
// dont forget to add the list name to the index.html file

// Sizes 
export const Sizes = {
    Sun : 12,
    Mercury: 1,
    Venus: 1,
    Earth: 2,
    Mars: 2,
    Jupiter: 4,
    Saturn: 3,
    Uranus: 3,
    Neptune: 2.5,
    Stars: 4,
    Moon: 0.5,
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
 
// Colors  
export const Colors = {
    Sun : 0xE3AD27,
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



// Initial planet speed
// set speeds as 0
export let MercurySpeed = 0;
export let VenusSpeed = 0;
export let EarthSpeed = 0;
export let MarsSpeed = 0;
export let JupiterSpeed = 0;
export let SaturnSpeed = 0;
export let UranusSpeed = 0;
export let NeptuneSpeed = 0;


// Distances
export let distance = 12.2; //sets distance between planets in case we want it to be the same between all
export let distance_between = 4;





// others
export let r_smoothness = 70; // ring smoothness. the higher the more smooth the ring will be






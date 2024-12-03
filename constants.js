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
};



// Speed
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


// currently they all have same distance between each other
// to change that, replace distance_2 for new variable with new value
// format: Previous_dist + previous_plan_radius + current_plan_radius + distance_between_plan
export let MercuryDistance = distance + Sizes.Mercury;
export let VenusDistance = MercuryDistance + Sizes.Mercury + Sizes.Venus + distance_between;
export let EarthDistance = VenusDistance + Sizes.Venus + Sizes.Earth + distance_between;
export let MarsDistance = EarthDistance + Sizes.Earth + Sizes.Mars + distance_between;
export let JupiterDistance = MarsDistance + Sizes.Mars + Sizes.Jupiter + distance_between;
export let SaturnDistance = JupiterDistance + Sizes.Jupiter + Sizes.Saturn + distance_between;
export let UranusDistance = SaturnDistance + Sizes.Saturn + Sizes.Uranus + distance_between;
export let NeptuneDistance = UranusDistance + Sizes.Uranus + Sizes.Neptune + distance_between;

// allows for modifications done to variables like distance_between and therefore to have an effect
export function distance_calculater (Previous_dist, previous_plan_radius, current_plan_radius, distance_between_plan) {
    let random = previous_plan_radius + current_plan_radius + distance_between_plan + Previous_dist;
    return random;
}; 


// others
export let r_smoothness = 70; // ring smoothness. the higher the more smooth the ring will be






const img_home_ice_cream = document.querySelector('.home-ice-cream');
const home_img_div = document.querySelector('.home-image-div');

const BORDER_RADIUS_MOUSE_OUT = `${260}px ${10}px ${10}px ${10}px`;
const BORDER_RADIUS_MOUSE_ENTER = `${10}px ${10}px ${10}px ${10}px`;
const TRANSITION_VALUE = `${0.5}s`;

img_home_ice_cream.addEventListener('mouseenter', (e) => {
    home_img_div.style.borderRadius = BORDER_RADIUS_MOUSE_ENTER;
    home_img_div.style.transition = TRANSITION_VALUE;
})

img_home_ice_cream.addEventListener('mouseout', (e) => {
    home_img_div.style.borderRadius = BORDER_RADIUS_MOUSE_OUT;
    home_img_div.style.transition = TRANSITION_VALUE;
})
function openMobileMenu() {
    const hamburguer = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.menu');

    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
    })

    document.querySelectorAll('.menu li a').forEach(n => n.addEventListener('click', () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    }))
}

openMobileMenu();

function iceCreamHomeAnimation() {
    const imgHomeIceCream = document.querySelector('.home-ice-cream');
    const homeImgDiv = document.querySelector('.home-image-div');

    const BORDER_RADIUS_MOUSE_OUT = `${260}px ${10}px ${10}px ${10}px`;
    const BORDER_RADIUS_MOUSE_ENTER = `${10}px ${10}px ${10}px ${10}px`;
    const TRANSITION_VALUE = `${0.5}s`;

    imgHomeIceCream.addEventListener('mouseenter', (e) => {
        homeImgDiv.style.borderRadius = BORDER_RADIUS_MOUSE_ENTER;
        homeImgDiv.style.transition = TRANSITION_VALUE;
    })

    imgHomeIceCream.addEventListener('mouseout', (e) => {
        homeImgDiv.style.borderRadius = BORDER_RADIUS_MOUSE_OUT;
        homeImgDiv.style.transition = TRANSITION_VALUE;
    })
}

//iceCreamHomeAnimation();
class PageInteraction {
    constructor() {
        this.openMobileMenu();
        this.iceCreamHomeAnimation();
    }

    openMobileMenu() {
        // Elementos HTML selecionados
        const hamburguer = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('.menu');
        
        // Evento definido para abrir ou fechar o menu quando for clicado
        hamburguer.addEventListener('click', () => {
            hamburguer.classList.toggle('active');
            navMenu.classList.toggle('active');
        })
    
        // Evento para fechar o menu quando uma opção é selecionada
        document.querySelectorAll('.menu li a').forEach(n => n.addEventListener('click', () => {
            hamburguer.classList.remove('active');
            navMenu.classList.remove('active');
        }))
    }

    iceCreamHomeAnimation() {
        // Elementos HTML selecionados
        const imgHomeIceCream = document.querySelector('.home-ice-cream');
        const homeImgDiv = document.querySelector('.home-image-div');
    
        // Evento que ativa a animação quando o mouse está por cima do elemento
        imgHomeIceCream.addEventListener('mouseenter', () => {
            homeImgDiv.classList.add('active');
        });
    
        // Evento que ativa a animação quando o mouse sai de cima do elemento
        imgHomeIceCream.addEventListener('mouseout', () => {
            homeImgDiv.classList.remove('active');
        });
    }
}

const startInteraction = new PageInteraction();
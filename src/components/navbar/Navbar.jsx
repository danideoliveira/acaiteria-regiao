import { Nav, Menu, MobileMenu } from './Navbar.styled';

function Navbar() {

    function openMobileMenu() {
        const hamburguer = document.querySelector('.hamburguer');
        const menu = document.querySelector('.menu');
        hamburguer.classList.toggle('active');
        menu.classList.toggle('active');
    }

    const menuItems = [
        { href: '#', text: 'Início' },
        { href: '#specialties', text: 'Especialidades' },
        { href: '#location', text: 'Localização' },
        { href: '#about', text: 'Sobre' },
    ];

    return(
        <Nav>
            <Menu className='menu'>
                {
                    menuItems.map(item => (
                        <li key={item.href} onClick={() => openMobileMenu()}><a href={item.href}>{item.text}</a></li>
                    ))
                }
            </Menu>

            <MobileMenu className='hamburguer' onClick={() => openMobileMenu()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </MobileMenu>
        </Nav>
    )
}

export default Navbar;
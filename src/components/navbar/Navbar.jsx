import './Navbar.scss';

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="menu">
                <li><a href="#">Início</a></li>
                <li><a href="#specialties">Especialidades</a></li>
                <li><a href="#location">Localização</a></li>
                <li><a href="#about">Sobre</a></li>
            </ul>

            <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar;
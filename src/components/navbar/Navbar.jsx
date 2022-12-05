import { Nav, Menu, MobileMenu } from "./Navbar.styled";
import { Link } from "react-router-dom";
import images from "../images/Images";

function Navbar() {
  function openMobileMenu() {
    const hamburguer = document.querySelector(".hamburguer");
    const menu = document.querySelector(".menu");
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
  }

  const menuItems = [
    { href: "/", text: "Início" },
    { href: "/especialidades", text: "Especialidades" },
    { href: "/localizacao", text: "Localização" },
    { href: "/sobre", text: "Sobre" },
  ];

  return (
    <Nav>
      <img src={images.logo} />
      <Menu className="menu">
        {menuItems.map((item) => (
          <li key={item.href} onClick={() => openMobileMenu()}>
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </Menu>

      <MobileMenu className="hamburguer" onClick={() => openMobileMenu()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar;

import './Footer.scss';
import images from '../images/Images';

export default function Footer() {
    return (
        <footer className="bg-dark-purple">
            <p className="txt-cream"><a className="txt-cream" target="_blank" href="https://github.com/danideoliveira">Daniel de Oliveira Santos</a> &copy; 2022</p>
            <div className="footer-shapes">
                <img className="footer-bottom-shape" src={images.aboutBubble} alt="shape"/>
            </div>
        </footer>
    )
}
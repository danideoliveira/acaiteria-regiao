import './Footer.scss';
import images from '../images/Images';
import { Container, Shape } from './styled';

export default function Footer() {
    return (
        <Container>
            <p><a target="_blank" href="https://github.com/danideoliveira">Daniel de Oliveira Santos</a> &copy; 2022</p>
            <Shape>
                <img src={images.aboutBubble} alt="shape"/>
            </Shape>
        </Container>
    )
}
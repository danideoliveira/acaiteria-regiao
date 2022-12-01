import images from '../images/Images';
import { Container, ContainerSecondary, Shape } from './Footer.styled';

export default function Footer() {

    function setShape(path) {
        if(path === '/sobre') {
            return <Shape><img src={images.aboutBubble} alt="shape"/></Shape>
        }
    }

    return (
        <Container>
            <ContainerSecondary>
                <p><a target="_blank" href="https://github.com/danideoliveira">Daniel de Oliveira Santos</a> &copy; 2022</p>
                {/* <Shape><img src={images.aboutBubble} alt="shape"/></Shape> */}
                {setShape(window.location.pathname)}
            </ContainerSecondary>
        </Container>
    )
}
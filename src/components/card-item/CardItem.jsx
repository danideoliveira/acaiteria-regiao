// import "./CardItem.scss";
import { Container, DivSpecialtiesInfo, Title, Description, Price, Button, DivImage } from './styled';
import { motion } from 'framer-motion';
import {Fade} from 'react-reveal'

export default function CardItem({ title, description, image, value, setButton, alt }) {

    function setButtonValidate(result) {
        if (result) {
            return <Button>Monte seu copo!</Button>
        }
    }

    return (
        <Fade bottom>
            <Container>
                <DivImage>
                    <img src={image} alt={alt} />
                </DivImage>
                <DivSpecialtiesInfo>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Price>{value}</Price>
                    {setButtonValidate(setButton)}
                </DivSpecialtiesInfo>
            </Container>
        </Fade>
    );
}


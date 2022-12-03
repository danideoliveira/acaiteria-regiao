import { Container, DivSpecialtiesInfo, Title, Price, StyledLink, DivImage } from './CardItem.styled';
import { Description } from '../../helpers/globalTags';
import { motion } from 'framer-motion';
import { colors } from '../../helpers/variables';

export default function CardItem({ title, description, image, value, setButton, alt }) {

    function setButtonValidate(result) {
        if (result) {
            return <StyledLink to='/pedido'>Monte seu copo!</StyledLink>
        }
    }

    return (
        <Container>
            <DivImage>
                <img src={image} alt={alt} />
            </DivImage>
            <DivSpecialtiesInfo>
                <Title>{title}</Title>
                <Description color={ colors.darkPurple }>{description}</Description>
                <Price>{value}</Price>
                {setButtonValidate(setButton)}
            </DivSpecialtiesInfo>
        </Container>
    );
}


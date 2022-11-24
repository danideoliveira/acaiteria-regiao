// import "./CardItem.scss";
import { Container, DivSpecialtiesInfo, Title, Description, Price, Button, DivImage } from './styled';

export default function CardItem({title, description, image, value, setButton, alt}) {
    
    function setButtonValidate(result) {
        if(result) {
            return <Button>Monte seu copo!</Button>
        }
    }

    return (
        <Container>
            <DivImage>
                <img src={ image } alt={ alt } />
            </DivImage>
            <DivSpecialtiesInfo>
                <Title>{ title }</Title>
                <Description>{ description }</Description>
                <Price>{ value }</Price>       
                {setButtonValidate(setButton)}      
            </DivSpecialtiesInfo>          
        </Container>
    );
}


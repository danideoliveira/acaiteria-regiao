import { Container } from "./Contacts.styled";
import { Description } from "../../helpers/globalTags";
import { colors } from "../../helpers/variables";

export default function Contacts({image, alt, text, link}) {
    return (
        <Container>
            <a href={link}>
                <img src={image} alt={alt}/>
            </a>
            <div>
                <Description color={ colors.cream }>{text}</Description>
            </div>
        </Container>
    );
}

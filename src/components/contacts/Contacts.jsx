import "./Contacts.scss";
import { Container } from "./styled";
import { Description } from "../location/styled";

export default function Contacts({image, alt, text, link}) {
    return (
        <Container>
            <a href={link}>
                <img src={image} alt={alt}/>
            </a>
            <div>
                <Description>{text}</Description>
            </div>
        </Container>
    );
}

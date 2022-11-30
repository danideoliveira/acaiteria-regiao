import Contacts from '../contacts/Contacts';
import images from '../images/Images';
import { Container, ContainerSecondary, DivLeft, DivRight } from './About.styled';
import { Title, Description } from '../../helpers/globalTags';
import { colors } from '../../helpers/variables';

export default function About() {

    const contactsList = [
        { image: images.logoWhatsapp, alt: "Logo do Whatsapp", text: "(21) 99999-9999", link: "#"},
        { image: images.logoInstagram, alt: "Logo do Instagram", text: "@icespot", link: "#"},
        { image: images.logoFacebook, alt: "Logo do Facebook", text: "/icespot", link: "#"},
        { image: images.logoTwitter, alt: "Logo do Twitter", text: "@icespot", link: "#"},
    ];

    return(
        <Container id="about">
            <ContainerSecondary>
                <DivLeft>
                    <div>
                        <Title color={ colors.white }>QUEM SOMOS</Title>
                        <Description color={ colors.white }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla leo ex, accumsan eu dui vel, viverra aliquam metus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Exercitationem vitae consectetur tenetur fugit nam necessitatibus 
                            ab velit nemo cupiditate quae magnam dolorum facere, nisi dignissimos, 
                            repudiandae porro praesentium alias qui.
                        </Description>
                    </div>
                </DivLeft>

                <DivRight>
                    {
                        contactsList.map(item => (
                            <Contacts
                                key={item.text}
                                image={item.image}
                                alt={item.alt}
                                text={item.text}
                                link={item.link}
                            />
                        ))
                    }
                </DivRight>
            </ContainerSecondary>
        </Container>
    )
}
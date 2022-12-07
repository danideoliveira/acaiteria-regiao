import {
  Container,
  ContainerSecondary,
  Shape,
  ContactContainer,
} from "./Footer.styled";
import images from "../images/Images";
import Contacts from "../contacts/Contacts";

export default function Footer({ needsShape, image, contacts, bgColor, txtColor }) {
  const contactsList = [
    {
      image: images.logoWhatsapp,
      alt: "Logo do Whatsapp",
      text: "(21) 99999-9999",
      link: "#",
    },
    {
      image: images.logoInstagram,
      alt: "Logo do Instagram",
      text: "@acaiteriaregiao",
      link: "#",
    },
    {
      image: images.logoFacebook,
      alt: "Logo do Facebook",
      text: "/acaiteriaregiao",
      link: "#",
    },
    {
      image: images.logoTwitter,
      alt: "Logo do Twitter",
      text: "@acaiteriaregiao",
      link: "#",
    },
  ];

  function setShape(needsShape) {
    if (needsShape) {
      <Shape>
        {" "}
        <img src={image} alt="shape" />
      </Shape>;
    }
  }

  function showContacts(needsContacts) {
    if (needsContacts) {
      return (
        <ContactContainer backgroundColor={ bgColor }>
          <div className="box">
            {contactsList.map((item) => (
              <Contacts
                key={item.alt}
                image={item.image}
                alt={item.alt}
                text={item.text}
                link={item.link}
              />
            ))}
          </div>
        </ContactContainer>
      );
    }
  }

  return (
    <Container backgroundColor={ bgColor } textColor={ txtColor }>
      <ContainerSecondary>
        {showContacts(contacts)}
        <p>
          <a target="_blank" href="https://github.com/danideoliveira">
            Daniel de Oliveira Santos
          </a>{" "}
          &copy; 2022
        </p>
        {setShape(needsShape)}
      </ContainerSecondary>
    </Container>
  );
}

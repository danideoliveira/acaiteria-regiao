import Contacts from "../contacts/Contacts";
import images from "../images/Images";
import {
  Container,
  ContainerSecondary,
  DivLeft,
  DivRight,
  FormContainer,
  FormInfo,
  Button,
} from "./About.styled";
import { Title, Description } from "../../helpers/globalTags";
import { colors } from "../../helpers/variables";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";

export default function About() {
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

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Container id="about">
        <ContainerSecondary>
          <DivLeft>
            <div>
              <img src={images.logo} alt="logo-acaiteria" />
              {/* <Title color={colors.purple}>QUEM SOMOS</Title> */}
              <Description color={colors.purple}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                leo ex, accumsan eu dui vel, viverra aliquam metus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Exercitationem
                vitae consectetur tenetur fugit nam necessitatibus ab velit nemo
                cupiditate quae magnam dolorum facere, nisi dignissimos,
                repudiandae porro praesentium alias qui.
              </Description>
            </div>
          </DivLeft>

          <FormContainer>
            <FormInfo>
              <fieldset>
                <legend>Fale conosco!</legend>
                <div className="nome">
                  <label>Nome*</label>
                  <input type="text" required></input>
                </div>
                <div className="email">
                  <label>Email*</label>
                  <input type="email" required></input>
                </div>
                <div className="telefone">
                  <label>Telefone</label>
                  <input type="text"></input>
                </div>
                <div className="mensagem">
                  <label>Mensagem*</label>
                  <textarea required></textarea>
                </div>
              </fieldset>

              <Button>Enviar</Button>
            </FormInfo>
          </FormContainer>

          <DivRight>
            {contactsList.map((item) => (
              <Contacts
                key={item.alt}
                image={item.image}
                alt={item.alt}
                text={item.text}
                link={item.link}
              />
            ))}
          </DivRight>
        </ContainerSecondary>
      </Container>
      <Footer needsShape={true} image={images.aboutBubble} />
    </motion.div>
  );
}

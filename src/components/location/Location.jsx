import {
  Container,
  ContainerSecondary,
  DivLeft,
  DivMap,
} from "./Location.styled";
import { Title, Description } from "../../helpers/globalTags";
import { colors } from "../../helpers/variables";
import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Footer from "../footer/Footer";

export default function Location() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container id="location">
        <ContainerSecondary>
          <DivLeft>
            <div>
              <Title color={colors.purple}>ONDE ESTAMOS?</Title>
              <Description color={colors.purple}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                leo ex, accumsan eu dui vel, viverra aliquam metus.
              </Description>
            </div>
          </DivLeft>

          <DivMap>
            <div className="container-map">
              <Slide direction="right">
                <div>
                  <iframe
                    id="gmap_canvas"
                    loading="'lazy"
                    src="https://maps.google.com/maps?q=barra%20da%20tijuca&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </Slide>
            </div>
          </DivMap>
        </ContainerSecondary>
      </Container>
      <Footer
        contacts={true}
        bgColor={colors.darkPurple}
        txtColor={colors.cream}
      />
    </motion.div>
  );
}

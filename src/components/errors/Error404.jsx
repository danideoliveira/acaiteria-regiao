import { Container, ContainerSecondary, Button } from "./Error404.styled";
import { Title, Description } from "../../helpers/globalTags";
import { colors } from "../../helpers/variables";
import Footer from "../footer/Footer";

export default function Error404() {
  return (
    <div>
      <Container id="about">
        <ContainerSecondary>
          <div>
            <Title color={colors.purple}>Erro 404!</Title>
            <Description color={colors.purple}>
              A página não existe!
            </Description>
            <Button to="/">Retornar</Button>
          </div>
        </ContainerSecondary>
      </Container>
      <Footer
        contacts={true}
        bgColor={colors.darkPurple}
        txtColor={colors.cream}
      ></Footer>
    </div>
  );
}

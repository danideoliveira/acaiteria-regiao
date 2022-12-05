import { Container, ContainerSecondary, Shape } from "./Footer.styled";

export default function Footer({ needsShape, image }) {
  function setShape(needsShape) {
    if (needsShape) {
      return (
        <Shape>
          <img src={image} alt="shape" />
        </Shape>
      );
    }
  }

  return (
    <Container>
      <ContainerSecondary>
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

import "./Location.scss";
import { Container, ContainerSecondary, DivLeft, Title, Description, DivMap } from "./styled";

export default function Location() {
  return (
    <Container id="location">
      <ContainerSecondary>
        <DivLeft>
          <div>
            <Title>
              ONDE ESTAMOS?
            </Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo
              ex, accumsan eu dui vel, viverra aliquam metus.
            </Description>
          </div>
        </DivLeft>

        <DivMap>
          <div>
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
          </div>
        </DivMap>
      </ContainerSecondary>
    </Container>
  );
}

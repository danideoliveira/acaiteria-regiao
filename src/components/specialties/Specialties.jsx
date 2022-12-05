import images from "../images/Images";
import CardItem from "../card-item/CardItem";
import {
  Container,
  ContainerSecondary,
  Title,
  Grid,
} from "./Specialties.styled";
import { Fade } from "react-awesome-reveal";
import Footer from "../footer/Footer";

export default function Specialties() {
  const specialtiesList = [
    {
      image: images.copos,
      alt: "Copos",
      title: "Copos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      value: "À partir de R$6,00",
      setButton: true,
    },
    {
      image: images.barca,
      alt: "Barca",
      title: "Barca",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      value: "R$42,00",
      setButton: false,
    },
    {
      image: images.picole,
      alt: "Picolé",
      title: "Picolé",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      value: "R$3,50",
      setButton: false,
    },
    {
      image: images.tijela,
      alt: "Tijela",
      title: "Tijela",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      value: "R$12,00",
      setButton: false,
    },
  ];

  return (
    <>
      <Container id="specialties">
        <ContainerSecondary>
          <Title>Nossas especialidades!</Title>

          <Grid>
            <Fade cascade damping={0.1}>
              {specialtiesList.map((item) => (
                <CardItem
                  key={item.title}
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
                  description={item.description}
                  value={item.value}
                  setButton={item.setButton}
                />
              ))}
            </Fade>
          </Grid>
        </ContainerSecondary>
      </Container>
      <Footer needsShape={true} image={images.specialtiesShape} />
    </>
  );
}

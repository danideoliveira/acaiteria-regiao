import images from '../images/Images';
import CardItem from '../card-item/CardItem';
import { Container, ContainerSecondary, Title, Grid, DivShape } from './Specialties.styled';

export default function Specialties() {

    const specialtiesList = [
        { image: images.copos, alt: 'Copos', title: "Copos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "À partir de R$6,00", setButton: true },
        { image: images.barca, alt: 'Barca', title: "Barca", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "R$42,00", setButton: false },
        { image: images.picole, alt: 'Picolé', title: "Picolé", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "R$3,50", setButton: false },
        { image: images.tijela, alt: 'Tijela', title: "Tijela", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "R$12,00", setButton: false }
    ];

    return(
        <Container id="specialties">
            <ContainerSecondary>
                <Title>Nossas especialidades!</Title>

                <Grid>
                    {
                        specialtiesList.map(item => (
                            <CardItem
                                key={ item.title } 
                                image={item.image}
                                alt= { item.alt }
                                title={item.title}
                                description={item.description}
                                value={item.value}
                                setButton={ item.setButton }
                            />
                        ))
                    }
                </Grid>
            </ContainerSecondary>
            <DivShape className="specialties-shapes">
                <img className="specialties-bottom-shape" src={ images.specialtiesShape } alt="shape"/>
            </DivShape>
        </Container>
    )
}
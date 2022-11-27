import images from '../images/Images';
import CardItem from '../cardItem/CardItem';
import { Container, Title, Grid, DivShape } from './Specialties.styled';
import { colors } from '../../helpers/variables';
import {motion} from 'framer-motion';

const specialtiesList = [
    { image: images.copos, alt: 'Copos', title: "Copos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "À partir de R$6,00", setButton: true },
    { image: images.barca, alt: 'Barca', title: "Barca", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "R$42,00", setButton: false },
    { image: images.picole, alt: 'Picolé', title: "Picolé", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "R$3,50", setButton: false },
    { image: images.tijela, alt: 'Tijela', title: "Tijela", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: "R$12,00", setButton: false }
];

export default function Specialties() {
    return(
        <Container id="specialties">
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

            <DivShape className="specialties-shapes">
                <img className="specialties-bottom-shape" src={ images.specialtiesShape } alt="shape"/>
            </DivShape>
        </Container>
    )
}
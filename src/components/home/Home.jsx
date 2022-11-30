import images from '../images/Images';
import { Container, DivLeft, DivRight, Title, ShapeBubble, Button } from './Home.styled';
import {motion} from 'framer-motion';
import { Description } from '../../helpers/globalTags';
import { colors } from '../../helpers/variables';

function Home() {
    const TitleAnimate = motion(Title);

    return (
        <Container>
            <DivLeft>
                <div>
                    <TitleAnimate>O dia pede açaí!</TitleAnimate>
                    <Description color={colors.purple}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla leo ex, accumsan eu dui vel, viverra aliquam metus.
                    </Description>
                    <Button href="#specialties">Conheça-nos</Button>
                </div>
            </DivLeft>
            
            <DivRight>
                <div>
                    <motion.img src={ images.acai } alt="Açaí photo"/>
                </div>
                <ShapeBubble className="home-bubble" src={ images.homeBubble } alt="bubble"/>
            </DivRight>        
        </Container>
    )
};

export default Home;
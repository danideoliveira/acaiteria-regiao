import images from '../images/Images';
import { Container, DivLeft, DivRight, Title, ShapeBubble } from './Home.styled';
import {motion} from 'framer-motion';
import { Description } from '../../helpers/globalTags';
import { colors } from '../../helpers/variables';

function Home() {
    const TitleAnimate = motion(Title);

    return (
        <Container>
            <DivLeft>
                <div>
                    <TitleAnimate>IceSpot</TitleAnimate>
                    <Description color={colors.white}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla leo ex, accumsan eu dui vel, viverra aliquam metus.
                    </Description>
                </div>
            </DivLeft>
            
            <DivRight>
                <div>
                    {/* <motion.img src={ images.acai } alt="Açaí photo"/> */}
                </div>
                <ShapeBubble className="home-bubble" src={ images.homeBubble } alt="bubble"/>
            </DivRight>        
        </Container>
    )
};

export default Home;
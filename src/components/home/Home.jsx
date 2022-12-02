import images from '../images/Images';
import { Container, DivLeft, DivRight, Title, ShapeBubble, StyledLink } from './Home.styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Description } from '../../helpers/globalTags';
import { colors } from '../../helpers/variables';
import Footer from '../footer/Footer';

function Home() {
    return (
        <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition: {duration: 0.5}}}
        >
            <Container>
                <DivLeft>
                    <div>
                        <Title>O dia pede açaí!</Title>
                        <Description color={colors.purple}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla leo ex, accumsan eu dui vel, viverra aliquam metus.
                        </Description>
                        <StyledLink to="/especialidades">Peça o seu!</StyledLink>
                    </div>
                </DivLeft>
                
                <DivRight>
                    <div>
                        <motion.img src={ images.acai } alt="Açaí photo"/>
                    </div>
                    <ShapeBubble className="home-bubble" src={ images.homeBubble } alt="bubble"/>
                </DivRight>
                <StyledLink to="/especialidades">Peça o seu!</StyledLink>
            </Container>
            <Footer needsShape={false}/>
        </motion.div>
    )
};

export default Home;
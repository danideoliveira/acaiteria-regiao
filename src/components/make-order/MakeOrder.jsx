import images from '../images/Images';
import { Container, ContainerSecondary, DivLeft, DivRight, Shape } from './MakeOrder.styled';
import { Title, Description } from '../../helpers/globalTags';
import { colors } from '../../helpers/variables';
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

export default function MakeOrder() {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Container id="make-order">
                <ContainerSecondary>
                    <DivRight>
                        <div>
                            <Title color={ colors.darkPurple }>Faça seu copo!</Title>
                        </div>
                    </DivRight>
                </ContainerSecondary>
            </Container>
            <Footer needsShape={false}/>
        </motion.div>
    )
}
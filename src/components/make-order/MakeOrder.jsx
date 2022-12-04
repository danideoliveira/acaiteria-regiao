import { acaiMaker } from '../images/Images';
import { Container, ContainerSecondary, DivLeft, DivRight, Grid, Item, Label, Button } from './MakeOrder.styled.js';
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
                    <DivLeft>
                        <div>
                            <img src={ acaiMaker.copo } alt="acai-maker"/>
                            <img src={ acaiMaker.jujuba } alt="acai-maker"/>
                            <img src={ acaiMaker.leite } alt="acai-maker"/>
                            <img src={ acaiMaker.morango } alt="acai-maker"/>
                            <img src={ acaiMaker.pacoca } alt="acai-maker"/>
                            <img src={ acaiMaker.banana } alt="acai-maker"/>
                            <img src={ acaiMaker.biscoito } alt="acai-maker"/>
                            <img src={ acaiMaker.caldaMorango } alt="acai-maker"/>
                            <img src={ acaiMaker.caldaChocolate } alt="acai-maker"/>
                            <img src={ acaiMaker.copoFront } alt="acai-maker"/>
                            <p>R$999,00</p>
                        </div>
                    </DivLeft>
                    <DivRight>
                        <section>
                            <div>
                                <Title color={ colors.darkPurple }>Faça seu copo!</Title>
                                <Grid>
                                    <Item><input type='radio' name='tamanho' value='200' defaultChecked/>200ml</Item>
                                    <Item><input type='radio' name='tamanho' value='400'/>400ml</Item>
                                    <Item><input type='radio' name='tamanho' value='700'/>700ml</Item>
                                </Grid>
                            </div>

                            <div>
                                <Label>Acompanhamentos</Label>
                                <Grid>
                                    <Item><input type='checkbox' value='pacoca'/>Paçoca</Item>
                                    <Item><input type='checkbox' value='leite-em-pó'/>Leite em pó</Item>
                                    <Item><input type='checkbox' value='jujuba'/>Jujuba</Item>
                                    <Item><input type='checkbox' value='morango'/>Morango</Item>
                                    <Item><input type='checkbox' value='biscoito'/>Biscoito</Item>
                                    <Item><input type='checkbox' value='banana'/>Banana</Item>
                                </Grid>
                            </div>

                            <div>
                                <Label>Caldas</Label>
                                <Grid>
                                    <Item><input type='radio' name='calda' value='chocolate'/>Chocolate</Item>
                                    <Item><input type='radio' name='calda' value='morango'/>Morango</Item>
                                </Grid>
                            </div>

                            <div>
                                <Button>Prosseguir</Button>
                            </div>
                        </section>
                    </DivRight>
                </ContainerSecondary>
            </Container>
            <Footer needsShape={false}/>
        </motion.div>
    )
}
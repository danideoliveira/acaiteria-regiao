import { acaiMaker } from "../images/Images";
import {
  Container,
  ContainerSecondary,
  DivLeft,
  DivRight,
  Grid,
  Item,
  Label,
  Button,
} from "./MakeOrder.styled.js";
import { Title } from "../../helpers/globalTags";
import { colors } from "../../helpers/variables";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import ModalInfo from "../modal-info/ModalInfo";
import { showModal } from "../../helpers/Mixins";

export default function MakeOrder() {
  function handleChange(event) {
    const items = document.querySelectorAll(".maker-item");

    if (event.target.checked) {
      items.forEach((item) => {
        if (item.id === event.target.value) {
          item.style.display = "initial";
        }
      });
    } else {
      items.forEach((item) => {
        if (item.id === event.target.value) {
          item.style.display = "none";
        }
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container id="make-order">
        <ContainerSecondary>
          <DivLeft>
            <div>
              <img src={acaiMaker.copo} alt="acai-maker" />
              <img
                className="maker-item"
                id="leite"
                src={acaiMaker.leite}
                alt="acai-maker"
              />
              <img
                className="maker-item"
                id="morango"
                src={acaiMaker.morango}
                alt="acai-maker"
              />
              <img
                className="maker-item"
                id="banana"
                src={acaiMaker.banana}
                alt="acai-maker"
              />
              <img
                className="maker-item"
                id="jujuba"
                src={acaiMaker.jujuba}
                alt="acai-maker"
              />
              <img
                className="maker-item"
                id="pacoca"
                src={acaiMaker.pacoca}
                alt="acai-maker"
              />
              <img
                className="maker-item"
                id="biscoito"
                src={acaiMaker.biscoito}
                alt="acai-maker"
              />
              <img
                className="maker-item"
                id="caldaChocolate"
                src={acaiMaker.caldaChocolate}
                style={{ opacity: 90 + "%" }}
                alt="acai-maker"
              />
              <img
                className="maker-item"
                id="caldaMorango"
                src={acaiMaker.caldaMorango}
                style={{ opacity: 90 + "%" }}
                alt="acai-maker"
              />
              <img src={acaiMaker.copoFront} alt="acai-maker" />
            </div>
          </DivLeft>
          <DivRight>
            <section>
              <div>
                <Title color={colors.darkPurple}>Faça seu copo!</Title>
                <Grid>
                  <Item>
                    <input
                      type="radio"
                      name="tamanho"
                      value="200"
                      defaultChecked
                    />
                    200ml
                  </Item>
                  <Item>
                    <input type="radio" name="tamanho" value="400" />
                    400ml
                  </Item>
                  <Item>
                    <input type="radio" name="tamanho" value="700" />
                    700ml
                  </Item>
                </Grid>
              </div>

              <div>
                <Label>Acompanhamentos</Label>
                <Grid>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="pacoca"
                    />
                    Paçoca
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="leite"
                    />
                    Leite em pó
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="jujuba"
                    />
                    Jujuba
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="morango"
                    />
                    Morango
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="biscoito"
                    />
                    Biscoito
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="banana"
                    />
                    Banana
                  </Item>
                </Grid>
              </div>

              <div>
                <Label>Caldas</Label>
                <Grid>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      name="calda"
                      value="caldaChocolate"
                    />
                    Chocolate
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      name="calda"
                      value="caldaMorango"
                    />
                    Morango
                  </Item>
                </Grid>
              </div>

              <div>
                <Button className="continue-button" onClick={showModal}>
                  Prosseguir
                </Button>
              </div>
            </section>
          </DivRight>

          <ModalInfo />
        </ContainerSecondary>
      </Container>
      <Footer needsShape={false} />
    </motion.div>
  );
}

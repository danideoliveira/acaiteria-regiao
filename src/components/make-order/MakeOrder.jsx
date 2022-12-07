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
import images from "../images/Images";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import ModalInfo from "../modal-info/ModalInfo";
import { showModal } from "../../helpers/Mixins";

export default function MakeOrder() {
  const order = {
    copo: "200ml",
    morango: "",
    leite: "",
    jujuba: "",
    banana: "",
    pacoca: "",
    biscoito: "",
    caldaMorango: "",
    caldaChocolate: "",
  };

  function handleChange(event) {
    const items = document.querySelectorAll(".maker-item");
    const cupSize = ["200ml", "400ml", "700ml"];
    const sauces = ["caldaChocolate", "caldaMorango"];

    if (cupSize.includes(event.target.value)) {
      order.copo = event.target.value;
    }

    if (event.target.checked) {
      if (sauces[0] === event.target.value) {
        order.calda1 = event.target.name;
      }
      if (sauces[1] === event.target.value) {
        order.calda2 = event.target.name;
      }

      items.forEach((item) => {
        if (item.id === event.target.value) {
          item.style.display = "initial";
          order[item.id] = event.target.name;
        }
      });
    } else {
      items.forEach((item) => {
        if (item.id === event.target.value) {
          item.style.display = "none";
          order[event.target.value] = ""
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
                      value="200ml"
                      defaultChecked
                      onChange={handleChange}
                    />
                    200ml
                  </Item>
                  <Item>
                    <input
                      type="radio"
                      name="tamanho"
                      value="400ml"
                      onChange={handleChange}
                    />
                    400ml
                  </Item>
                  <Item>
                    <input
                      type="radio"
                      name="tamanho"
                      value="700ml"
                      onChange={handleChange}
                    />
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
                      name="Paçoca"
                    />
                    Paçoca
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="leite"
                      name="Leite em pó"
                    />
                    Leite em pó
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="jujuba"
                      name="Jujuba"
                    />
                    Jujuba
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="morango"
                      name="Morango"
                    />
                    Morango
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="biscoito"
                      name="Biscoito"
                    />
                    Biscoito
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      value="banana"
                      name="Banana"
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
                      name="Calda de chocolate"
                      value="caldaChocolate"
                    />
                    Chocolate
                  </Item>
                  <Item>
                    <input
                      className="maker-option"
                      onChange={handleChange}
                      type="checkbox"
                      name="Calda de morango"
                      value="caldaMorango"
                    />
                    Morango
                  </Item>
                </Grid>
              </div>

              <div>
                <Button className="continue-button" onClick={() => {
                  showModal(order)
                  }}>
                  Prosseguir
                </Button>
              </div>
            </section>
          </DivRight>
          <ModalInfo />
        </ContainerSecondary>
      </Container>
      <Footer contacts={true} />
    </motion.div>
  );
}

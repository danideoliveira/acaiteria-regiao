import { motion } from "framer-motion";
import {
  Modal,
  Container,
  ContainerSecondary,
  CloseButton,
  FormInfo,
  Button,
  ModalSoon,
} from "./ModalInfo.styled";
import { showModal, showModalSoon } from "../../helpers/Mixins";
import getAddress from "../../modules/getAddress";

export default function ModalInfo({ order }) {
  async function showAddress(cep) {
    const inputEndereco = document.querySelector(".endereco");
    const inputBairro = document.querySelector(".bairro");
    const inputCidade = document.querySelector(".cidade");

    const dados = await getAddress(cep);
    if (!dados || dados.bairro === "undefined") {
      inputEndereco.value = "";
      inputBairro.value = "";
      inputCidade.value = "";
      return;
    }

    const { logradouro, bairro, localidade } = dados;

    inputEndereco.value = logradouro;
    inputBairro.value = bairro;
    inputCidade.value = localidade;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <ContainerSecondary>
          <Modal className="modal">
            <div className="modal-content">
              <CloseButton className="close-button" onClick={showModal}>
                ×
              </CloseButton>
              <div className="form-container">
                <FormInfo>
                  <fieldset className="field-pedido">
                    <legend>Pedido</legend>
                    <div>
                      <label>Copo</label>
                      <input
                        type="text"
                        className="copo-pedido"
                        defaultValue="200ml"
                        required
                        disabled
                      />
                    </div>
                    <div>
                      <label>Acompanhamentos</label>
                      <textarea
                        className="acompanhamento-pedido"
                        required
                        disabled
                      />
                    </div>
                    <div>
                      <label>Calda</label>
                      <textarea className="calda-pedido" required disabled />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Dados pessoais</legend>
                    <div>
                      <label>Nome*</label>
                      <input type="text" required />
                    </div>
                    <div>
                      <label>Sobrenome*</label>
                      <input type="text" required />
                    </div>
                    <div>
                      <label>Telefone*</label>
                      <input type="text" required />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Endereço</legend>
                    <div>
                      <label>CEP</label>
                      <input
                        type="text"
                        placeholder="Digite seu CEP..."
                        onChange={(e) => showAddress(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Endereço*</label>
                      <input type="text" className="endereco" required />
                    </div>
                    <div>
                      <label>Número*</label>
                      <input type="text" required />
                    </div>
                    <div>
                      <label>Bairro*</label>
                      <input type="text" className="bairro" required />
                    </div>
                    <div>
                      <label>Cidade</label>
                      <input type="text" className="cidade" />
                    </div>
                  </fieldset>

                  <Button
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   showModalSoon();
                  // }}
                  >
                    Ir para pagamento
                  </Button>
                </FormInfo>
              </div>
            </div>
          </Modal>
          <ModalSoon className="modal-soon">
            <div className="modal-content">
              <CloseButton className="close-button" onClick={showModalSoon}>
                ×
              </CloseButton>
              <div>
                <p>Em breve! ✔️</p>
              </div>
            </div>
          </ModalSoon>
        </ContainerSecondary>
      </Container>
    </motion.div>
  );
}

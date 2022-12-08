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

export default function ModalInfo() {
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

  function handleChange(e) {
    validatePhone();
    validateHouseNumber();
  }

  function validatePhone() {
    const telefone = document.querySelector(".telefone-validate");
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const arrTelefone = Array.from(telefone.value);

    if (!numbers.includes(arrTelefone[arrTelefone.length - 1])) {
      arrTelefone.pop();
      telefone.value = arrTelefone.join("");
    }
  }

  function validateHouseNumber() {
    const houseNumber = document.querySelector(".numero-validate");
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const arrHouseNumber = Array.from(houseNumber.value);

    if (!numbers.includes(arrHouseNumber[arrHouseNumber.length - 1])) {
      arrHouseNumber.pop();
      houseNumber.value = arrHouseNumber.join("");
    }
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
                    <div className="copo-div">
                      <label>Copo</label>
                      <input
                        type="text"
                        className="copo-pedido"
                        defaultValue="200ml"
                        required
                        disabled
                      />
                    </div>
                    <div className="valor-div">
                      <label>Valor</label>
                      <input
                        type="text"
                        className="preco-pedido"
                        defaultValue="R$6,00"
                        required
                        disabled
                      />
                    </div>
                    <div className="acomp-div">
                      <label>Acompanhamentos</label>
                      <textarea
                        className="acompanhamento-pedido"
                        required
                        disabled
                      />
                    </div>
                    <div className="calda-div">
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
                      <input
                        type="text"
                        className="telefone-validate"
                        maxLength={11}
                        onChange={handleChange}
                        required
                      />
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
                      <input
                        type="text"
                        className="numero-validate"
                        onChange={handleChange}
                        required
                      />
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

                  <Button>Ir para pagamento</Button>
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
                <p>Em breve! ⚙️</p>
              </div>
            </div>
          </ModalSoon>
        </ContainerSecondary>
      </Container>
    </motion.div>
  );
}

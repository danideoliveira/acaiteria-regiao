import { motion } from "framer-motion";
import {
  Modal,
  ModalSoon,
  Container,
  ContainerSecondary,
  CloseButton,
  FormInfo,
  Button,
} from "./ModalInfo.styled";
import { showModal, showModalSoon } from "../../helpers/Mixins";
import getAddress from "../../modules/getAddress";

export default function ModalInfo() {
  async function showAddress(e) {
    validateInputValue(e);
    const cep = e.target.value;
    const inputEndereco = document.querySelector(".endereco");
    const inputBairro = document.querySelector(".bairro");
    const inputCidade = document.querySelector(".cidade");

    const dados = await getAddress(cep);
    if (!dados || dados.bairro === "undefined") {
      inputEndereco.value = "";
      inputBairro.value = "";
      inputCidade.value = "";
      allValidated();
      return;
    }

    const { logradouro, bairro, localidade } = dados;
    inputEndereco.value = logradouro;
    inputBairro.value = bairro;
    inputCidade.value = localidade;
    allValidated();
  }

  function handleChange(e) {
    validateInputValue(e);
    allValidated();
  }

  function allValidated() {
    const submitButton = document.querySelector(".submit-button");
    const inputs = document.querySelectorAll("input");
    const inputValues = [];
    submitButton.addEventListener("click", showModalSoon);

    inputs.forEach((input) => {
      if (input.getAttribute("required") !== null) {
        if (
          !input.classList.contains("acompanhamento-pedido") ||
          !input.classList.contains("calda-pedido")
        ) {
          inputValues.push(input.value);
        }
      }
    });

    !inputValues.includes("")
      ? submitButton.removeAttribute("disabled")
      : submitButton.setAttribute("disabled", true);
  }

  function validateInputValue(e) {
    const el = e.target;
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const arrTarget = Array.from(el.value);

    if (el.classList.value === "number-validate") {
      if (!numbers.includes(arrTarget[arrTarget.length - 1])) {
        arrTarget.pop();
        el.value = arrTarget.join("");
      }
    } else if (el.classList.value === "text-validate") {
      if (numbers.includes(arrTarget[arrTarget.length - 1])) {
        arrTarget.pop();
        el.value = arrTarget.join("");
      }
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
                      <textarea className="acompanhamento-pedido" disabled />
                    </div>
                    <div className="calda-div">
                      <label>Calda</label>
                      <textarea className="calda-pedido" disabled />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Dados pessoais</legend>
                    <div>
                      <label>Nome*</label>
                      <input
                        type="text"
                        className="text-validate"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Sobrenome*</label>
                      <input
                        type="text"
                        className="text-validate"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Telefone*</label>
                      <input
                        type="text"
                        className="number-validate"
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
                        className="number-validate"
                        onChange={(e) => {
                          showAddress(e);
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div>
                      <label>Endereço*</label>
                      <input
                        type="text"
                        className="endereco"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Número*</label>
                      <input
                        type="text"
                        className="number-validate"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Bairro*</label>
                      <input
                        type="text"
                        className="bairro"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Cidade</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        className="cidade"
                      />
                    </div>
                  </fieldset>

                  <Button type="button" className="submit-button" disabled>
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
                <p>Em breve! ⚙️</p>
              </div>
            </div>
          </ModalSoon>
        </ContainerSecondary>
      </Container>
    </motion.div>
  );
}

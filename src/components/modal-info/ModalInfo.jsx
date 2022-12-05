import { Title } from '../../helpers/globalTags';
import { colors } from '../../helpers/variables';
import { motion } from 'framer-motion';
import { Modal, Container, ContainerSecondary, CloseButton, FormInfo, Button } from './ModalInfo.styled';
import { showModal } from '../../helpers/Mixins';
import getAddress from '../../modules/getAddress';

export default function ModalInfo() {
    async function showAddress(cep) {
        const inputEndereco = document.querySelector('.endereco');
        const inputBairro = document.querySelector('.bairro');
        const inputCidade = document.querySelector('.cidade');

        const dados = await getAddress(cep);
        if(!dados || dados.bairro === 'undefined') {
            inputEndereco.value = '';
            inputBairro.value = '';
            inputCidade.value = '';
            return;
        };
        
        const { logradouro, bairro, localidade  } = dados;

        inputEndereco.value = logradouro;
        inputBairro.value = bairro;
        inputCidade.value = localidade;
    }

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Container>
                <ContainerSecondary>
                    <Modal className='modal'>
                        <div className="modal-content">
                            <CloseButton className="close-button" onClick={showModal}>×</CloseButton>
                            <div className='form-container'>
                                <FormInfo>
                                    <fieldset>
                                        <legend>Dados pessoais</legend>
                                        <div>
                                            <label>Nome</label>
                                            <input type='text'></input>
                                        </div>
                                        <div>
                                            <label>Sobrenome</label>
                                            <input type='text'></input>
                                        </div>
                                        <div>
                                            <label>Telefone</label>
                                            <input type='text'></input>
                                        </div>
                                    </fieldset>
                                    
                                    <fieldset>
                                        <legend>Endereço</legend>
                                        <div>
                                            <label>CEP</label>
                                            <input type='text' placeholder='Digite seu CEP...' onChange={(e) => showAddress(e.target.value)}></input>
                                        </div>
                                        <div>
                                            <label>Endereço</label>
                                            <input type='text' className='endereco'></input>
                                        </div>
                                        <div>
                                            <label>Número</label>
                                            <input type='text'></input>
                                        </div>
                                        <div>
                                            <label>Bairro</label>
                                            <input type='text' className='bairro'></input>
                                        </div>
                                        <div>
                                            <label>Cidade</label>
                                            <input type='text' className='cidade'></input>
                                        </div>
                                    </fieldset>

                                    <Button onClick={(e) => e.preventDefault()}>Ir para pagamento</Button>
                                </FormInfo>
                            </div>
                        </div>
                    </Modal>
                </ContainerSecondary>
            </Container>
        </motion.div>
    )
}
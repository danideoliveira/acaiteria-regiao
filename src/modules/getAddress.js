import axios from "axios";

export default async function getAddress(cep) {
  try {
    const cepReplaced = cep.replace(/[^0-9]/, "");
    if (cepReplaced.length !== 8) return;

    const address = await axios(`https://viacep.com.br/ws/${cep}/json/`)
      .then((json) => json)
      .then((response) => response.data);

    if (!address.bairro) {
      return;
    } else {
      return address;
    }
  } catch (e) {
    return e;
  }
}

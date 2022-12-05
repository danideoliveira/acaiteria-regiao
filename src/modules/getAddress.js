import axios from "axios";

export default async function getAddress(cep) {
  try {
    const cepReplaced = cep.replace(/[^0-9]/, "");
    if (cepReplaced.length != 8) return;

    const address = await axios(`https://viacep.com.br/ws/${cep}/json/`)
      .then((dados) => dados)
      .then((dados) => dados.data);

    return address;
  } catch (e) {
    return e;
  }
}

import { css } from "styled-components";

export const setFlexbox = (alignItems, justifyContent, flexDirection) => css`
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
`;

export const setImageBackground = (url) => {
  return `url(${url}) no-repeat`;
};

export function showModal(order) {
  const modal = document.querySelector(".modal");
  if (modal.classList.contains("active")) {
    modal.classList.toggle("active");
    return;
  }

  modal.classList.toggle("active");
  const copo = document.querySelector(".copo-pedido");
  const acompanhamentos = document.querySelector(".acompanhamento-pedido");
  const calda = document.querySelector(".calda-pedido");

  const { morango, banana, biscoito, leite, jujuba, pacoca } = order;
  const { caldaChocolate, caldaMorango } = order;
  const newArrAcomp = [];
  const newArrCaldas = [];

  const arrAcomp = [morango, banana, biscoito, leite, jujuba, pacoca];
  const arrCaldas = [caldaChocolate, caldaMorango];
  arrAcomp.map((acomp) => {
    if (acomp !== "") newArrAcomp.push(acomp);
  });
  arrCaldas.map((acomp) => {
    if (acomp !== "") newArrCaldas.push(acomp);
  });

  copo.value = order.copo;
  calda.value = newArrCaldas.join(", ");
  acompanhamentos.value = newArrAcomp.join(", ");
}

export function showModalSoon() {
  const modal = document.querySelector(".modal-soon");
  modal.classList.toggle("active");
}

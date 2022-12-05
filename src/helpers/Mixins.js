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

export function showModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("active");
}

export function showModalSoon() {
  const modal = document.querySelector(".modal-soon");
  modal.classList.toggle("active");
}

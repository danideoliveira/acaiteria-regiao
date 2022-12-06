import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";
import { darken } from "polished";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  margin: 0 auto;
  width: 100%;
  height: auto;
  min-height: 100vh;
  /* height: 100vh; */
  background-color: ${colors.cream};

  /* @media (min-width: 320px) and (max-width: 999px) {
  } */
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("center", "center", "column")}
  max-width: 1280px;
  width: 100%;
  height: 100%;

  @media (min-width: 320px) and (max-width: 999px) {
    flex-direction: column;
  }
`;

export const DivLeft = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: 100%;
  margin: 8rem 0;

  div {
    ${setFlexbox("flex-start", "center", "column")}
    width: 50%;

    img {
      width: 70%;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
    }
  }

  @media (min-width: 320px) and (max-width: 999px) {
    div {
      /* height: 40rem; */
      width: 80%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 8rem;
  }
`;

export const DivRight = styled.div`
  /* ${setFlexbox("center", "center", "column")} */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 50%;
  height: 50%;
  justify-items: center;
  margin-top: 3rem;

  @media (min-width: 320px) and (max-width: 999px) {
    width: 70%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FormInfo = styled.form`
  fieldset {
    /* border: 1px solid #e8eeef; */
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-areas: "nome nome" "email telefone" "mensagem mensagem";
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 1rem;

    legend {
      font-size: 3.2rem;
      margin-bottom: 2rem;
      text-align: center;
      font-weight: 500;
      color: ${ colors.darkPurple };
    }
  }

  div {
    ${setFlexbox("center", "center", "column")};
  }

  label {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  input, textarea {
    font-size: 2rem;
    height: 5rem;
    padding: 1rem;
    width: 100%;
    border-radius: 5px;
    /* background-color: #e8eeef;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset; */
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgb(0 0 0 / 23%) inset;
    margin-bottom: 1.5rem;
  }

  .nome {
    grid-area: nome;
  }

  .email {
    grid-area: email;
  }

  .telefone {
    grid-area: telefone;
  }

  .mensagem {
    grid-area: mensagem;
  }

  textarea {
    width: 100%;
    max-width: 45rem;
    height: 25rem;
    resize: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    fieldset {
      /* grid-template-columns: repeat(1, 1fr); */
    }
  }
`;

export const Button = styled.button`
  ${setFlexbox("center", "center", "row")};
  background-color: ${colors.green};
  border-radius: 50px;
  color: ${colors.white};
  font-size: 2rem;
  padding: 1rem 5rem;
  font-weight: 500;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: 0.2s;
  margin: 0 auto;
  margin-bottom: 2rem;
  margin-top: 2rem;

  &:hover {
    background-color: ${darken(0.1, `${colors.green}`)};
  }

  @media (min-width: 320px) and (max-width: 999px) {
    margin-top: 2.5rem;
    padding: 1.5rem 7rem;
    font-size: 2rem;
  }
`;


export const Shape = styled.div`
  ${setFlexbox("flex-end", "flex-end", "row")}
  height: 100%;
  width: 100%;

  img {
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    width: 20rem;

    @media (min-width: 320px) and (max-width: 480px) {
      width: 10rem;
    }
  }
`;

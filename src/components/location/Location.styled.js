import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 100vh;
  background-color: ${colors.cream};
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 999px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("center", "center", "row")}
  max-width: 1280px;
  width: 100%;
  height: 100%;

  @media (min-width: 320px) and (max-width: 999px) {
    flex-direction: column;
  }
`;

export const DivLeft = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 50%;
  height: 100%;
  z-index: 1;
  background-size: cover;
  background-position: right;

  div {
    ${setFlexbox("flex-start", "center", "column")}
    width: 70%;
  }

  @media (min-width: 320px) and (max-width: 999px) {
    width: 100%;
    height: 30rem;
    background: none;
    margin-top: 3rem;

    div {
      margin: 0 auto;
      width: 80%;
    }
  }
`;

export const DivMap = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 50%;
  height: 100%;

  .container-map {
    ${setFlexbox("center", "center", "row")}
    text-align: center;
    width: 100%;
    height: 100%;

    div {
      ${setFlexbox("center", "center", "row")}
      overflow: hidden;
      background: none !important;
      width: 100%;
      height: 100%;

      iframe {
        width: 90%;
        height: 70%;
        border-radius: 20px;
        box-shadow: 1rem 1rem 0 0 ${colors.purple};
      }
    }
  }

  @media (min-width: 320px) and (max-width: 999px) {
    width: 100%;
    height: auto;
    margin-bottom: 5rem;

    .container-map {
      ${setFlexbox("center", "center", "row")}
      text-align: center;
      width: 80%;
      height: 100%;

      div {
        overflow: hidden;
        background: none !important;
        width: 100%;
        height: 100%;
        padding: 1rem;

        iframe {
          width: 100%;
          height: 50rem;
        }
      }
    }
  }
`;

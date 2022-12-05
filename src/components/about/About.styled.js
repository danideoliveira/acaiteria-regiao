import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: ${colors.cream};

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
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: 100%;

  div {
    ${setFlexbox("flex-start", "center", "column")}
    width: 70%;
  }

  @media (min-width: 320px) and (max-width: 999px) {
    div {
      height: 40rem;
      width: 80%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 8rem;
  }
`;

export const DivRight = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: 50%;

  @media (min-width: 320px) and (max-width: 999px) {
    width: 56%;
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

import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
  ${setFlexbox("center", "space-evenly", "column")}
  padding: 5rem 0 5rem 0;
  height: auto;
  min-height: 100vh;
  position: relative;
  z-index: 998;
  width: 100%;

  @media (min-width: 320px) and (max-width: 999px) {
    height: auto;
  }
`;

export const ContainerSecondary = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  z-index: 997;
`;

export const Title = styled.h2`
  ${setFlexbox("center", "center", "row")}
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  width: 100%;
  color: ${colors.darkPurple};
  font-size: 4rem;
  margin: 5rem 0;

  @media (min-width: 320px) and (max-width: 999px) {
    margin-top: 15rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
  height: auto;
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  z-index: 999;

  @media (min-width: 320px) and (max-width: 1120px) {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    row-gap: 5rem;
  }
`;

export const DivShape = styled.div`
  ${setFlexbox("flex-end", "flex-end", "row")}
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;

  img {
    z-index: 0;
    right: 0;
    bottom: 0;
    width: 10rem;
  }
`;

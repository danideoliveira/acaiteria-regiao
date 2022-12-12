import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";
import { darken } from "polished";
import { Link } from "react-router-dom";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  margin: 0 auto;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${colors.cream};
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("center", "center", "column")}
  max-width: 1280px;
  width: 90%;
  height: 100%;

  h2 {
    font-size: 9rem;
    font-weight: 100;
  }

  p {
    text-align: center;
    margin-bottom: 5rem;
  }

  @media (min-width: 320px) and (max-width: 999px) {
    flex-direction: column;
  }
`;

export const Button = styled(Link)`
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
  width: 70%;

  &:hover {
    background-color: ${darken(0.1, `${colors.green}`)};
  }

  @media (min-width: 320px) and (max-width: 999px) {
    margin-top: 2.5rem;
    padding: 1.5rem 7rem;
    font-size: 2rem;
  }
`;

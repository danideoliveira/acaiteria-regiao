import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
  ${setFlexbox("center", "space-between", "row")}
  height: 50%;
  margin-bottom: 3rem;

  a img {
    width: 50px;
    transition: 0.3s;
    cursor: pointer;
    margin-right: 1rem;

    &:hover {
      filter: invert(1);
    }
  }

  p {
    width: 100%;
    color: ${ colors.cream };
  }

  div {
    ${setFlexbox("center", "flex-start", "row")}
    height: 100%;
  }

  @media (min-width: 320px) and (max-width: 900px) {
    a img {
      width: 5rem;
    }

    div {
      width: 90%;

      p {
        margin: initial;
      }
    }
  }
`;

import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
  ${setFlexbox("center", "space-between", "row")}
  height: 50%;
  margin-bottom: 3rem;

  a img {
    width: 3rem;
    transition: 0.3s;
    cursor: pointer;
    margin-right: 1rem;

    &:hover {
      filter: invert(1);
    }
  }

  p {
    width: 100%;
    font-size: 1.8rem;
  }

  div {
    ${setFlexbox("center", "flex-start", "row")}
    height: 100%;
  }

  @media (min-width: 320px) and (max-width: 900px) {
    /* a img {
      width: 5rem;
    } */

    div {
      width: 90%;

      p {
        margin: initial;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    div p {
      font-size: 1.6rem;
    }
  }
`;

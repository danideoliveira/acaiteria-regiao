import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { darken } from "polished";
import { colors } from "../../helpers/variables";

export const Container = styled.footer`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  font-size: 1.5rem;
  position: absolute;
  background-color: ${(props) => props.backgroundColor || `${colors.cream}`};
  z-index: 0;

  p {
    padding: 1rem;
    color: ${(props) => props.textColor || `${colors.darkPurple}`};

    a {
      color: ${(props) => props.textColor || `${colors.darkPurple}`};
      transition: 0.3s;

      &:hover {
        color: ${darken(0.5, `${colors.darkPurple}`)};
        transition: 0.3s;
      }
    }
  }
`;

export const ContainerSecondary = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
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

    @media (min-width: 320px) and (max-width: 999px) {
      width: 15rem;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      width: 10rem;
    }
  }
`;

export const ContactContainer = styled.div`
  width: 70%;
  ${setFlexbox("center", "center", "row")};
  background-color: ${(props) => props.backgroundColor};
  margin: 0 auto;

  .box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    height: 50%;
    justify-items: center;
    margin-top: 3rem;
  }

  @media (min-width: 320px) and (max-width: 999px) {
    .box {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;

    .box {
      width: 100%;
    }
  }
`;

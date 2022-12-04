import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { darken } from "polished";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${ colors.cream };

    @media (min-width: 320px) and (max-width: 999px) {
        height: auto;
    }
`;

export const ContainerSecondary = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    max-width: 1280px;
    width: 100%;  
    height: 100%;

    @media (min-width: 320px) and (max-width: 999px) {
        flex-direction: column-reverse;
    }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  z-index: 999;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 90%;
    height: 70%;
    border-radius: 0.5rem;
    overflow: auto;
  }
`;

export const CloseButton = styled.button`
    ${ setFlexbox('center', 'center', 'column') };
    float: right;
    width: 3rem;
    height: 3rem;
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;

    &:hover {
        background-color: darkgray;
    }
`;

export const FormInfo = styled.form`   
    fieldset {
        border: 1px solid #e8eeef;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        width: 90%;
        margin: 0 auto;
        margin-top: 5rem;
        padding: 1rem;

        legend {
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }
    }

    div {
        ${ setFlexbox('center', 'center', 'column') };
    }

    label {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        width: 100%;
    }

    input {
        font-size: 2rem;
        height: 5rem;
        padding: 1rem;
        width: 100%;
        border-radius: 5px;
        background-color: #e8eeef;
        box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        fieldset {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export const Button = styled.button`
    ${ setFlexbox('center', 'center', 'row') };
    background-color: ${ colors.green };
    border-radius: 50px;
    color: ${ colors.white };
    font-size: 2.0rem;
    padding: 1rem 5rem;
    font-weight: 500;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.2s;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 2rem;

    &:hover {
        background-color: ${darken(0.1, `${ colors.green }`)};
    }

    @media (min-width: 320px) and (max-width: 999px) {
        margin-top: 2.5rem;
        padding: 1.5rem 7rem;
        font-size: 2rem;
    }
`;
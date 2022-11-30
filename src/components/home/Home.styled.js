import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { floating, fadeInFromTop } from "../../helpers/CustomAnimations";
import { colors } from "../../helpers/variables";
import { darken } from "polished";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
        min-height: auto;
        height: auto;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    height: 100%;
    width: 50%;
    gap: 15px;
    background-size: cover;
    background-position: right;

    div {
        z-index: 1;
        width: 70%;

        p {
            width: 70%;
            margin-bottom: 2rem;
        }
    }

    @media (min-width: 320px) and (max-width: 900px) {
        width: 90%;
        height: 5vh;
        background: none;
        align-items: center;
        margin-top: 20rem;

        div {
            margin-left: 0;
            width: 80%;

            p {
                width: 70%;
            }
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        div p {
            width: 95%;
        }
    }
`;

export const DivRight = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    height: 100%;
    position: relative;
    z-index: 1;

    div {
        ${setFlexbox('center', 'center', 'row')}
        width: 80%;
        height: 100%;
        transition: 0.5s;

        img {
            height: 135%;
            transition: 0.3s;
            z-index: 1;
            margin-top: 8rem;
            /* animation: ${fadeInFromTop} .5s linear forwards, ${floating} ease 4s infinite; */
        }
    }  

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        height: 50%;

        div {
            width: 90%;
            height: 100%;

            img {
                height: 60rem;
                margin-top: auto;
            }
        }
    }
`;

export const ShapeBubble = styled.img`
    position: absolute;
    z-index: 0;
    height: 100%;
    max-height: 52rem;
    margin: 3rem 7rem 0 0;
    
    @media (min-width: 320px) and (max-width: 900px) {
        max-height: 40rem;
        margin-right: auto;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        max-height: 30rem;
    }
`;

export const Title = styled.h1`
    font-family: "Varela Round", Arial, Helvetica, sans-serif;
    width: 100%;
    font-size: 6.4rem;
    color: ${colors.purple};
    font-weight: 800;
    margin-bottom: 1rem;

    @media (min-width: 320px) and (max-width: 900px) {
        text-align: center;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 5rem;
    }
`;

export const Button = styled.a`
    background-color: ${ colors.green };
    border-radius: 50px;
    color: #fff;
    font-size: 2.0rem;
    padding: 1rem;
    font-weight: 500;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${darken(0.1, `${ colors.green }`)};
    }

    @media (min-width: 320px) and (max-width: 900px) {
        display: none;
    }
`;
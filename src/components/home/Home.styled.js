import styled from "styled-components";
import { setFlexbox, setImageBackground } from "../../helpers/Mixins";
import images from "../images/Images";
import { floating, fadeInFromTop } from "../../helpers/CustomAnimations";
import { colors } from "../../helpers/variables";

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
        width: 50%;
    }

    @media (min-width: 320px) and (max-width: 900px) {
        width: 90%;
        height: 40vh;
        background: none;
        align-items: center;

        div {
            margin-left: 0;
            width: 80%; 
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
                height: 70rem;
            }
        }
    }
`;

export const ShapeBubble = styled.img`
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    height: 450px;
    max-height: 500px;
    
    @media (min-width: 320px) and (max-width: 900px) {
        display: none;
    }
`;

export const Title = styled.h1`
    font-family: "Beach Sound", Arial, Helvetica, sans-serif;
    width: 100%;
    text-align: justify;
    font-size: 6.4rem;
    color: ${colors.white};
    font-weight: 800;

    @media (min-width: 320px) and (max-width: 900px) {
        text-align: center;
    }
`;
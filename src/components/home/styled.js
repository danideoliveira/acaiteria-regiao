import styled from "styled-components";
import { setFlexbox, setImageBackground } from "../../helpers/Mixins";
import images from "../images/Images";
import { floating, fadeInFromTop } from "../../helpers/CustomAnimations";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: #6E4555;

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
        gap: 50px;
        background-color: #D282A6;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('flex-start', 'center', 'column')}
    height: 100%;
    width: 50%;
    gap: 15px;
    background: ${setImageBackground(images.homeLeftDivider)};
    background-size: cover;
    background-position: right;

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        height: 50%;
        background: none;
        align-items: center;
        border-radius: 50% 0 50% 0;
    }

    div {
        z-index: 1;
        margin-left: 15%;
        width: 50%;

        @media (min-width: 320px) and (max-width: 900px) {
            margin-left: 0;
            width: 65%; 
        }
    }
`;

export const DivRight = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    height: 100%;
    position: relative;
    z-index: 1;

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        height: 50%;
        background-color: #6E4555;
        border-radius: 50% 0 0 0;
    }

    div {
        ${setFlexbox('center', 'center', 'row')}
        width: 80%;
        height: 100%;
        transition: 0.5s;
        
        @media (min-width: 320px) and (max-width: 900px) {
            width: 90%;
            height: 100%;
        }

        img {
            height: 135%;
            transition: 0.3s;
            z-index: 1;
            /* animation: ${fadeInFromTop} .5s linear forwards, ${floating} ease 4s infinite; */

            @media (min-width: 320px) and (max-width: 900px) {
                height: 150%;
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
    color: #fff;
    font-weight: 800;

    @media (min-width: 320px) and (max-width: 900px) {
        padding-top: 10rem;
        text-align: center;
    }
`;

export const Description = styled.p`
    line-height: 2.5rem;
    width: 100%;
    text-align: justify;
    font-size: 2rem;
    color: #F5E3E0;
`;
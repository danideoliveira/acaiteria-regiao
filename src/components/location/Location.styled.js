import styled from "styled-components";
import { setFlexbox, setImageBackground } from "../../helpers/Mixins";
import images from "../images/Images";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 100%;
    height: 100vh;
    background-color: ${colors.purple};

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const ContainerSecondary = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 100%;  
    height: 100%;

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    height: 100%;
    z-index: 1;
    /* background: ${setImageBackground(images.locationLeftDivider)}; */
    background-size: cover;
    background-position: right;

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        height: 20%;
        background: none;
    }

    div {
       ${setFlexbox('flex-start', 'center', 'column')}
        width: 50%;

        @media (min-width: 320px) and (max-width: 900px) {
            margin: 0 auto;
            width: 65%;
        }
    }
`;

export const DivMap = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    height: 100%;

    @media (min-width: 320px) and (max-width: 900px) {
        width: 80%;
        height: 50%;
    }

    div {
        text-align: center;
        width: 100%;
        height: 70%;

        @media (min-width: 320px) and (max-width: 900px) {
            text-align: center;
            width: 80%;
        }

        div {
            overflow: hidden;
            background: none !important;
            width: 45%;
            height: 100%;
            position: absolute;

            @media (min-width: 320px) and (max-width: 900px) {
                overflow: hidden;
                background: none !important;
                width: 65%;
                height: 50%;
                padding: 1rem;
            }   

            iframe {
                width: 500px;
                height: 480px;
                border-radius: 20px;
                box-shadow: 1rem 1rem 0 0 ${colors.cream};

                @media (min-width: 320px) and (max-width: 900px) {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;
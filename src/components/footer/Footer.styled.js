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
    background-color: ${colors.cream};
    /* bottom: 0; */
    z-index: 0;

    p {
        padding: 1rem;
        color: ${colors.purple};

        a {
            color: ${colors.purple};
            transition: 0.3s;
            
            &:hover {
                color: ${darken(0.5, `${colors.purple}`)};
                transition: 0.3s;
            }
        }

    }

    /* @media (min-width: 320px) and (max-width: 900px) {
        bottom: auto;
    } */
`;

export const ContainerSecondary = styled.div`
    max-width: 1280px;
    width: 100%;  
    height: 100%;
    margin: 0 auto;
`;

export const Shape = styled.div`
    ${setFlexbox('flex-end', 'flex-end', 'row')}
    height: 100%;
    width: 100%;

    img {
        position: absolute;
        z-index: 0;
        right: 0;
        bottom: 0;
        width: 20rem;
        
        @media (min-width: 320px) and (max-width: 480px) {
            width: 10rem;
        }
    }  
`;
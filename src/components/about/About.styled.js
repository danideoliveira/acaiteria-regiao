import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${ colors.cream };

    @media (min-width: 320px) and (max-width: 900px) {
        height: auto;
    }
`;

export const ContainerSecondary = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    max-width: 1280px;
    width: 100%;  
    height: 100%;

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    width: 100%;
    height: 100%;

    div {
        ${setFlexbox('flex-start', 'center', 'column')}
        width: 70%;     
    }

    @media (min-width: 320px) and (max-width: 900px) {
        
        div {
            height: 40rem;
            width: 80%;
        }
    } 
`;

export const DivRight = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    width: 100%;
    height: 50%;

    @media (min-width: 320px) and (max-width: 900px) {
        width: 55%;
    }
`;
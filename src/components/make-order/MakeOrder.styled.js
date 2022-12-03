import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";
import { darken } from "polished";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${ colors.cream };

    @media (min-width: 320px) and (max-width: 999px) {
        height: auto;
        min-height: 100vh;
    }
`;

export const ContainerSecondary = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    max-width: 1280px;
    width: 100%;  
    height: 100%;

    @media (min-width: 320px) and (max-width: 999px) {
        flex-direction: column;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    width: 100%;
    height: 100%;
    
    div {
        ${setFlexbox('center', 'center', 'column')}
        width: 70%;
        
        p {
            font-size: 2rem;
        }
    }
    
    @media (min-width: 320px) and (max-width: 999px) {
        
        div {
            height: 40rem;
            width: 80%;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 8rem;
    }
`;

export const DivRight = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    width: 100%;
    height: 100%;

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 80%;

        h2 {
            margin-bottom: 3rem;
        }
    }

    @media (min-width: 320px) and (max-width: 999px) {
        width: 56%;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 1.5rem;
    /* text-align: ${(props) => props.textAlign}; */
`;

export const Item = styled.label`
    font-size: 2rem;
    
    input {
        margin-right: 0.5rem;
    }
`;

export const Label = styled.p`
    font-size: 2.5rem;
    color: ${colors.darkPurple};
    font-weight: 600;
    margin-bottom: 1rem;
`;

export const Button = styled.button`
    background-color: ${colors.green};
    border-radius: 50px;
    color: #fff;
    font-size: 2.0rem;
    padding: 1rem 5rem;
    font-weight: 500;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${darken(0.1, `${colors.green}`)};
    }

    @media (min-width: 320px) and (max-width: 999px) {
        padding: 2rem 7rem;
        margin-bottom: 5rem;
    }
`;
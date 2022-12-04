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

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    width: 100%;
    height: 100%;
    
    div {
        ${setFlexbox('center', 'center', 'column')}
        width: 70%;
        position: relative;
        overflow: hidden;
        height: 100%;

        img {
            width: 100%;
            position: absolute;
            transition: 0.5s;
        }

        .maker-item {
            display: none;
        }
        
        p {
            font-size: 2rem;
        }
    }
    
    @media (min-width: 320px) and (max-width: 999px) {
        height: 70rem;

        div {
            height: 100%;
            width: 80%;

            img {
                width: 50rem;
            }
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        div img {
            width: 45rem;
        }
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
        width: 100%;

        section {
            margin-top: 15rem;

            div {
                margin-bottom: 2rem;
            }
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 1.5rem;
    /* text-align: ${(props) => props.textAlign}; */

    @media (min-width: 320px) and (max-width: 999px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Item = styled.label`
    font-size: 2rem;
    color: ${colors.darkPurple};
    font-weight: 500;
    
    input {
        margin-right: 0.5rem;
    }
`;

export const Label = styled.p`
    font-size: 2.5rem;
    color: ${colors.darkPurple};
    font-weight: 600;
    margin-bottom: 2rem;
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
    }
`;
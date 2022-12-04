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

                h2 {
                    font-size: 5.4rem;
                }
            }

            .continue-button {
                place-self: center;
            }
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        section {
            width: 80%;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 1.5rem;

    @media (min-width: 320px) and (max-width: 999px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Item = styled.label`
    font-size: 2rem;
    color: ${colors.darkPurple};
    font-weight: 500;
    

    input[type="checkbox"], 
    input[type="radio"] {
        appearance: none;
        /* margin: 0; */
        margin-right: 1rem;
        font: inherit;
        color: ${ colors.darkPurple };
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid ${ colors.darkPurple };
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        justify-content: center;
        align-items: center;
        flex-direction: row;
        display: inline-flex;
        place-content: center;
        cursor: pointer;
    }

    input[type="checkbox"]::before,
    input[type="radio"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${ colors.darkPurple };
    }

    input[type="checkbox"]:checked::before,
    input[type="radio"]:checked::before {
        transform: scale(1);
    }

    @media (min-width: 320px) and (max-width: 999px) {
        font-size: 3rem;

        input {
            margin-bottom: 1rem;
        }
    }
`;

export const Label = styled.p`
    font-size: 2.5rem;
    color: ${colors.darkPurple};
    font-weight: 600;
    margin-bottom: 2rem;

    @media (min-width: 320px) and (max-width: 999px) {
        font-size: 3.5rem;
    }
`;

export const Button = styled.button`
    background-color: ${ colors.green };
    border-radius: 50px;
    color: ${ colors.white };
    font-size: 2.0rem;
    padding: 1rem 5rem;
    font-weight: 500;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${darken(0.1, `${ colors.green }`)};
    }

    @media (min-width: 320px) and (max-width: 999px) {
        margin-top: 2.5rem;
        padding: 1.5rem 7rem;
        font-size: 3rem;
        width: 100%;
    }
`;
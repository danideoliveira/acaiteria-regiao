import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { darken } from 'polished';
import { colors } from "../../helpers/variables";

export const Container = styled.div`
    ${setFlexbox('flex-start', 'flex-start', 'row')}
    height: 250px;
    overflow: hidden;
    
    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        width: 250px;
        height: auto;
    }
`;

export const DivImage = styled.div`
    width: auto;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    max-width: 250px;
    min-width: 250px;

    img {
        height: 250px;
        width: 250px;
        transition: 0.3s;

        &:hover {
            transition: 0.3s;
            transform: scale(1.15);
        }
    }
`;

export const DivSpecialtiesInfo = styled.div`
    ${setFlexbox('flex-start', 'space-around', 'column')}
    padding: 2rem 0 0 1.5rem;
    width: auto;

    p:nth-child(2) {
        margin-bottom: 2rem;
        width: 100%;
    }
    
    @media (min-width: 320px) and (max-width: 480px) {
        padding-left: 0;
        width: 100%;

        p {
            width: 100%;
        }
    }
`;

export const Title = styled.h3`
    line-height: 2.5rem;
    width: 100%;
    text-align: justify;
    font-size: 2.5rem;
    color: ${ colors.darkPurple };
    font-weight: 800;
`;

export const Price = styled.p`
    line-height: 2.5rem;
    width: 100%;
    text-align: justify;
    font-size: 2.2rem;
    color: ${ colors.purple };
    font-weight: 700;
`;

export const Button = styled.button`
    background-color: ${ colors.green };
    border-radius: 50px;
    color: #fff;
    font-size: 2.0rem;
    padding: 0.7rem;
    font-weight: 500;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${darken(0.1, `${ colors.green }`)};
    }
`;

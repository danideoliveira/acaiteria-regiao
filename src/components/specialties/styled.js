import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const Container = styled.div`
    ${setFlexbox('center', 'space-evenly', 'column')}
    padding: 5rem 0 5rem 0;
    height: auto;
    min-height: 100vh;
    position: relative;
    z-index: 998;
    background-color: #F5E3E0;

    @media (min-width: 320px) and (max-width: 900px) {
        height: auto;
    }
`;

export const Title = styled.h2`
    ${setFlexbox('center', 'center', 'row')}
    font-family: "Beach Sound", Arial, Helvetica, sans-serif;
    width: 100%;
    padding: 5rem 0 5rem 0;
    color: #3A3238;
    font-size: 4rem;

    @media (min-width: 320px) and (max-width: 900px) {
        padding: 20px;
        padding: 3rem 0 10rem 0;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: 65%;
        text-align: center;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8rem;
    max-width: 1000px;
    height: auto;
    margin-top: 20px;
    z-index: 999;

    @media (min-width: 320px) and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        width: 80%;
        row-gap: 5rem;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: auto;
    }
`;

export const DivShape = styled.div`
    ${setFlexbox('flex-end', 'flex-end', 'row')}
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;

    img {
        z-index: 0;
        right: 0;
        bottom: 0;
        width: 100px;
    }
`;
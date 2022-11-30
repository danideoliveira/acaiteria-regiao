import styled from "styled-components";

export const Title = styled.h2`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    width: 100%;
    font-size: 5.4rem;
    color: ${(props) => props.color};
    margin-bottom: 2rem;

    @media (min-width: 320px) and (max-width: 900px) {
        text-align: center;
        font-size: 4rem;
        width: 100%;
    }
`;

export const Description = styled.p`
    line-height: 2.5rem;
    width: 100%;
    text-align: justify;
    font-size: 2rem;
    color: ${(props) => props.color};

    @media (min-width: 320px) and (max-width: 900px) {
        width: 70%;
        margin: 0 auto;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: 95%;
    }
`;
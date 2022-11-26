import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${ colors.darkPurple };

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
        min-height: 100vh;
        height: auto;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    width: 100%;
    height: 100%;

    @media (min-width: 320px) and (max-width: 900px) {
        height: 60%;
    }

    div {
        ${setFlexbox('flex-start', 'center', 'column')}
        width: 50%;

        @media (min-width: 320px) and (max-width: 900px) {
            width: 70%;
            margin-bottom: 30px;
        }

        @media (min-width: 320px) and (max-width: 480px) {
            margin-top: 30px;
        }
    }
`;

export const DivRight = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    width: 100%;
    height: 50%;

    @media (min-width: 320px) and (max-width: 900px) {
        width: 50%;
    }
`;
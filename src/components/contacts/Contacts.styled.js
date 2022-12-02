import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const Container = styled.div`
    ${setFlexbox('center', 'space-between', 'row')}
    width: 60%;
    height: 50%;
    margin-bottom: 3rem;

    a img {
        width: 50px;
        transition: 0.3s;
        cursor: pointer;
    }

    div {
       ${setFlexbox('center', 'flex-start', 'row')}
        width: 80%;
        height: 100%;
    }

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        justify-content: flex-start;

        a img {
            width: 5rem;    
        }

        div {
            width: 90%;
            margin-left: 5%;

            p {
                margin: initial;
            }
        }
    }
`;
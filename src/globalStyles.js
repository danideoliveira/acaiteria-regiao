import { createGlobalStyle } from "styled-components";
import { colors } from "./helpers/variables";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
        border: none;
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    }
    
    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
        background-color: ${colors.cream};
    }

    @media (min-width: 320px) and (max-width: 768px) {
        html {
            font-size: 60%;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        html {
            font-size: 50%;
        }
    }
`;
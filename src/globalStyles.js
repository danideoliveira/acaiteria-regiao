import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800&display=swap');
    @import url('http://fonts.cdnfonts.com/css/sunshine-festival');
    @import url('http://fonts.cdnfonts.com/css/healing-lighters');
    @import url('http://fonts.cdnfonts.com/css/beach-sound');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        text-decoration: none;
        scroll-behavior: smooth;
        border: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
    }

    @media (min-width: 320px) and (max-width: 768px) {
        html {
            font-size: 60%;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        html {
            font-size: 56%;
        }
    }
`;
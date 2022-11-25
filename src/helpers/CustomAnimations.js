import {keyframes} from "styled-components";

export const fadeInFromTop =  keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const floating = keyframes`
    0% {
        transform: translate(0%, 0%) rotate(360deg);
    }
    50% {
        transform: translate(0%, 2%) rotate(360deg);
    }
    100% {
        transform: translate(0%, 0%) rotate(360deg);
    }
`;
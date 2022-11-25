import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const Nav = styled.nav`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    max-width: 980px;
    height: 8vh;
    position: absolute;
    z-index: 999;
    right: 0;
    padding: 1rem 1rem 0 0;

    @media (min-width: 320px) and (max-width: 900px) {
        justify-content: flex-start;
        align-items: flex-end;
        width: 95%;
        height: 8vh;
    }
`;

export const Menu = styled.ul`
    ${setFlexbox('center', 'space-evenly', 'row')}
    height: 100%;
    width: 100%;
    margin: 0 auto;

    &.active {
        left: 0;
    }

    @media (min-width: 320px) and (max-width: 900px) {
        position: fixed;
        left: -100%;
        top: 0;
        gap: 0;
        padding-top: 15vh;
        flex-direction: column;
        width: 50%;
        height: 100%;
        text-align: center;
        transition: 0.3s;
        background-color: #6E4555;
        z-index: 1;
        justify-content: flex-start;
    }

    li {
        ${setFlexbox('center', 'center', 'row')}
        width: 100%;
        height: 100%;

        @media (min-width: 320px) and (max-width: 900px) {
            height: 15%;
        }

        a {
            ${setFlexbox('center', 'center', 'row')}
            cursor: pointer;
            height: 100%;
            width: 100%;
            color: #6E4555;
            font-size: 1.8rem;
            transition: 0.2s;
            background-color: #FFFFFF;
            border-radius: 50px;
            margin-right: 10px;

            &:hover {
                color: #FFFFFF;
                background-color: #6E4555;
            }
            
            @media (min-width: 320px) and (max-width: 900px) {
                color: #FFFFFF;
                background-color: #6E4555;
                height: 100%;
                border-radius: 0;
                background-color: none;
                margin-right: 0;

                &:hover {
                    background-color: #FFFFFF;
                    color: #6E4555;
                }
            }

        }
    }
`;

export const MobileMenu = styled.div`
    cursor: pointer;
    display: none;
    z-index: 999;

    @media (min-width: 320px) and (max-width: 900px) {
        display: block;
        position: fixed;

        &.active div:nth-child(2) {
            opacity: 0;
        }

        &.active div:nth-child(1) {
            transform: translateY(10px) rotate(45deg);
        }

        &.active div:nth-child(3) {
            transform: translateY(-10px) rotate(-45deg);
        }
    }

    div {
        display: block;
        width: 40px;
        height: 5px;
        margin: 5px auto;
        background-color: #FFFFFF;
        transition: 0.3s ease;
        border-radius: 10px;

        @media (min-width: 320px) and (max-width: 480px) {
            width: 25px;
            height: 3px;
        }
    }
`;
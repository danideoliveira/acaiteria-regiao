import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/variables";

export const Nav = styled.nav`
    ${setFlexbox('center', 'flex-end', 'row')}
    width: 100%;
    max-width: 980px;
    height: 8vh;
    z-index: 999;
    margin: 0 auto;
    padding: 5px 0;
    position: absolute;
    right: 0;

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
    width: 70%;
    margin-right: 10%;

    &.active {
        left: 0;
    }

    li {
        ${setFlexbox('center', 'center', 'row')}
        width: 100%;
        height: 100%;

        a {
            ${setFlexbox('center', 'center', 'row')}
            cursor: pointer;
            height: 100%;
            width: 100%;
            color: ${colors.purple};
            font-size: 1.6rem;
            transition: 0.2s;
            border-radius: 50px;
            margin-right: 10px;

            &:hover {
                color: ${colors.white};
                background-color: ${colors.darkPurple};
            }
        }
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
        background-color: ${colors.purple};
        z-index: 1;
        justify-content: flex-start;

        li {
            height: 15%;
            
            a {
                color: ${colors.white};
                height: 100%;
                border-radius: 0;
                background-color: none;
                margin-right: 0;
    
                &:hover {
                    background-color: ${colors.white};
                    color: ${colors.purple};
                }
            }
        }
    }
`;

export const MobileMenu = styled.div`
    cursor: pointer;
    display: none;
    z-index: 999;

    div {
        display: block;
        width: 4rem;
        height: 5px;
        margin: 5px auto;
        background-color: ${colors.white};
        transition: 0.3s ease;
        border-radius: 10px;

    }

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
`;
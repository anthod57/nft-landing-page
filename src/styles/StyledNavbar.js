import styled, { keyframes } from 'styled-components';

// HAMBURGER MENU BUTTON ANIMATIONS
export const inT = keyframes`
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(13px) rotate(0deg);
    }
    100% {
        transform: translateY(13px) rotate(135deg);
    }
`;

export const outT = keyframes`
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(13px) rotate(0deg);
    }
    100% {
        transform: translateY(13px) rotate(135deg);
    }
`;

export const inM = keyframes`
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(45deg);
    }
`;

export const outM = keyframes`
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(45deg);
    }
`;

export const inBtm = keyframes`
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-13px) rotate(0deg);
    }
    100% {
        transform: translateY(-13px) rotate(135deg);
    }
`;

export const outBtm = keyframes`
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-13px) rotate(0deg);
    }
    100% {
        transform: translateY(-13px) rotate(135deg);
    }
`;
///////////////////////////////////////////////////////////////////////////

export const LightAnimation = keyframes`
    0% {
        right: 50%;
        left: 50%;
        opacity: 0;
    }

    25% {
        right: 50%;
        left: 50%;
        opacity: 0;
    }

    100% {
        right: 0;
        opacity: 1;
        left: 0;
    }
`

export const Container = styled.nav`
    width: 100%;
    height: 100px;
    background: ${props => props.theme.pink};
    background: linear-gradient(180deg, ${props => props.theme.pink} 0%, ${props => props.theme.blue} 100%);
    z-index: 10;
    position: absolute;
    max-width: 100%;
    
    &:after {   
        content: "";
        height: 5px;
        position: absolute;
        background: ${props => props.theme.lightBlue};
        box-shadow: 0px 0px 20px 4px ${props => props.theme.lightBlue};
        animation: ${LightAnimation} 2s;
        z-index: 9;
        left: 0;
        right: 0;
    }
`

export const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    max-width: 1400px;
    margin: auto;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .center {
        flex-shrink: 0;
        z-index: 2;
        .logo {
            margin: auto 2em;
            h2 {
                font-size: 2em;
                transform: skew(-15deg);
                transition: font-size 0.5s;

                &:after {
                    content: '';
                    position: absolute;
                    top: -0.1em;
                    right: 0.05em;
                    width: 0.4em;
                    height: 0.4em;
                    background: 
                    radial-gradient(white 3%, rgba(white, 0.3) 15%, rgba(white, 0.05) 60%, transparent 80%),
                    radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 5% 100%,
                    radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 70% 5%;
                    background-repeat: no-repeat;
                }

                span:first-child {
                    display: block;
                    text-shadow: 0 0 0.1em #8ba2d0, 0 0 0.2em black,  0 0 5em #165ff3;
                    -webkit-text-stroke: 0.06em rgba(black, 0.5);
                }
                
                span:last-child {
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-image: linear-gradient(#032d50 25%, #00a1ef 35%, white 50%, #20125f 50%, #8313e7 55%, #ff61af 75%);
                    -webkit-text-stroke: 0.01em #94a0b9;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }

    .left, .right {
        overflow: hidden;
        flex-grow: 1;
        display: none;
        
        ul {
            display: flex;
            width: 100%;
            list-style: none;
            font-family: 'Orbitron', sans-serif;
            font-size: 1.5em;
            font-weight: 500;

            li {
                margin: 1rem;
            }

            a {
                transition: 0.5s all;
            }

            a:hover {
                color: ${props => props.theme.lightBlue};
                text-shadow: 0px 0Px 10px ${props => props.theme.lightBlue};
            }
        }
    }
    
    @media only screen and (min-width: 990px){
        .center {
            .logo {
                h2 {
                    font-size: 3em;
                }
            }
        }
        
        .left, .right {
            display: unset;
        }
    }
`

export const MobileMenuButton = styled.div`
    z-index: 999;
    cursor: pointer;
    width: 40px;
    height: 100px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1em;

    span {
        width: 100%;
        float: left;
        height: 5px;
        background-color: ${props => props.theme.lightBlue};
        box-shadow: 0px 0px 4px 0px ${props => props.theme.lightBlue};
        margin-bottom: 8px;
        color: white;
        border-radius: 2px;
        transition: width 1s;
    }

    &.animate {
        transition: width 1s;
    }

    span:nth-child(1) {
        animation: ${props => props.show ? inT : outT} 0.8s ${props => props.show ? "forwards" : "backwards"};
        animation-direction: ${props => props.show ? "unset" : "reverse"};
    }

    span:nth-child(2) {
        animation: ${props => props.show ? inM : outM} 0.8s ${props => props.show ? "forwards" : "backwards"};
        animation-direction: ${props => props.show ? "unset" : "reverse"};
    }

    span:nth-child(3) {
        animation: ${props => props.show ? inBtm : outBtm} 0.8s ${props => props.show ? "forwards" : "backwards"};
        animation-direction: ${props => props.show ? "unset" : "reverse"};
    }

    @media only screen and (min-width: 990px){
        display: none;
    }
`

export const MobileMenu = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: ${props => props.show ? "0" : "-100vh"};
    overflow: hidden;
    opacity: ${props => props.show ? "1" : "0"};
    left: 0;
    backdrop-filter: blur(15px) brightness(0.75);
    transition: all 0.5s;
    z-index: 8;

    ul {
        margin-top: 116px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        list-style: none;
        font-size: 1.5em;
        font-weight: 500;

        li {
            margin: 1rem;
        }

        a {
            transition: 0.5s all;
        }

        a:hover {
            color: ${props => props.theme.lightBlue};
            text-shadow: 0px 0Px 10px ${props => props.theme.lightBlue};
        }
    }

    @media only screen and (min-width: 990px){
        display: none;
    }
`;
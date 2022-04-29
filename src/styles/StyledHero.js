import styled, { keyframes } from 'styled-components';

export const nftAnimation = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.025);
    }

    100% {
        transform: scale(1);
    }
`

export const LightAnimation = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const Container = styled.section`
    height: 100vh;
    padding-top: 100px;
    width: 100%;
    position: relative;

    .hero-background {
        width: 100%;
        top: 0;
        height: 100vh;
        position: absolute;
        overflow: hidden;

        img {
            filter: blur(8px) brightness(0.8);
            object-fit: cover;
            height: 100%;
            object-position: center;
            width: 100%;
        }
    }

    .custom-shape-divider-bottom-1651066306 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
        display: flex;
        justify-content: center;
        padding-bottom: 1em;
    }

    .custom-shape-divider-bottom-1651066306 svg {
        position: relative;
        width: calc(100% + 1.3px);
        filter: drop-shadow(0px 2px 4px ${props => props.theme.lightBlue});
        min-width: 800px;
        height: 150px;
    }

    .custom-shape-divider-bottom-1651066306 .shape-fill {
        fill: ${props => props.theme.pink}
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5vh 1em 0 1em;

    h1 {
        font-size: 1.5em;
        z-index: 5;
    }

    h2 {
        font-size: 1em;
        font-style: italic;
        font-weight: 300;
        z-index: 5;
    }

    a {
        margin: 2em;
        z-index: 5;

        button {
            margin: 0;
        }
    }

    @media only screen and (min-width: 768px){
        max-width: 1200px;

        h1 {
            font-size: 2.5em;
        }

        h2 {
            font-size: 1.5em;
        }
    }
`

export const NFTSPreview = styled.div`
    z-index: 4;
    width: 100%;
    height: calc(100% - 150px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform-style: preserve-3d;

    @media only screen and (max-width: 380px){
        margin-top: 5em;
    }
`

export const NFTCard = styled.div`
    position: absolute;
    transition: 0.5s all;
    cursor: url('images/pointer.png'), pointer;
    max-width: 25%;
    aspect-ratio: 3/4;

    :nth-child(1){ 
        transform: translate(-100%, 15%) rotateZ(-20deg) scale(0.95);
        z-index: 0;

        &:hover {
            z-index: 3;
            transform: translate(-100%, 15%) rotateZ(-20deg) scale(1.1);
        }
    }

    :nth-child(2){ 
        transform: translate(-50%, 5%) rotateZ(-10deg);
        z-index: 1;

        &:hover {
            z-index: 3;
            transform: translate(-50%, 5%) rotateZ(-10deg) scale(1.1);
        }
    }

    :nth-child(3){ 
        z-index: 2;
        transform: translate(0, 0) scale(1.05);

        &:hover {
            transform: scale(1.1);
        }
    }

    :nth-child(4){ 
        transform: translate(50%, 5%) rotateZ(10deg);
        z-index: 1;

        &:hover {
            z-index: 3;
            transform: translate(50%, 5%) rotateZ(10deg) scale(1.1);
        }
    }

    :nth-child(5){ 
        transform: translate(100%, 15%) rotateZ(20deg) scale(0.95);;  
        z-index: 0;

        &:hover {
            z-index: 3;
            transform: translate(100%, 15%) rotateZ(20deg) scale(1.1);
        }
    }

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px #4cc9f080;
    }
`
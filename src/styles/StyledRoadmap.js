import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    position: relative;

    .roadmap-background {
        width: 100%;
        min-height: 100vh;
        position: absolute;
        overflow: hidden;
        height: 100%;

        img {
            filter: blur(8px) brightness(0.8);
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
            position: absolute;
        }
    }

    .custom-shape-divider-bottom-1651066306 {
        position: absolute;
        left: 0;
        z-index: 1;
        width: 100%;
        overflow: hidden;
        line-height: 0;
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
    min-height: calc(100vh - 100px);
    height: 100%;
    position: relative;
    margin: auto;
    padding: calc(5vh + 100px) 1em calc(5vh + 100px) 1em;
    text-align: center;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2em;
        margin-bottom: 1em;
    }

    @media only screen and (min-width: 768px){
        max-width: 1200px;

        h2 {
            font-size: 2.5em;
        }
    }
`;

export const RoadMapContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1em;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: calc(50% - 4px);
        z-index: 0;
        width: 8px;
        border-radius: 4px;
        background-color: ${props => props.theme.pink};
        box-shadow: 0px 0px 20px 4px ${props => props.theme.lightBlue}; 
    }

    @media only screen and (max-width: 768px){     
        &:after {
            right: 0;
            left: calc(1em - 4px);
        }
    }
`
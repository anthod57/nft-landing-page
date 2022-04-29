import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: auto;
    position: relative;
    text-align: right;
    transform: rotateY(90deg);
    transition: transform ease-in-out 0.5s;


    .check-point {
        width: 49%;
        padding: 0 1em;
        float: ${props => props.right ? "right" : ""};
        text-align: ${props => props.right ? "left" : ""};
    }

    &:before {
        content: "";
        position: absolute;
        right: calc(50% - 8px);
        top: calc(50% - 8px);
        z-index: 1;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: ${props => props.theme.pink};
    }
    

    @media only screen and (max-width: 768px){
        margin: 1em;
        text-align: left;     
        padding-left: 1em;

        .check-point {
            width: 100%;
            transition: all 2s;
        }

        &:before {
            right: 0;
            left: calc(-1em - 8px);
        }
    }
`
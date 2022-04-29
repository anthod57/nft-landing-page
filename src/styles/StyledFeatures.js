import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.pink};
    ${props => props.show ? console.log("tfou") : ""};
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 1em;
    padding-top: 5vh;
    max-width: 1200px;
    margin: auto;
    
    .content {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;

        .text {

            h2 {
                font-size: 2em;
                margin-bottom: 0.5em;
                text-align: center;
                text-shadow: 0 0 black;
                text-decoration: underline;
                text-underline-offset: 4px;
                text-shadow: 0 0 5px #4cc9f0;
            }
        }
        
        img {
            width: 100%;
            margin-top: -20%;
            margin-bottom: 1em;
            max-width: 500px;
        }
    }

    @media only screen and (min-width: 768px){

        .content {
            flex-direction: row;
            text-align: left;
            justify-content: space-evenly;
            align-items: flex-start;

            .text {

                h2 {
                    text-align: left;
                    font-size: 2.5em;
                }

                width: 50%;
            }

            img {
                width: 50%;
                margin-top: -10%;
            }
        }
    }
`;
import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 100%;
    min-height: 150px;
    background: ${props => props.theme.pink};
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {   
        content: "";
        height: 5px;
        position: absolute;
        background: ${props => props.theme.lightBlue};
        box-shadow: 0px 0px 20px 4px ${props => props.theme.lightBlue};
        z-index: 9;
        top: 0;
        left: 0;
        right: 0;
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    max-width: 1100px;
    width: 100%;
    margin: auto;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    .footer-logo {
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
    
    .footer-menu {
        width: 100%;
        flex-grow: 1;

        ul {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            list-style: none;
            font-size: 1em;
            font-weight: 500;
            text-decoration: underline;

            li {
                text-align: center;
                margin: 1rem;
            }
        }
    }

    .social-medias {
        display: flex;
        font-size: 2em;
        justify-content: center;
        gap: 0.5em;

        svg{
            transition: 0.5s all;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    @media only screen and (min-width: 768px){
        flex-direction: row;
    }
`;
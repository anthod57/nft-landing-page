import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 25px;
    padding: 1em;
    gap: 1em;
    max-width: 400px;
    max-height: 400px;
    transition: all 0.5s;
    transform: scale(0);

    .profile-picture {
        width: 150px;
        height: 150px;
        position: relative;

        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .social-media {
            position: absolute;
            width: 50px;
            height: 50px;
            bottom: 0;
            right: 0;
            background-color: ${props => props.theme.pink};
            border-radius: 50%;
            transition: all 0.5s;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            color: ${props => props.theme.lightBlue};
            
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    @media only screen and (min-width: 768px){
        height: auto;
    }
`
import { createGlobalStyle } from 'styled-components';

export const Theme = {
    pink: "#f72585",
    purple: "#7209b7",
    darkBlue: "#3a0ca3",
    blue: "#4361ee",
    lightBlue: "#4cc9f0"
}

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0; 
        border: 0; 
    }

    *:focus {
        outline: none;
    }

    html, body {
        cursor: url('images/cursor.png'), auto;	
        background-color: ${Theme.darkBlue};
        font-family: 'Orbitron',sans-serif;
        color: white;
        font-size: 16px;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    h1, h2, h3, h4 {
        font-family: 'Orbitron', sans-serif;

    }

    a, a:hover, a:visited, a:active {
        color: inherit;
        text-decoration: none;
    }

    a:hover{
        cursor: url('images/pointer.png'), pointer;
    }

    button {
        margin: 1em;
        padding: 1em 2em;
        border-radius: 10px;
        font-size: 1em;
        background-color: ${Theme.pink};
        color: ${Theme.lightBlue};
        transition: all 0.5s;
        font-weight: 600;
        text-shadow: 0 0 3px ${Theme.lightBlue};
        box-shadow: 0px 0px 7px 0px ${Theme.pink};
        cursor: url('images/pointer.png'), pointer;

        &:hover {
            transform: scale(1.05);
        }
    }
`
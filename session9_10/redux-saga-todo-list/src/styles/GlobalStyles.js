import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --accent-color: #ff944d;
        --accent-color-active: #ff751a;
        --text-color: #fff;
        --background-color: #333;
        --list-container-background: #232323;
        --error-color: #ff4d4d; 
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html {
        font-size: 62.5%;
    }

    body, textarea, input, button {
        color: var(--text-color);
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background: var(--background-color);
    }

    html, body, #root {
        height: 100%;
    }
`
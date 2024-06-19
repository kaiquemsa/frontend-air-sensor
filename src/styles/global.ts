import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
@import "@coreui/coreui/scss/coreui";
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root { 
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;

    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        color: #17a4d0;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;

export default globalStyle;
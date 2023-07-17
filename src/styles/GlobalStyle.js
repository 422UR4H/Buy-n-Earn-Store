import { createGlobalStyle } from "styled-components";
import { mainColorButton, mainContrastColor } from "../constants/colors";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }
`;
export default GlobalStyle;

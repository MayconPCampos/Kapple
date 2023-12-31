import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/bg.avif";
import fontLight from "../fonts/main/DMSans_18pt-Light.ttf";
import fontMedium from "../fonts/main/DMSans_18pt-Medium.ttf";
import fontBold from "../fonts/main/DMSans_18pt-Bold.ttf";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "DMSans";
        src: url(${fontLight});
        font-weight: 300;
    }

    @font-face {
        font-family: "DMSans";
        src: url(${fontMedium});
        font-weight: 500;
    }

    @font-face {
        font-family: "DMSans";
        src: url(${fontBold});
        font-weight: 700;
    }

    *{
        box-sizing: border-box;
    }

    html{
        font-family: ${(props) => props.theme.font.main};
        font-weight: 300;
       
    }

    body{
        background: url(${backgroundImage}), rgba(0,0,0,0.2);
        background-blend-mode: overlay;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        width: 1920px;
        height: 100%;
        margin: 0;
        overflow-x: scroll;
        overflow-y: scroll;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
    }
 
`;

export default GlobalStyles;

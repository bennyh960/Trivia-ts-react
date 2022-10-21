import styled, { createGlobalStyle } from "styled-components";
import bgImage from "../assets/images/bg1.jpg";

export const globalStyle = createGlobalStyle`
    html{
        height:100%;
    }

    body {
        background-image:url(${bgImage});
        background-size:cover;
        margin:0;
        padding:0 20px;
        display:flex;
        justify-content:center;

    }
    *{
        box-sizing:border-box
    }
`;

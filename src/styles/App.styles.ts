import styled, { createGlobalStyle } from "styled-components";
import bgImage from "../assets/images/bg1.jpg";

export const GlobalStyle = createGlobalStyle`
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
        font-family: 'Catamaran', sans-serif;
        box-sizing:border-box
        
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* border: 1px solid black; */
  height: 100vh;
  > p {
    color: white;
  }
  .score {
    color: #fff;
    font-size: 1.5rem;
    margin: 3px 0 0 0;
    font-weight: 400;
  }

  h1 {
    /* not working styling logo in original way  */

    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    /* --webkit-background-clip: text; */
    /* --webkit-text-fill-color: transparent; */
    /* --moz-text-background-clip: text; */
    /* --moz-text-fill-color: transparent; */
    filter: drop-shadow(2px 2px #0085a3);
    /* color: #008583; */
    /* font-size: 70px; */
    text-align: center;
    font-weight: 400;
    margin: 10px;
    /* this is my additions */
    border-radius: 2rem;
    padding: 0 2rem;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 3px 8px;
    margin: 20px 0;
  }

  .start {
    position: absolute;
    top: 50%;
  }
`;

export const Loader = styled.div`
  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

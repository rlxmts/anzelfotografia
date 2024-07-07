import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const EstiloGLobal = createGlobalStyle`

  html{
  scroll-behavior: smooth;
  }

  @font-face {
    font-family: "Lato";
    src: url("./fonts/Lato/Lato-Light.ttf") format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: "Cinzel";
    src: url('./fonts/Cinzel/Cinzel-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: "Montserrat";
    src: url('./fonts/Montserrat/Montserrat-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 300;
  }

  *{
    padding:0;
    margin:0;
    font-size: 16px;
    box-sizing: border-box;
    list-style: none;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    font-family: "Montserrat";
  }

  .swiper{
    height:100%;
  }

  .swiper-slide{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center; 
    align-items: center; 
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EstiloGLobal />
    <App />
  </React.StrictMode>
);


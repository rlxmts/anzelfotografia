import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Instagram from "./components/sections/Instagram";
import Contato from "./components/sections/Contato";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import TrabalhoIndividual from './components/sections/TrabalhoIndividual';

const EstiloGLobal = createGlobalStyle`

  html{
  scroll-behavior: smooth;
  }

  body{
    background-color: #efebe6;
  }

  @font-face {
    font-family: "Lato";
    src: url(${process.env.PUBLIC_URL}/fonts/Lato/Lato-Light.ttf) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: "Cinzel";
    src: url(${process.env.PUBLIC_URL}/fonts/Cinzel/Cinzel-Regular.ttf) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${process.env.PUBLIC_URL}/fonts/Montserrat/Montserrat-VariableFont_wght.ttf) format('truetype');
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
    font-family: "Lato";
    font-weight: 300;
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

  .swiper-button-prev, .swiper-button-next{
    display:none;
  }

  .swiper-pagination-bullet-active{
    background: #DCDCDC;
  }

  @media screen and (max-width: 600px){
    .swiper-slide{
      height: 90vh;
    }
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EstiloGLobal />

    <BrowserRouter>    
      <Cabecalho />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio/:id" element={<TrabalhoIndividual/>} />
      </Routes>
      <Instagram />
      <Contato />
      <Rodape />
    </BrowserRouter>
  </React.StrictMode>
);


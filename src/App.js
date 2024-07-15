import styled from "styled-components";
import Banner from "./components/sections/Banner";
import Portfolio from "./components/sections/Portfolio";
import Sobre from "./components/sections/Sobre";
import Depoimentos from "./components/sections/Depoimentos";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AppContainer = styled.div`

`
function App() {

  useEffect( ()=>{
    Aos.init({
        duration:1000,
        once: true
    })
},[])

  return (
    <AppContainer>
        <Banner />
        <Portfolio />
        <Sobre />
        <Depoimentos />
    </AppContainer>
  );
}

export default App;

import styled from "styled-components";
import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Banner from "./components/sections/Banner";
import Portfolio from "./components/sections/Portfolio";
import Sobre from "./components/sections/Sobre";
import Depoimentos from "./components/sections/Depoimentos";
import Instagram from "./components/sections/Instagram";
import Contato from "./components/sections/Contato";

const AppContainer = styled.div`

`
function App() {
  return (
    <AppContainer>
      <Cabecalho />
      <div className="conteudo">
        <Banner />
        <Portfolio />
        <Sobre />
        <Depoimentos />
        <Instagram />
        <Contato />
        <Rodape />
      </div>
    </AppContainer>
  );
}

export default App;

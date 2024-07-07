import styled from "styled-components";
import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Banner from "./components/sections/Banner";
import Portfolio from "./components/sections/Portfolio";

const AppContainer = styled.div`

`

function App() {
  return (
    <AppContainer>
      <Cabecalho />
      <div className="conteudo">
        <Banner />
        <Portfolio />
        <Rodape />
      </div>
    </AppContainer>
  );
}

export default App;

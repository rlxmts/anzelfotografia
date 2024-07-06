import styled from "styled-components";
import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Banner from "./components/sections/Banner";

const AppContainer = styled.div`

  overflow: hidden;
  
  .conteudo{
    width: 80vw;
    margin-left:20vw;
  }
`

function App() {
  return (
    <AppContainer>
      <Cabecalho />
      <div className="conteudo">
        <Banner />
        <Rodape />
      </div>
    </AppContainer>
  );
}

export default App;

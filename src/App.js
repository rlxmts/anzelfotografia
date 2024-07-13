import styled from "styled-components";
import Banner from "./components/sections/Banner";
import Portfolio from "./components/sections/Portfolio";
import Sobre from "./components/sections/Sobre";
import Depoimentos from "./components/sections/Depoimentos";

const AppContainer = styled.div`

`
function App() {
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

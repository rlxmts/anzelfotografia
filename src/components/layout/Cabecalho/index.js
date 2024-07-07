import styled from "styled-components";
import  Logo  from "../../commom/Logo";
import Navegacao from "../../commom/Navegacao";

const Header = styled.header`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 1rem;
    gap:.3rem;
    position:fixed;
    z-index:999;
    width:100%;
    top:0;
    left:0;
`

const Cabecalho = () => {
    return(
        <Header>
            <Logo />
            <div className="divisor"></div>
            <Navegacao />
        </Header>
    )
}

export default Cabecalho;
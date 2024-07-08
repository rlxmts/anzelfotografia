import styled from "styled-components";
import  Logo  from "../../commom/Logo";
import Navegacao from "../../commom/Navegacao";

const Header = styled.header`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 1rem 1rem 1rem 1rem;
    gap:.3rem;
    z-index:999;
    width:100%;
    background-color: #e6e3da;
    box-shadow: 0px 0px 7px #00000070;
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
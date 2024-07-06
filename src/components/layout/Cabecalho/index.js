import styled from "styled-components";
import  Logo  from "../../commom/Logo";
import Navegacao from "../../commom/Navegacao";

const Header = styled.header`
    background-color: #363e4a;
    background-color: #e9e2da;
    width: 20vw;
    height: 100vh;
    position: fixed;
    left:0;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-right: 2px solid #87583a;
    box-shadow: 0px 0px 8px #00000054;
    overflow:hidden;

    .divisor{
        display: block;
        width: 90%;
        height: 15px;
        background-image: url('./img/vetor/divisor.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

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
import styled from "styled-components";
import  Logo  from "../../commom/Logo";
import Navegacao from "../../commom/Navegacao";
import { Link } from "react-router-dom";

const Header = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-around;
    padding:  1rem;
    gap:3rem;
    z-index:999;
    width:100%;
    background-color: #000;

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: .2rem;
    }
`

const Cabecalho = () => {
    return(
        <Header>
            <Link to='/'>
                <Logo />
            </Link>
            <div className="divisor"></div>
            <Navegacao />
        </Header>
    )
}

export default Cabecalho;
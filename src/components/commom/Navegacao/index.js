import styled from "styled-components";

const Nav = styled.nav`

    width:100%;

    ul{
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        a{
            color: #FFFFFF;
            color: #87583a;
            display: block;
            text-transform: uppercase;
            font-size: .7rem;
            font-family: "Montserrat";
            width:100%;
            font-weight: 900;
            letter-spacing: 2px;
        }
    }
`

const Navegacao = () => {
    return(
        <Nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Portfólio</a></li>
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
        </Nav>
    )
}

export default Navegacao;
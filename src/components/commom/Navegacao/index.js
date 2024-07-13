import styled from "styled-components";

const Nav = styled.nav`

    ul{
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        a{
            color: #FFFFFF;
            display: block;
            text-transform: uppercase;
            font-size: .7rem;
            font-family: "Montserrat";
            width:100%;
            font-weight: 900;
            letter-spacing: 2px;
            transition: .6s;

            &:hover{
                color: #945c46;
            }
        }        
    }
    
    @media screen and (max-width: 768px){
        ul a{
            font-size: .6rem;
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
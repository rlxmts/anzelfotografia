import styled from "styled-components";

const Footer = styled.footer`
    background-color: #8c5038;
    padding: 2rem;
    text-align: center;
    position: relative;
    color: #FFF;

    span{
        font-weight: 600;
        font-size: 12px;
    }

    .creditos{
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;

        img{
            max-width:70px;
        }
    }
`

const Rodape = ()=> {
    return(
        <Footer>
            <span> &copy; Copyright - todos os direitos reservados. </span>
            <div className="creditos">
                <span>Feito por:</span>
                <a href="https://horbiti.vercel.app" target="_blank" rel="noopener noreferrer"><img alt="Logotipo da Horbiti" src="./img/horbiti.png"></img></a>
            </div>
        </Footer>
    )
}

export  default Rodape;
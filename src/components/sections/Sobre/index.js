import styled from "styled-components";
import { Container } from "../../commom/Container";
import Titulo from "../../commom/Titulo";
import { Texto } from "../../commom/Texto";

const SectionSobre = styled.section`

.sobre-container{
    flex-direction: row;

    h2{
        margin: 2rem 0;
    }

    .foto-container{
        width: 100%;
        max-width: 500px;
    }
    img{
        width:100%;
    }
}

`

const Sobre = ()=> {
    return(
        <SectionSobre id="sobre">
            <Container className="sobre-container">
                <div className="foto-container">
                    <img src="./img/alessandra.webp" alt=""/>
                </div>
                <div>
                    <Titulo img='./img/coracao.svg' titulo="Alessandra Anzelman"/>
                    <Texto>Olá! Meu nome é Alessandra Anzelman e sou uma fotógrafa apaixonada pelo que faço. Descobri a fotografia durante meus estudos e, desde então, recebi todo o apoio de amigos e familiares para seguir essa carreira. Hoje, sei que não trabalho apenas com fotografias, mas com histórias, memórias, emoções e sentimentos, que procuro retratar através das minhas lentes. Dessa forma, conto a vida de maneira mais emocionante e tocante.</Texto>
                </div>
            </Container>
        </SectionSobre>        
    )
}

export default Sobre;
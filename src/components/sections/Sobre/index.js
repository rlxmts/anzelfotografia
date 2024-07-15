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
                    <Texto>
                    Oi! Eu me chamo Alessandra. Sou do Rio de Janeiro. A paixão pela fotografia começou bem cedo na minha vida. Sempre enfatizei a importância da fotografia na eternização de momentos, pessoas e emoções. Ao longo do tempo, fiz da fotografia um hobby, mergulhei nesse mundo e ela, naturalmente, se tornou profissão. Desde então, sigo eternizando momentos.
                    </Texto>
                </div>
            </Container>
        </SectionSobre>        
    )
}

export default Sobre;
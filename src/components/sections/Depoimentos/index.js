import styled from "styled-components";
import { Container } from "../../commom/Container";
import Titulo from "../../commom/Titulo";

const SecaoDepoimentos = styled.section`

    .depoimentos-container{
        gap:10px;
    }
`

const Depoimentos = () => {
    return(
        <SecaoDepoimentos>
            <Container className="depoimentos-container">
                <Titulo titulo='Depoimentos' />
                <div>
                    {/* <img /> */}
                    <span></span>
                    <p></p>
                </div>
            </Container>
        </SecaoDepoimentos>
    )
}

export default Depoimentos;
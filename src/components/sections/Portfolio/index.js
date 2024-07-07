import styled from "styled-components";
import Titulo from "../../commom/Titulo";
import CardTrabalhos from "../../commom/CardTrabalhos";

const SectionPortfolio = styled.section`
    padding: 2rem 1rem;
`

const Portfolio = ()=> {
    return(
        <SectionPortfolio>
            <Titulo titulo='Portfólio' img={'img/mountain.svg'} />
            <CardTrabalhos />
        </SectionPortfolio>
    )
}

export default Portfolio;
import styled from "styled-components";
import Titulo from "../../commom/Titulo";
import CardTrabalhos from "../../commom/CardTrabalhos";

const SectionPortfolio = styled.section`
    padding: 4rem 1rem;
    background-color: #efebe6;
`

const Portfolio = ()=> {
    return(
        <SectionPortfolio id="portfolio">
            <Titulo titulo='Portfólio' img={'img/mountain.svg'} />
            <CardTrabalhos />
        </SectionPortfolio>
    )
}

export default Portfolio;
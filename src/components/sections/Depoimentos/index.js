import styled from "styled-components";
import { Container } from "../../commom/Container";
import Titulo from "../../commom/Titulo";

const SecaoDepoimentos = styled.section`

    .depoimentos-container{
        gap:10px;
    }
`

const depoimentos = [
    {
        nome: 'Letícia',
        foto: './img/leticia.jpg',
        texto: 'Melhor fotógrafa do planeta! Já fiz 2 ensaios com ela e pretendo fazer sempre que der.'
    },
    {
        nome: 'Thainá',
        foto: './img/thaina.jpg',
        texto: 'A Alessandra arrebenta demais! Tivemos um dia incrivel com um ensaio super leve e discontraído.'
    },
    {
        nome: 'Marcelle',
        foto: './img/marcele.jpg',
        texto: 'Melhor fotógrafa do planeta! Já fiz 2 ensaios com ela e pretendo fazer sempre que der.'
    }
]


const Depoimentos = () => {
    return(
        <SecaoDepoimentos>
            <Container className="depoimentos-container">
                <Titulo titulo='Depoimentos' img='./img/avaliation.svg'/>
                {depoimentos.map( item => {
                    return(
                        <div key={item.nome}>
                            <img src={item.foto} alt={item.nome} />
                            <span>{item.nome}</span>
                            <p>{item.texto}</p>
                        </div>
                    )
                })}
            </Container>
        </SecaoDepoimentos>
    )
}

export default Depoimentos;
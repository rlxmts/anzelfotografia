import styled from "styled-components";
import { Container } from "../../commom/Container";
import Titulo from "../../commom/Titulo";
import { Texto } from "../../commom/Texto";

const SecaoDepoimentos = styled.section`

    .depoimentos-container{
        gap:2rem;
    }

    .card-container{
        display:flex;
        gap:1rem;     
        
        .depoimento-card{
            width: 100%;
            max-width: 450px;
    
            img{
                height:200px;
                width: 200px;
                border-radius: 50%;
                object-fit: cover;
                margin: 0 auto;
                display:block;
            }

            span{
                display: block;
                text-align: center;
                margin: 1rem 0;
                text-transform: uppercase;
            }
    
            p{
                margin:0 auto;
                max-width:300px;
                text-align:center;
            }
        }

        @media screen and (max-width: 768px){
            flex-direction: column;
            gap: 5rem;

            img{
                width: 200px;
                height:200px;
            }
        }
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
                <div className="card-container">
                    {depoimentos.map( item => {
                        return(
                            <div className="depoimento-card" key={item.nome}>
                                <img className="card-img" src={item.foto} alt={item.nome} />
                                <span>{item.nome}</span>
                                <Texto>{item.texto}</Texto>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </SecaoDepoimentos>
    )
}

export default Depoimentos;
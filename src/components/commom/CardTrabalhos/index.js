import styled from "styled-components";
import { Trabalhos } from "../Trabalhos";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    width:100%;
    display:flex;
    gap: 2px;
    justify-content: center;
    flex-wrap: wrap;

    div{
        width: 100%;
        max-width: 400px;
        margin: 2rem 0;
        transition: .6s;
        overflow: hidden;
        
        
        span,h3{
            color: #000;
            &:hover{
                color: #8c5038;
            }
        }   
        
        

        img{
            transition: .6s;
            width:100%;
        }

        img:hover{
            transform: scale(1.1);
        }        

        .trabalhos-titulo{
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            font-size: 1.1rem;
            text-transform: uppercase;
            margin: 1rem 0 0 0;
        }
    }

    div:hover{
        opacity: .8;
    }
`

const CardTrabalhos = ()=> {

    function subirAoTopo(){
        window.scrollTo(0,0);
    }

    return(
        <CardContainer>
            {Trabalhos.map( trabalho => {
                return(
                <div onClick={subirAoTopo} key={trabalho.nome}>
                        <Link to={`/portfolio/${trabalho.id}`}>
                            <img src={trabalho.imagens[0]} alt={trabalho.nome} />
                        <h3 className="trabalhos-titulo">{trabalho.nome}</h3>
                        <span>{trabalho.categoria}</span>
                        </Link>
                </div>
                )    
            })}
        </CardContainer>
    )
}

export default CardTrabalhos;
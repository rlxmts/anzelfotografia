import { useParams } from "react-router-dom";
import { Trabalhos } from "../../commom/Trabalhos";
import Titulo from "../../commom/Titulo";
import styled from "styled-components";

const Galeria = styled.section`
    padding: 5rem 0 0 0;
`

const ContainerGaleria = styled.div`

    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    img{
        width: 100%;
        max-width: 300px;
        height: auto;
        object-fit: cover;
    }
`

const TrabalhoIndividual = ()=> {

    const parametro = useParams();
    const cardSelecionado = Trabalhos.find(item => item.id === parametro.id);

    return (
        <Galeria>
            <Titulo img={`${process.env.PUBLIC_URL}/img/coracao.svg`} titulo={cardSelecionado.nome}/>
            
            <ContainerGaleria>
                {cardSelecionado.imagens.map( item => {
                    console.log(item)
                    return(
                        
                            <img src={`${item}`} alt="" />
                    
                    )
                })}    
            </ContainerGaleria>
        </Galeria>
    );
}

export default TrabalhoIndividual;
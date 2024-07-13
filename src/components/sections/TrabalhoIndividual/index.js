import { useParams } from "react-router-dom";
import { Trabalhos } from "../../commom/Trabalhos";
import Titulo from "../../commom/Titulo";
import styled from "styled-components";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Galeria = styled.section`
    padding: 5rem 0 0 0;

    img{
        display:block;
        width: 100%;
        cursor: pointer;
    }

    img:hover{
        opacity: .9;
    }
`

const TrabalhoIndividual = ()=> {

    const parametro = useParams();
    const cardSelecionado = Trabalhos.find(item => item.id === parametro.id);

    return (
        <Galeria>
            <Titulo img={`${process.env.PUBLIC_URL}/img/coracao.svg`} titulo={cardSelecionado.nome}/>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 3, 900: 4}}
            >
                <Masonry
                    gutter="2px"
                >
                {cardSelecionado.imagens.map( foto => {
                    return(
                        <img src={`${foto}`} alt="" />
                    )
                })}
                </Masonry>
            </ResponsiveMasonry>
        </Galeria>
    );
}

export default TrabalhoIndividual;
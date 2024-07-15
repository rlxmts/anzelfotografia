import { useParams } from "react-router-dom";
import { Trabalhos } from "../../commom/Trabalhos";
import Titulo from "../../commom/Titulo";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardTrabalhos from "../../commom/CardTrabalhos";
import { useState } from "react";
import classNames from "classnames";

const Galeria = styled.section`
    padding: 5rem  0;

    h2{
        margin: 5rem 0;
    }

    img{
        display:block;
        width: 100%;
        cursor: pointer;
    }

    img:hover{
        opacity: .9;
    }

    .abrir{
        display:grid;
        opacity: 1;
        transform: translate(0);
    }

    .popup-galeria{
        width: 90%;
        max-width: 700px;
        margin: 0 auto;
    }
`

const VejaMais = styled.div`
    padding-top: 5rem;

    h2{
        margin: 5rem 0 0 0;
    }

    @media screen and (max-width: 768px){
        padding: 5rem 1rem 0 1rem;
    }
`

const PopUp = styled.div`

    position: fixed;
    z-index: 9999;
    background-color:#000000c9;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    display: none;
    place-items: center;
    transform: translateY(200px);
    opacity:0;
    transition: 1s;
    
    .popup-bt-fechar{
        color: transparent;
        cursor: pointer;
        position: fixed;
        right: 30px;
        top: 30px;
        
        &::after{
            content: '';
            display:block;
            width: 30px;
            height:30px;
            position: absolute;
            right:30px;
            top: 30px;
            font-size: 2rem;
            background-image: url('${process.env.PUBLIC_URL}/img/close.svg');
            background-position: center;
            background-size: 30px;
        }
    }

    @media screen and (max-width: 768px){
        .popup-bt-fechar::after{
            right: -20px;
        }
    }
`

const TrabalhoIndividual = ()=> {

    const parametro = useParams();
    const cardSelecionado = Trabalhos.find(item => item.id === parametro.id);

    function abrirPopUp(imagem){
        setImagemClicada(imagem);
        setAbrir('abrir');
    }

    function fecharGaleria(){
        setAbrir('');        
    }

    const [imagemClicada, setImagemClicada] = useState('');
    const [abrir, setAbrir] = useState('');

    return (
        <Galeria>
            <Titulo img={`${process.env.PUBLIC_URL}/img/coracao.svg`} titulo={cardSelecionado.nome}/>
            <PopUp className={classNames('popup', abrir)}>
                <span onClick={fecharGaleria} className="popup-bt-fechar">Fechar galeria</span>
                <div className="popup-galeria">
                    <img src={imagemClicada} alt="imagem carregada"/>
                </div>
            </PopUp>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 3, 900: 3}}
            >
                <Masonry
                    gutter="2px"
                >
                {cardSelecionado.imagens.map( foto => {
                    return(
                        <img key={foto} src={`${foto}`} alt="" onClick={()=> abrirPopUp(foto)} />
                    )
                })}
                </Masonry>
            </ResponsiveMasonry>
            <VejaMais className="veja-mais">
                <Titulo titulo='Veja Mais' img={ `${process.env.PUBLIC_URL}/img/galary.svg` } />
                <CardTrabalhos />
            </VejaMais>
        </Galeria>
    );
}

export default TrabalhoIndividual;
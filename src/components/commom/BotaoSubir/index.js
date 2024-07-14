import classNames from "classnames";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DivBotao = styled.div`
    display: block;
    height: 30px;
    width: 30px;
    background-color: #001f3f;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #00000070;
    font-size: 1px;
    color: transparent;
    cursor: pointer;
    transition: .6s;
    position: fixed;
    bottom: 70px;
    right: 10px;
    transform: translateY(300px);
    background-image: url(${process.env.PUBLIC_URL}/img/seta.svg);
    background-position: center;
    background-size: 25px;
    background-repeat: no-repeat;
`

const BotaoSubir = ()=>{

    const [ativa, setAtiva] = useState('')

    useEffect( ()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 800 ? setAtiva('bt-ativo') : setAtiva('');
        })
    }, [])
 
    function subirAoTopo(){
        window.scrollTo(0,0);
    }

    return(
        <DivBotao className={classNames(ativa)} onClick={subirAoTopo}>
            subir ao topo
        </DivBotao>
    )
}

export default BotaoSubir;
import styled from "styled-components";
import Titulo from "../../commom/Titulo";
import { Token } from "../../commom/Token";
import { useEffect } from "react";

const SectaoInstagram = styled.section`
    padding: 5rem 0;
`

const Instagram = ()=> {

    useEffect( ()=> {
        const dados = "media_type,media_url";
      
        async function buscaApi(){  
            try{  
              const api = await fetch(`https://graph.instagram.com//me/media?fields=${dados}&access_token=${Token}`);
              const apiConvertida = await api.json();
              const imagens = apiConvertida.data.filter( tipo => tipo.media_type === "IMAGE");
              const ultimosPost = imagens.slice(0,8)
              console.log(ultimosPost)
              
            }catch(error){
              console.log( error);
            }
        }
      
        buscaApi();  
      }, []);

    return(
        <SectaoInstagram>
            <Titulo titulo='Acompanhe no Instagram' img='./img/share.svg' />
            
        </SectaoInstagram>
    )
}

export default Instagram;
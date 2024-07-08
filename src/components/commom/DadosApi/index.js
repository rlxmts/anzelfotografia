
import { useEffect } from "react";

const DadosApi = ()=> {
    useEffect( ()=> {
        const token = "IGQWROUHBQY0RIcmFxSEc2dktsaGNFWVItY0x5ZA3pFTWV4bWp3QWlTbldpU0REZA2V5TS14SGlqS2VrOE90aU5JYTJ0bnhyQVNzVkp6aFpqcjlfS292UnAxY05QMnJjUlJ3eXNodFlRUGw2Q3RwdWlva1NmZAGxVcGcZD";
        const dados = "media_type,media_url";
      
        async function buscaApi(){  
            try{  
              
              const api = await fetch(`https://graph.instagram.com//me/media?fields=${dados}&access_token=${token}`);
              const apiConvertida = await api.json();
              const imagens = apiConvertida.data.filter( tipo => tipo.media_type === "IMAGE");
              const ultimosPost = imagens.slice(0,8);
            }catch(error){
              console.log( error);
            }
        }
      
        buscaApi();  
      }, []);
}

export default DadosApi;
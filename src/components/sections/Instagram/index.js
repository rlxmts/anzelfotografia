import styled from "styled-components";
import Titulo from "../../commom/Titulo";
import { Token } from "../../commom/Token";
import { useEffect, useState } from "react";

const SectaoInstagram = styled.section`
    padding: 5rem 0;
    padding-bottom: 0;

    .cards-container{
        width:100%;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        
        .card{
            transition: .6s;
            position: relative;
            aspect-ratio: 1;
            overflow: hidden;
            cursor:pointer;
            
            img{
                transition: .6s;
                width:100%;
                height:100%;
                object-fit: cover;
            }
                
            &::after{
                content: '';
                display:block;
                height: 100%;
                width: 100%;
                background-color: #00000070;
                position:absolute;    
                top:0;
                left: 0;
                transition: .6s;
            }
            
        }
        
        .card:hover img{
           transform: scale(1.1);
        } 

        .card:hover::after{
            background-color: transparent;
        }

        @media screen and (max-width: 768px){
            grid-template-columns: 1fr 1fr;

            .card::after{
                display:none;
            }
        }
    }

`
const Instagram = ()=> {
    
    const [dadosApi, setDadosApi] = useState([]);

    useEffect( ()=> {

        const dados = "media_type,media_url";
      
        async function buscaApi(){  
            try{  
              const api = await fetch(`https://graph.instagram.com//me/media?fields=${dados}&access_token=${Token}`);
              const apiConvertida = await api.json();
              const imagens = apiConvertida.data.filter( tipo => tipo.media_type === "IMAGE");
              const ultimosPost = imagens.slice(0,8)
              setDadosApi(ultimosPost);              
            }catch(error){
              console.log( error);
            }
        }
      
        buscaApi();  
      }, []);

    return(
        <SectaoInstagram>
            <Titulo titulo='@AnzelFotografia' img='./img/share.svg' />
            <div className="cards-container">
                {dadosApi.map(item => {
                    return(
                        <div className="card" key={item.id}>
                            <a 
                                href="https://www.instagram.com/anzelfotografia/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={item.media_url} alt="Externa do instagram"/>
                            </a>
                        </div>
                    )
                })}
            </div>
        </SectaoInstagram>
    )
}

export default Instagram;
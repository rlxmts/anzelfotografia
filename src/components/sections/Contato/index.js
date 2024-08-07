import styled from "styled-components";
import { Container } from "../../commom/Container";
import Titulo from "../../commom/Titulo";
import Formulario from "../../commom/Formulario";

const SecaoContato = styled.section`
    background-color: #fff;
    padding: 10rem 0 5rem 0;

    .lista-contato{
        display:flex;
        gap: 1rem;
        flex-wrap: wrap;

        a{
            color: #000;
        }
        
        }
        li:nth-child(2) a{
            border-left: 1px solid #000; 
            border-right: 1px solid #000; 
            padding: 0 1rem;
        }

        li:nth-child(1) a{
            font-size: .8rem;
        }

        @media screen and (max-width: 768px){

            padding: 5rem 0;

            .lista-contato{

                flex-direction: column;
                width:100%;

                li:nth-child(2) a{
                    border: none;
                    padding:0;
                }
            }
        }
`

const Contato = ()=> {

    return(
        <SecaoContato id="contato">
            <Container>
                <div>
                    <Titulo titulo="Contato" img="./img/email.svg" />
                </div>
                <Formulario/>
                    <ul className="lista-contato">
                        <li  data-aos="fade-up">
                            <a href="tel:+552197900-6557" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (21)97900-6557
                            </a>
                        </li>
                        <li  data-aos="fade-up">
                            <a href="mailto:contato@anzelfotografia.com.br" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                contato@anzelfotografia.com.br
                            </a>
                        </li>
                        <li  data-aos="fade-up">
                            <a href="https://instagram.com/anzelfotografia" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @Anzelfotografia
                            </a>
                        </li>
                    </ul>
            </Container>
        </SecaoContato>
    )
}

export default Contato;
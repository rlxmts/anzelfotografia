import styled from "styled-components";
import { Botao } from "../Botao";

const SecaoForm = styled.form`
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
    gap: 1.2rem;

    div{
        width:100%;
    }

    label, input, textarea{
        display:block;
        width:100%;
        background-color:#dfd7cb;
        border: none;
        }
        
        label{
            font-size: 12px;
            font-weight: 600;
            color: #000;
        }
        
        input, textarea{            
        outline:none;
        border-bottom: 1px solid #000;
        // border-left: 1px solid #000;
        padding: .5rem;
        color: #000;
        }

        ::-webkit-input-placeholder {
        
        font-weight: 600;
        }

        :-moz-placeholder {
          
        font-weight: 600;
        }

        ::-moz-placeholder {
        font-weight: 600;
          
        }

    .lista-suspensa{
        width:100%;
        padding: .5rem;
        border: none;
        outline: none;
        margin-top: 10px;
        background-color: #d8cfc0f7;
    }

    .data-hora{
        display: flex;
        align-items: end;
        gap: 10px;
    }
`

const opcoes = [
    'Casamento', 
    'Pré Wedding', 
    'Life Style', 
    'Ensaio Externo Individual',    
    'Festa Infantil', 
    'Outros'
]

const Formulario = ()=> {
    return(
        <SecaoForm>
            <div>
                <label htmlFor="Nome">Nome:</label>
                <input id="Nome" name="Nome" type="text" required/>
            </div>
            <div>
                <label htmlFor="Tefelfone">Telefone:</label>
                <input id="Tefelfone" name="Tefelfone" type="tel" required />
            </div>
            <div className="data-hora">
                <div>
                    <label htmlFor="Data">Data do Evento:</label>
                    <input id="Data" name="Data" type="date" required />
                </div>
                <div>
                    <label htmlFor="Hora">Hora do Evento:</label>
                    <input id="Hora" name="Hora" type="time" required />
                </div>
            </div>
            <div>
                <label htmlFor="lista">Evento\Ensaio:</label>
                <select id="lista" className="lista-suspensa">
                    <option></option>
                    {opcoes.map( item =>{
                        return(
                            <option>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea rows={4} id="mensagem" name="Mensagem" placeholder=""/>
            </div>
            <Botao>Enviar</Botao>
        </SecaoForm>
    )
}

export default Formulario;

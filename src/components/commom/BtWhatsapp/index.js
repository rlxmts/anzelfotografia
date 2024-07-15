import styled from "styled-components"

const BotaoWpp = styled.a`
    position: fixed;
    right: 10px;
    bottom: 10px;
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    font-size: 1px;
    color: transparent;
    background-image: url(${process.env.PUBLIC_URL}/img/wpp-icon.svg);
    background-size: 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #40c351;
    z-index:1;
`

const BtWhatsApp = ()=> {
    return(
        <BotaoWpp 
            href="https://wa.me/5521979006557"
            target="_blank"
            rel="noopener noreferrer"
        >
            atendimento via Whatsapp
        </BotaoWpp>
    )
}

export default BtWhatsApp;
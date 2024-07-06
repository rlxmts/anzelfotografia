import styled from "styled-components"

const Nome = styled.h1`
    font-family: "Cinzel", serif;
    font-size: 1rem;
    letter-spacing: 2px;
    color: #87583a;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
`

const Logo = ()=> {
    return(
        <Nome><span>Anzel</span>Fotografia</Nome>
    )
}

export default Logo;
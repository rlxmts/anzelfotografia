import styled from "styled-components"

const Nome = styled.h1`
    font-family: "Cinzel", serif;
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: #FFF;

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
 `

const Logo = ()=> {
    return(
        <Nome>AnzelFotografia</Nome>
    )
}

export default Logo;
import styled from "styled-components";

export const Botao = styled.button`
    border: none;
    background-color: #000;
    font-family: "Lato";
    color: #fff;
    font-size: 1.1rem;
    padding: .5rem;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    max-width: 250px;
    font-weight: 600;
    transition: .6s;
    
    &:hover{
        background-color: #8c5038;
        color: #FFF;
    }
`
import styled from "styled-components";

const H2 = styled.h2`
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color:#945c46;
    text-transform: uppercase;
    text-align: center;
    margin-bottom:2rem;
    position: relative;

    &::before{
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        background-image: url(${props => props.img});
        background-position: center;
        background-size: 40px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top:-2.5rem;
    }

    &::after{
        content: '';
        display: block;
        width: 30px;
        height: 4px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -.7rem;
        background-color: #8c5038;
    }

    @media screen and (max-width: 768px){
        font-size: 1.4rem;

        &::before{
            width:30px;
            height: 30px;
            background-size: 30px;
            top: -2rem;
        }
    }
`

const Titulo = ({titulo, img})=> {
    return(
            <H2 img={img}>{titulo}</H2>
    )
}

export default Titulo;
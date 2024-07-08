import styled from "styled-components";
import Titulo from "../../commom/Titulo";

const SectaoInstagram = styled.section`
    padding: 5rem 0;
`

const Instagram = ()=> {
    return(
        <SectaoInstagram>
            <Titulo titulo='Acompanhe no Instagram' img='./img/share.svg' />
        </SectaoInstagram>
    )
}

export default Instagram;
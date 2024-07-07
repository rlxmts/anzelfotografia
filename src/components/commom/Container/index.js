import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 10rem 2rem;

    @media screen and (max-with: 768px){
        padding: 5rem 1.5rem;
    }
`
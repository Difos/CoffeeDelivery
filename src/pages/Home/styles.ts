import styled from 'styled-components'

export const HomeContainer = styled.main``

export const CardMaster = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 auto; /* centraliza o container na página */
  box-sizing: border-box;
  margin: 1rem 9rem 1rem 9rem;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 0 auto; /* centraliza o container na página */
    box-sizing: border-box;
    margin: 1rem 9rem 1rem 9rem;
  }
`

export const CardDiv = styled.div`
  width: 100%; /* ajusta a largura dos cards */
  margin: 0; /* remove o espaçamento entre os itens */
  padding: 20px; /* adiciona margens internas */
  box-sizing: border-box;
`

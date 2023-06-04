import styled from 'styled-components'
import { BasedCoffeCard } from '../../../src/pages/Home/components/CoffeeCard/styles'

export const SucessCard = styled(BasedCoffeCard)`
  background-color: ${(prop) => prop.theme.white};
  border: 1px;
  border: 1px solid ${(prop) => prop.theme['yellow-dark']};
  width: 526px;
`

export const SuccessWrapper = styled.div`
  margin: 0 auto; /* centraliza o container na página */
  box-sizing: border-box;
  flex-direction: space-between;
  max-width: 88rem;
  padding: 1.5rem;
  margin: 1rem 9rem 1rem 9rem;

  h1 {
    width: 353px;
    height: 42px;
    left: calc(50% - 353px / 2 - 383.5px);
    top: 184px;

    /* Title/Title L */

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    /* identical to box height, or 42px */

    /* Brand / Yellow Dark */

    color: ${(prop) => prop.theme['yellow-dark']};
  }

  span p:first-child {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    padding-bottom: 40px;
  }
  .Controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 14px;
      font-family: 'Roboto';
      color: ${(prop) => prop.theme.black};
    }
  }
`

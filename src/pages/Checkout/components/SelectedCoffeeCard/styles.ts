import styled from 'styled-components'
import { BasedCoffeCard } from '../../../Home/components/CoffeeCard/styles'
import { TrashSimple } from 'phosphor-react'

export const SelectedCoffeeCard = styled(BasedCoffeCard)`
  width: 100%;
  height: 100%;
  padding: 40px 20px;

  .Controls {
    display: flex;
    flex-direction: column;
    gap: 2px;

    p {
      font-size: 14px;
      font-family: 'Roboto';
      color: ${(prop) => prop.theme.black};
    }

    border-bottom: 1px solid ${(prop) => prop.theme['gray-300']};
  }

  .buttonsdiv {
    display: flex;
    flex-direction: row;
  }

  .TextControls {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`
export const CoffeeAdded = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
  img {
    width: 64px;
    height: 64px;
    padding: 0 auto;
  }
`

export const Price = styled.label`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${(prop) => prop.theme['gray-500']};
`
export const ButtonRemove = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  width: 91px;
  height: 32px;

  border: none;
  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  cursor: pointer;

  span {
    font-size: 9px;
    font-family: 'Roboto';
  }
`
export const Trash = styled(TrashSimple)`
  width: 15px;
  height: 15px;
  color: ${(prop) => prop.theme.purple};
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  margin-top: 24px;
  color: ${(prop) => prop.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  background: ${(props) => props.theme.yellow};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
  /* &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  } */
`

export const TotalOrderAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  margin-top: 24px;
  /* Inside auto layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  div span:nth-child(1) {
    width: 84px;
    height: 18px;

    /* Text/Regular S */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    /* or 18px */

    display: flex;
    align-items: center;
    text-align: right;

    /* Base/Text */

    color: ${(prop) => prop.theme['gray-300']};
  }

  div span:nth-child(2) {
    font-family: 'Roboto';
    font-style: bold;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(prop) => prop.theme.black};
  }
`

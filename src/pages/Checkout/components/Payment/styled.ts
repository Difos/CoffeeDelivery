import styled from 'styled-components'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

export const MoneySimbol = styled(CurrencyDollar)`
  color: ${(prop) => prop.theme.purple};
`
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 640px;

  /* Base/Card */

  background: ${(prop) => prop.theme['gray-100']};
  border-radius: 6px;

  margin-top: 1rem;
  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  .Payment {
    display: flex;
    align-items: center;
    align-items: flex-start;

    margin-top: 1rem;
    gap: 12px;
    img {
      width: 64px;
      height: 64px;
      padding: 0 auto;
    }
  }

  .Controls {
    display: flex;
    flex-direction: row;
    gap: 2px;
  }

  .TextControls {
    display: flex;
    flex-direction: column;
    gap: 12px;

    span:first-child {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      /* identical to box height, or 21px */

      display: flex;
      align-items: center;

      /* Base/Subtitle */

      color: #403937;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
    }

    span:nth-child(2) {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      /* or 18px */

      display: flex;
      align-items: center;

      /* Base/Text */

      color: #574f4d;

      /* Inside auto layout */

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
  }

  .button-clicked {
    background-color: ${(prop) => prop.theme['purple-light']};
  }

  .button-clicked:focus {
    outline: none; /* Remove a borda de foco */
  }
`

const BasePaymentButton = styled.button`
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

  background: ${(prop) => prop.theme['gray-300']};
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
export const CreditCardIcon = styled(CreditCard)`
  color: ${(prop) => prop.theme.purple};
`
export const DebitCardIcon = styled(Bank)`
  color: ${(prop) => prop.theme.purple};
`

export const MoneyCardIcon = styled(Money)`
  color: ${(prop) => prop.theme.purple};
`

export const CreditCardButton = styled(BasePaymentButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`

export const DebitCardButton = styled(BasePaymentButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`

export const MoneyCardButton = styled(BasePaymentButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;

  width: 178.67px;
  height: 51px;

  /* Base/Button */

  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`

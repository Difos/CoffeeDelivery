import {
  PaymentContainer,
  MoneySimbol,
  CreditCardButton,
  DebitCardButton,
  MoneyCardButton,
  CreditCardIcon,
  DebitCardIcon,
  MoneyCardIcon,
} from './styled'

import { useState } from 'react'

interface IPaymentCardProps {
  onPaymentMethodChange: (method: any) => void
}
export function PaymentCard({ onPaymentMethodChange }: IPaymentCardProps) {
  const [buttonClicked, setButtonClicked] = useState('')

  const handleClick = (button: any) => {
    setButtonClicked(button)
    onPaymentMethodChange(paymentOption(button))
    console.log(button)
  }

  function paymentOption(paymentOp: string) {
    switch (paymentOp) {
      case 'buttonCreditCard': {
        return 'Cartão de Credito'
      }
      case 'buttonDebitCard': {
        return 'Cartão de Debito'
      }
      case 'buttonMoney': {
        return 'Dinheiro'
      }
    }
  }

  return (
    <PaymentContainer>
      <div className="Payment">
        <MoneySimbol size={24}></MoneySimbol>
        <div className="Controls">
          <div className="TextControls">
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
      </div>

      <div className="Payment">
        <CreditCardButton
          type="button"
          className={
            buttonClicked === 'buttonCreditCard' ? 'button-clicked' : ''
          }
          onClick={() => handleClick('buttonCreditCard')}
        >
          <CreditCardIcon />
          <span>CARTÃO DE CRÉDITO</span>
        </CreditCardButton>
        <DebitCardButton
          type="button"
          className={
            buttonClicked === 'buttonDebitCard' ? 'button-clicked' : ''
          }
          onClick={() => handleClick('buttonDebitCard')}
        >
          <DebitCardIcon />
          <span>CARTÃO DE DÉBITO</span>
        </DebitCardButton>
        <MoneyCardButton
          type="button"
          className={buttonClicked === 'buttonMoney' ? 'button-clicked' : ''}
          onClick={() => handleClick('buttonMoney')}
        >
          <MoneyCardIcon />
          <span>DINHEIRO</span>
        </MoneyCardButton>
      </div>
    </PaymentContainer>
  )
}

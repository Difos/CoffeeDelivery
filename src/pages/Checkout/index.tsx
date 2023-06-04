import { useContext, useState } from 'react'
import { AddressCard } from './components/AddressCard'
import { PaymentCard } from './components/Payment'
import { CoffeeCard } from './components/SelectedCoffeeCard'
import {
  ButtonConfirmOrder,
  SelectedCoffeeCard,
  TotalOrderAmount,
} from './components/SelectedCoffeeCard/styles'
import { ChekoutContainer } from './style'
import { CoffeContext } from '../../context/CoffeeContext'
import { useNavigate } from 'react-router-dom'
import { ICoffee, IOrder } from '../../reducers/coffees/reducer'

export function Checkout() {
  const { selectedCoffees } = useContext(CoffeContext)

  const [address, setAddress] = useState({
    telephone: '',
    street: '',
    numberStreet: 0,
    complement: '',
    neighbourhood: '',
    city: '',
    state: '',
  })

  const handleAddressChange = (updatedAddress: any) => {
    setAddress(updatedAddress)
  }

  const [paymentMethod, setPaymentMethod] = useState('')

  const handlePaymentMethodChange = (method: any) => {
    setPaymentMethod(method)
  }

  const totalCoffeeAmount = selectedCoffees.reduce(
    (accumulator, coffee) =>
      accumulator + parseFloat(coffee.valueCoffee) * coffee.qtCoffee,
    0,
  )
  const totalAmountPurchase: number = totalCoffeeAmount + 3.5

  const navigate = useNavigate()

  function handleConfirmOrder(coffees: ICoffee[]) {
    const confirmed = window.confirm('Deseja confirmar o pedido?')

    const selectedCoffes: ICoffee[] = coffees

    const order: IOrder = {
      orderNumber: 1,
      selectedCoffes,
      address,
      paymentMethod,
    }

    if (confirmed) {
      if (order.paymentMethod === '') {
        alert('O metodo de pagamento não foi selecionado!')
      } else if (order.selectedCoffes.length > 0) {
        console.log(order)
        navigate('/success', { state: { order } })
      } else {
        alert('voce não selecionou nenhum café!')
      }
    }
  }

  return (
    <ChekoutContainer>
      <div>
        <AddressCard
          address={address}
          onAddressChange={handleAddressChange}
        ></AddressCard>
        <PaymentCard
          onPaymentMethodChange={handlePaymentMethodChange}
        ></PaymentCard>
      </div>
      <SelectedCoffeeCard>
        {selectedCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id + 31} coffeeSelect={coffee}></CoffeeCard>
        ))}
        <TotalOrderAmount>
          <div>
            <span>Total Itens</span>

            <span>R$ {Math.round(totalCoffeeAmount * 100) / 100}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ {Math.round(totalAmountPurchase * 100) / 100}</span>
          </div>
        </TotalOrderAmount>
        <ButtonConfirmOrder onClick={() => handleConfirmOrder(selectedCoffees)}>
          Confirmar Pedido
        </ButtonConfirmOrder>
      </SelectedCoffeeCard>
    </ChekoutContainer>
  )
}

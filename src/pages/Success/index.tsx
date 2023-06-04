import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SucessCard, SuccessWrapper } from './styles'
import orderConfirmed from '../../assets/orderCofirmed.svg'
import { MapPin, Timer, Money } from 'phosphor-react'
import { IOrder } from '../../reducers/coffees/reducer'

export function Success() {
  const location = useLocation()
  const [order, setOrder] = useState<IOrder>()

  useEffect(() => {
    const { order } = location.state
    console.log(order)
    setOrder(order)
  }, [location.state])

  if (!order) {
    return <div>Loading...</div>
  }

  return (
    <SuccessWrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        {/* <p> Metodo de pagamento {order.paymentMethod}</p> */}
      </span>
      <div className="Controls">
        <SucessCard>
          <div>
            <MapPin />
            <p>
              Entrega Rua {order.address.street},{order.address.numberStreet}
            </p>
            <p>
              {order.address.neighbourhood} - {order.address.city},{' '}
              {order.address.state}
            </p>
          </div>
          <div>
            <Timer />
            <p>Previsão de entrega</p>
            <p>20 - 30 minutos</p>
          </div>
          <div>
            <Money />
            <p>Pagamento na entrega</p>
            <p>{order.paymentMethod}</p>
          </div>
        </SucessCard>
        <div>
          <img
            src={orderConfirmed}
            alt="cara sentando em uma moto fazendo uma entrega"
          />
        </div>
      </div>
    </SuccessWrapper>
  )
}

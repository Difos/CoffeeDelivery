import { useContext, ChangeEvent } from 'react'
import { CoffeeCard, CoffeAmout, CoffeTag, CartButton } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { ICoffee } from '../../../../reducers/coffees/reducer'
import { CoffeContext } from '../../../../context/CoffeeContext'

interface ICoffeProps {
  coffee: ICoffee
  selectedCoffees: ICoffee[]
  onCartButtonClick: (coffee: ICoffee) => void
}

export function CoffeContainer({
  coffee,
  selectedCoffees,
  onCartButtonClick,
}: ICoffeProps) {
  const { coffeeAmount, setCoffeeAmount } = useContext(CoffeContext)

  function handleCartButtonClick() {
    const updatedCoffee = { ...coffee, qtCoffee: coffeeAmount }

    onCartButtonClick(updatedCoffee)
    setCoffeeAmount(1)
  }

  function handleCoffeeAmountChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10)
    setCoffeeAmount(value)
  }

  return (
    <CoffeeCard>
      <span className="imgContainer">
        <img src={coffee.coffeeImg} alt="xicara de cafe" />
      </span>

      <div className="CoffeTagContainer">
        {coffee.typeCoffee.map((c) => (
          <CoffeTag key={c}>
            <p>{c}</p>
          </CoffeTag>
        ))}
      </div>

      <span className="titleCoffee">
        <p>{coffee.nome}</p>
      </span>
      <div className="CoffeeSubject">
        <span>
          <p>{coffee.subjectCoffee}</p>
        </span>
      </div>

      <div className="amountContainer">
        <label htmlFor="" className="lblAmountCoffee">
          R$ {coffee.valueCoffee}
        </label>
        <CoffeAmout
          type="number"
          id="minutesAmount"
          placeholder="1"
          step={1}
          min={1}
          max={60}
          onChange={handleCoffeeAmountChange}
        />
        <CartButton onClick={handleCartButtonClick}>
          <ShoppingCart color="white" />
        </CartButton>
      </div>
    </CoffeeCard>
  )
}

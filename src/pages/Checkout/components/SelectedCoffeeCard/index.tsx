import { CoffeeAdded, ButtonRemove, Trash, Price } from './styles'
import { CoffeAmout } from '../../../Home/components/CoffeeCard/styles'
import { ICoffee } from '../../../../reducers/coffees/reducer'
import { useContext } from 'react'
import { CoffeContext } from '../../../../context/CoffeeContext'

interface ICoffeProps {
  coffeeSelect: ICoffee
}

export function CoffeeCard({ coffeeSelect }: ICoffeProps) {
  const { selectedCoffees, setSelectedCoffees } = useContext(CoffeContext)

  function handleRemoveSelectCoffee(id: string) {
    const updateCoffees = selectedCoffees.filter((coffee) => coffee.id !== id)
    setSelectedCoffees(updateCoffees)
  }

  return (
    <CoffeeAdded>
      <img src={coffeeSelect.coffeeImg} alt="imagem tipo do café" />
      <div className="Controls">
        <div className="TextControls">
          <strong>
            <p>{coffeeSelect.nome}</p>
          </strong>
          <Price>
            <span>{coffeeSelect.valueCoffee}</span>
          </Price>
        </div>
        <div className="buttonsdiv">
          <CoffeAmout
            type="number"
            id="minutesAmount"
            placeholder="1"
            step={1}
            min={1}
            max={60}
            value={coffeeSelect.qtCoffee}
          />
          <ButtonRemove
            onClick={() => handleRemoveSelectCoffee(coffeeSelect.id)}
          >
            <Trash />
            <span>REMOVER</span>
          </ButtonRemove>
        </div>
      </div>
    </CoffeeAdded>
  )
}

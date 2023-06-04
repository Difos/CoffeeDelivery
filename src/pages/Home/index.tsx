import { Banner } from '../../components/Banner'
import { CoffeContext } from '../../context/CoffeeContext'
import { imagensCoffe } from '../../reducers/coffees/coffeesAssets'
import { ICoffee } from '../../reducers/coffees/reducer'
import { CoffeContainer } from './components/CoffeeCard'
import { CardDiv, CardMaster } from './styles'
import { ChangeEvent, useContext } from 'react'

const coffees = [
  {
    id: '1',
    typeCoffee: ['Expresso', 'Tradicional'],
    subjectCoffee: 'O tradicional café feito com água quente e grãos moídos',
    nome: 'Querosene Puro',
    valueCoffee: '9.90',
    coffeeImg: imagensCoffe.Americano,
  },
  {
    id: '2',
    typeCoffee: ['Expresso', 'Coado'],
    subjectCoffee: 'O tradicional café feito com água quente e grãos moídos',
    nome: 'Expresso Tradicional',
    valueCoffee: '9.90',
    coffeeImg: imagensCoffe.Expresso,
  },
  {
    id: '3',
    typeCoffee: ['Expresso', 'Gelado'],
    subjectCoffee: 'O tradicional café feito com água quente e grãos moídos',
    nome: 'Capuccino Tradicional',
    valueCoffee: '9.90',
    coffeeImg: imagensCoffe.Capuccino,
  },
  {
    id: '4',
    typeCoffee: ['Expresso', 'Tradicional'],
    subjectCoffee: 'O tradicional café feito com água quente e grãos moídos',
    nome: 'Expresso Tradicional',
    valueCoffee: '9.90',
    coffeeImg: imagensCoffe.Capuccino,
  },
  {
    id: '5',
    typeCoffee: ['Expresso', 'Tradicional'],
    subjectCoffee: 'O tradicional café feito com água quente e grãos moídos',
    nome: 'Expresso Tradicional',
    valueCoffee: '9.90',
    coffeeImg: imagensCoffe.Expresso,
  },
  {
    id: '6',
    typeCoffee: ['Especial', 'Trufado'],
    subjectCoffee:
      'O capuccino especial feito com grãos selecionados da bavaria',
    nome: 'Capuccino Especial',
    valueCoffee: '18.90',
    coffeeImg: imagensCoffe['Capuccino Especial'],
  },
]

export function Home() {
  const { coffeeAmount, setCoffeeAmount, selectedCoffees, createCoffeeOrder } =
    useContext(CoffeContext)

  function handleCartButtonClick(coffeeToAdd: ICoffee) {
    createCoffeeOrder(coffeeToAdd)
  }

  function handleCoffeeAmountChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10)
    setCoffeeAmount(value)
  }

  return (
    <div>
      <Banner />
      <CardMaster>
        {coffees.map((coffee) => (
          <CardDiv key={coffee.id}>
            <CoffeContainer
              key={coffee.id}
              coffee={coffee}
              selectedCoffees={selectedCoffees}
              onCartButtonClick={handleCartButtonClick}
              onCoffeeAmountChange={handleCoffeeAmountChange}
              coffeeAmount={coffeeAmount}
            />
          </CardDiv>
        ))}
      </CardMaster>
    </div>
  )
}

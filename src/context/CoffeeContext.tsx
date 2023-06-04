import { createContext, useState, ReactNode } from 'react'
import { ICoffee } from '../reducers/coffees/reducer'

interface ICoffeContext {
  coffeeAmount: number
  setCoffeeAmount: (amount: number) => void
  selectedCoffees: ICoffee[]
  setSelectedCoffees: (coffees: ICoffee[]) => void
  createCoffeeOrder: (coffeeToAdd: ICoffee) => void
}

interface ICoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeContext = createContext({} as ICoffeContext)

export function CoffeeContextProvider({
  children,
}: ICoffeeContextProviderProps) {
  const [coffeeAmount, setCoffeeAmount] = useState<number>(1)
  const [selectedCoffees, setSelectedCoffees] = useState<ICoffee[]>([])

  function createCoffeeOrder(coffeeToAdd: ICoffee) {
    const updatedCoffee = { ...coffeeToAdd, qtCoffee: coffeeAmount }
    setSelectedCoffees((prevCoffees: ICoffee[]) => [
      ...prevCoffees,
      updatedCoffee,
    ])
    console.log(selectedCoffees)
  }

  return (
    <CoffeContext.Provider
      value={{
        coffeeAmount,
        setCoffeeAmount,
        selectedCoffees,
        setSelectedCoffees,
        createCoffeeOrder,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}

export interface IAddress {
  telephone: string
  street: string
  numberStreet: number
  complement: string
  neighbourhood: string
  city: string
  state: string
}

export interface ICoffee {
  id: string
  typeCoffee: string[]
  subjectCoffee: string
  nome: string
  valueCoffee: string
  coffeeImg: string
  qtCoffee: number
}

export interface IOrder {
  orderNumber: number
  selectedCoffes: ICoffee[]
  address: IAddress
  paymentMethod: string
}

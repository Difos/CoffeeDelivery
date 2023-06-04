import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import logoCoffe from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeeContext'

export function Header() {
  const { selectedCoffees } = useContext(CoffeContext)

  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="copo de cafe com logo" />
      <nav>
        <NavLink to="/" title="Location">
          <span className="location">
            <MapPin size={22} className="locationLogo" />
            Porto Alegre,Rs
          </span>
        </NavLink>
        <NavLink to="/Carrinho">
          <span className="cart">
            <ShoppingCart size={22} className="cartLogo" />
            <span>{selectedCoffees.length}</span>
          </span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

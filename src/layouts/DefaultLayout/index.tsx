import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, TitleContainer } from './styles'

export function DefaultLayout() {
  return (
    <TitleContainer>
      <div className="wrapperTitle">
        <span className="title">
          <a>Coffee Delivery</a>
        </span>
        <span className="subtitle">
          <a>Desafio Ignite</a>
        </span>
      </div>

      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </TitleContainer>
  )
}

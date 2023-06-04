import { BannerContainer } from './styled'
import bannerCoffee from '../../assets/bannerCoffee.svg'
import { ShoppingCart, Cube, Timer, Coffee } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <img
        src={bannerCoffee}
        alt="copo de café com grãos de cafe por baixo"
      ></img>
      <section>
        <p>Encontre o café perfeito</p>
        <p> para qualquer hora do dia</p>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
          qualquer hora
        </p>
        <div className="wrapperMenu">
          <div>
            <span className="shoppingCart">
              <ShoppingCart size={22} className="shoppingCartLogo" />
            </span>
            <p>Compra simples e segura</p>
            <span className="cube">
              <Cube size={22} className="cubeLogo" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span className="timer">
              <Timer size={22} className="timerLogo" />
            </span>
            <p>Entrega rápida e rastreada</p>
            <span className="coffee">
              <Coffee size={22} />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </section>
    </BannerContainer>
  )
}

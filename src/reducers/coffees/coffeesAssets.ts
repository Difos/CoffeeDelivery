import Expresso from '../../assets/CoffeExpressoTradicional.svg'
import Capuccino from '../../assets/capuccino.svg'
import Americano from '../../assets/Americano.svg'
import CapuccinoEspecial from '../../assets/CapuccinoEspecial.svg'

enum ImagesCoffee {
  EXPRESSO_TRADICIONAL = 'Expresso',
  CAPUCCINO = 'Capuccino',
  AMERICANO = 'Americano',
  CAPUCCINO_ESPECIAL = 'Capuccino Especial',
}

export const imagensCoffe = {
  [ImagesCoffee.EXPRESSO_TRADICIONAL]: Expresso,
  [ImagesCoffee.CAPUCCINO]: Capuccino,
  [ImagesCoffee.AMERICANO]: Americano,
  [ImagesCoffee.CAPUCCINO_ESPECIAL]: CapuccinoEspecial,
}

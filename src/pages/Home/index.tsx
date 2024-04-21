import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import CoffeeImage from '../../assets/CoffeeImage.svg'
import ExpressCoffee from '../../assets/Express-Coffee.svg'
import {
  FirstImpressionContainer,
  IconsTextContainer,
  TextContainer,
  IconsPresentation,
  MenuContainer,
  CoffeeListContainer,
} from './styles'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <>
      <FirstImpressionContainer>
        <IconsTextContainer>
          <TextContainer>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <span>
              Com o Coffee Delivery vocẽ recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TextContainer>

          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <IconsPresentation iconColor={'yellowDark'}>
                    <ShoppingCart size={16} weight="fill" />
                  </IconsPresentation>
                </td>
                <td>
                  <span>Compra Simples e segura</span>
                </td>
                <td>
                  <IconsPresentation iconColor={'baseTitle'}>
                    <Package size={16} weight="fill" />
                  </IconsPresentation>
                </td>
                <td>
                  <span>Embalagem mantém o café intacto</span>
                </td>
              </tr>
              <tr>
                <td>
                  <IconsPresentation iconColor={'yellowStandard'}>
                    <Timer size={16} weight="fill" />
                  </IconsPresentation>
                </td>
                <td>
                  <span>Entrega rápida e rastreada</span>
                </td>
                <td>
                  <IconsPresentation iconColor={'purpleStandard'}>
                    <Coffee size={16} weight="fill" />
                  </IconsPresentation>
                </td>
                <td>
                  <span>O Café chega fresquinho até você</span>
                </td>
              </tr>
            </tbody>
          </table>
        </IconsTextContainer>
        <img src={CoffeeImage} alt="Coffee Image" />
      </FirstImpressionContainer>

      <MenuContainer>
        <strong>Nossos Cafés</strong>
        <CoffeeListContainer>
          <CoffeeCard
            coffeeType="expresso"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
            img={ExpressCoffee}
          />
          <CoffeeCard
            coffeeType="Capuccino"
            price={16.6}
            description="Leitin cremoso com café"
            img={ExpressCoffee}
          />
        </CoffeeListContainer>
      </MenuContainer>
    </>
  )
}

import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import Illustration from '../../assets/Illustration.svg'
import {
  HeaderContainer,
  InformationSection,
  SuccessContainer,
  SuccessDetails,
  SuccessInformationContainer,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { customer, paymentMethod } = useContext(CartContext)

  return (
    <SuccessContainer>
      <HeaderContainer>
        <h1>Uhu! Pedido Confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </HeaderContainer>
      <SuccessInformationContainer>
        <SuccessDetails>
          <InformationSection iconColor={'purpleStandard'}>
            <label>
              <MapPin weight="fill" size={16} />
            </label>
            <div>
              <span>
                Entrega em <strong>{customer?.rua}</strong>
              </span>
              <span>
                {customer?.bairro}, {customer?.cidade}, {customer?.numero} -
                {customer?.UF}
              </span>
            </div>
          </InformationSection>

          <InformationSection iconColor={'yellowStandard'}>
            <label>
              <Timer weight="fill" size={16} />
            </label>
            <div>
              <span>Previsão de Entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </InformationSection>

          <InformationSection iconColor={'yellowDark'}>
            <label>
              <CurrencyDollar weight="fill" size={16} />
            </label>
            <div>
              <span>Pagamento na entrega</span>
              <span>{paymentMethod}</span>
            </div>
          </InformationSection>
        </SuccessDetails>
        <div>
          <img src={Illustration} alt="Ilustração" />
        </div>
      </SuccessInformationContainer>
    </SuccessContainer>
  )
}

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import {
  CheckoutContainer,
  PaymentSectionContainer,
  RegisterSectionContainer,
  RegisterSection,
  RegisterInput,
  RegisterArea,
  CardSelectionSection,
  ButtonContainer,
  CardOptionsContainer,
  PaymentSection,
  FinishPaymentSection,
} from './styles'
import { PaymentCoffeCard } from './components/PaymentCoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function Checkout() {
  const { cart, handleSetCustomer, handleSetPaymentMethod } =
    useContext(CartContext)
  const { register, watch } = useForm()

  const calcPrice: number = cart.reduce(
    (acc, coffee) => acc + coffee.price * coffee.quantity,
    0,
  )

  const deliveryTax: number = 3.5

  const totalPrice: number = calcPrice + deliveryTax

  const CEP = watch('CEP')
  const rua = watch('Rua')
  const numero = watch('Numero')
  const complemento = watch('Complemento')
  const bairro = watch('Bairro')
  const cidade = watch('Cidade')
  const UF = watch('UF')

  function setNewPaymentMethod(paymentMethod: string) {
    handleSetPaymentMethod(paymentMethod)
  }

  const customer = { CEP, rua, numero, complemento, bairro, cidade, UF }

  function handleConfirmOder() {
    handleSetCustomer(customer)
  }

  return (
    <CheckoutContainer>
      <RegisterSectionContainer>
        <strong>Complete seu pedido</strong>

        <RegisterSection>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja seu pedido</p>
            </div>
          </header>

          <RegisterArea>
            <RegisterInput
              required
              inputWidth={'standard'}
              placeholder="CEP"
              {...register('CEP')}
            />
            <RegisterInput
              required
              inputWidth={'full'}
              placeholder="Rua"
              {...register('Rua')}
            />
            <RegisterInput
              required
              inputWidth={'standard'}
              placeholder="Número"
              {...register('Numero')}
            />
            <RegisterInput
              inputWidth={'mid'}
              placeholder="Completo"
              {...register('Complemento')}
            />
            <RegisterInput
              required
              inputWidth={'standard'}
              placeholder="Bairro"
              {...register('Bairro')}
            />
            <RegisterInput
              required
              inputWidth={'standardMid'}
              placeholder="Cidade"
              {...register('Cidade')}
            />
            <RegisterInput
              required
              inputWidth={'min'}
              placeholder="UF"
              {...register('UF')}
            />
          </RegisterArea>
        </RegisterSection>

        <CardSelectionSection>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja seu pedido</p>
            </div>
          </header>

          <CardOptionsContainer>
            <ButtonContainer
              onClick={() => setNewPaymentMethod('Cartão de Crédito')}
            >
              <label>
                <CreditCard size={16} />
              </label>
              CARTÃO DE CRÉDITO
            </ButtonContainer>

            <ButtonContainer
              onClick={() => setNewPaymentMethod('Cartão de Debito')}
            >
              <label>
                <Bank size={16} />
              </label>
              CARTÃO DE DÉBITO
            </ButtonContainer>

            <ButtonContainer onClick={() => setNewPaymentMethod('Dinheiro')}>
              <label>
                <Money size={16} />
              </label>
              DINHEIRO
            </ButtonContainer>
          </CardOptionsContainer>
        </CardSelectionSection>
      </RegisterSectionContainer>

      <PaymentSectionContainer>
        <strong>Cafés selecionados</strong>

        <PaymentSection>
          {cart.map((coffee) => (
            <PaymentCoffeCard
              key={coffee.coffeeType}
              coffeeType={coffee.coffeeType}
              price={coffee.price}
              quantity={coffee.quantity}
            />
          ))}

          <FinishPaymentSection>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span>Total Itens</span>
                  </td>
                  <td>
                    <span>R$ {calcPrice.toFixed(2)}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Entrega</span>
                  </td>
                  <td>
                    <span>R$ {deliveryTax.toFixed(2)}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>R$ {totalPrice.toFixed(2)}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </FinishPaymentSection>

          <button onClick={handleConfirmOder}>
            <NavLink to="/success" title="checkout">
              CONFIRMAR PEDIDO
            </NavLink>
          </button>
        </PaymentSection>
      </PaymentSectionContainer>
    </CheckoutContainer>
  )
}

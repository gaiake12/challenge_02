import ExpressCoffee from '../../../../assets/Express-Coffee.svg'
import { CardContainer } from './style'
import { Trash } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../../../contexts/CartContext'

interface IPaymentCoffeeCardProps {
  coffeeType: string
  price: number
  quantity: number
}

export function PaymentCoffeCard({
  coffeeType,
  price,
  quantity,
}: IPaymentCoffeeCardProps) {
  const { deleteItem, changeItemQuantity } = useContext(CartContext)

  const { register, watch } = useForm()
  const changeQuantityValue = watch('quantity')

  function handleDeleteCoffee() {
    deleteItem({ coffeeType, price, quantity })
  }

  function handleChangeItemQuantity() {
    // console.log(changeQuantityValue)
    changeItemQuantity({ coffeeType, price, quantity: changeQuantityValue })
  }

  useEffect(handleChangeItemQuantity, [
    changeQuantityValue,
    coffeeType,
    price,
    quantity,
    changeItemQuantity,
  ])

  return (
    <CardContainer>
      <img src={ExpressCoffee} alt="ExpressoTradicional" />
      <div>
        <span>{coffeeType}</span>
        <footer>
          <input
            type="number"
            min={1}
            value={quantity}
            {...register('quantity', { valueAsNumber: true })}
          />

          <button onClick={handleDeleteCoffee} type="submit">
            <label>
              <Trash />
            </label>
            REMOVER
          </button>
        </footer>
      </div>

      <strong>R$ {price.toFixed(2)}</strong>
    </CardContainer>
  )
}

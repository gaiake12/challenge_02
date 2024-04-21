import { ShoppingCart } from 'phosphor-react'
import { CoffeeCardContainer, CoffeeCardFooter } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { useForm } from 'react-hook-form'

interface CoffeeCardProps {
  coffeeType: string
  price: number
  description: string
  img: string
}

interface IData {
  quantity: number
}

export function CoffeeCard({
  coffeeType,
  price,
  description,
  img,
}: CoffeeCardProps) {
  const { register, handleSubmit } = useForm()

  const { addItemsCart } = useContext(CartContext)

  function handleAddItemCart(data: IData) {
    const { quantity } = data
    addItemsCart({ coffeeType, price, quantity })
  }

  return (
    <CoffeeCardContainer onSubmit={handleSubmit(handleAddItemCart)} action="">
      <img src={img} alt="Express-coffee" />
      <label>TRADICIONAL</label>
      <strong>{coffeeType}</strong>
      <span>{description}</span>
      <CoffeeCardFooter>
        <strong>
          <span>R$</span> {price.toFixed(2)}
        </strong>

        <div>
          <input
            id="quantity"
            type="number"
            placeholder="1"
            min={1}
            required
            {...register('quantity', { valueAsNumber: true })}
          />
          <button type="submit">
            <ShoppingCart weight="fill" size={20} />
          </button>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { CartItemsValue, CartItemsValueContainer, HeaderContainer, HeaderDetails } from './styles'
import Logo from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Coffe-Delivery" />

      <HeaderDetails>
        <label>
          <MapPin weight="fill" size={22} />
          Curitiba, PR
        </label>
        <NavLink to="/checkout" title="checkout">
          <CartItemsValueContainer>
            <nav>
              <ShoppingCart weight="fill" size={22} />
            </nav>
            <CartItemsValue>
              <span>{cart.length}</span>
            </CartItemsValue>
          </CartItemsValueContainer>
        </NavLink>
      </HeaderDetails>
    </HeaderContainer>
  )
}

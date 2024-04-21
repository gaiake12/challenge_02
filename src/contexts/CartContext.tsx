import { useReducer, createContext, ReactNode, useState } from 'react'

interface ICart {
  coffeeType: string
  price: number
  quantity: number
}

interface ICustomer {
  CEP: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  UF: string
}

interface CartContextType {
  cart: ICart[]
  addItemsCart: (product: ICart) => void
  changeItemQuantity: (product: ICart) => void
  deleteItem: (product: ICart) => void
  handleSetCustomer: (customer: ICustomer) => void
  handleSetPaymentMethod: (selectedPaymentMethod: string) => void
  customer: ICustomer | undefined
  paymentMethod: string | undefined
}

interface CartContextProviderProps {
  children: ReactNode
}

interface ActionProps {
  type: string
  payload: ICart
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [customer, setCustomer] = useState<ICustomer>()
  const [paymentMethod, setPaymentMethod] = useState<string>('')

  function handleSetPaymentMethod(selectedPaymentMethod: string) {
    setPaymentMethod(selectedPaymentMethod)
  }

  function handleSetCustomer(customerData: ICustomer) {
    setCustomer(customerData)
  }

  function checkIfHasInList(list: ICart[], product: ICart) {
    const testList = list.filter(
      (coffee) => coffee.coffeeType === product.coffeeType,
    )

    console.log(testList)
    return testList
  }

  const [cart, dispatch] = useReducer((state: ICart[], action: ActionProps) => {
    if (action.type === 'ADD_NEW_ITEM') {
      const checkIfProductAlreadyExists = checkIfHasInList(
        state,
        action.payload,
      )

      if (checkIfProductAlreadyExists.length > 0) {
        const listWithRepeatedCoffee = state.map((coffee) => {
          if (coffee.coffeeType === action.payload.coffeeType) {
            const soma = coffee.quantity + action.payload.quantity

            return { ...coffee, quantity: soma }
          }

          return coffee
        })

        return listWithRepeatedCoffee
      }

      return [...state, action.payload]
    }

    if (action.type === 'DELETE_ITEM') {
      const cartWithotDeletedItem = state.filter(
        (coffee) => coffee.coffeeType !== action.payload.coffeeType,
      )

      return cartWithotDeletedItem
    }

    if (action.type === 'CHANGE_ITEM_QUANTITY') {
      const cartWithQuantityChange = state.map((coffee) => {
        if (coffee.coffeeType === action.payload.coffeeType) {
          return { ...coffee, quantity: action.payload.quantity }
        }
        return coffee
      })
      return cartWithQuantityChange
    }

    return state
  }, [])

  function addItemsCart(product: ICart) {
    dispatch({
      type: 'ADD_NEW_ITEM',
      payload: product,
    })
  }

  function changeItemQuantity(product: ICart) {
    dispatch({
      type: 'CHANGE_ITEM_QUANTITY',
      payload: product,
    })
  }

  function deleteItem(product: ICart) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: product,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemsCart,
        changeItemQuantity,
        deleteItem,
        handleSetCustomer,
        customer,
        handleSetPaymentMethod,
        paymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

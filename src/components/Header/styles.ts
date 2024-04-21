import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  width: 100%;
  padding: 0 10rem;
`

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-standard']};
    padding: 0.4rem;
    gap: 0.2rem;
    border-radius: 8px;
  }

  nav {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 8px;
    padding: 0.2rem 0.3rem;
    margin-top: 0.1rem;
  }
`
export const CartItemsValueContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const CartItemsValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['yellow-dark']};
  text-decoration: none;
  border-radius: 100%;
  font-size: 1rem;
  color: ${(props) => props.theme.white};
  margin: -0.1rem 0 0 -0.4rem;
  font-weight: bold;
  padding: 0.01rem 0.3rem;
`

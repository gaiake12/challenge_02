import styled from 'styled-components'

export const CoffeeCardContainer = styled.form`
  display: flex;
  width: 16rem;
  height: 19.37rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  label {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.4rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: bold;
  }
  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const CoffeeCardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 4.5rem;
      height: 2.3rem;
      background: ${(props) => props.theme['purple-light']};
      border: none;
      border-radius: 8px;
      color: ${(props) => props.theme['purple-dark']};
      padding: 1rem;
    }

    button {
      height: 2.3rem;
      width: 2.3rem;
      border-radius: 8px;
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`

import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 39rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const RegisterSectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 40rem;
  flex-direction: column;
  gap: 2rem;
`

export const PaymentSectionContainer = styled.div`
  width: 28rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
`

export const RegisterSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 8px;

  header {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};

    div {
      span {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.1rem;
      }

      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.8rem;
      }
    }
  }
`

export const RegisterArea = styled.form`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.7rem;
  gap: 0.4rem;
`

const INPUT_WIDTH = {
  standard: 12.5,
  full: 35,
  mid: 21.75,
  min: 3.75,
  standardMid: 17.25,
} as const

interface InputProps {
  inputWidth: keyof typeof INPUT_WIDTH
}

export const RegisterInput = styled.input<InputProps>`
  width: ${(props) => INPUT_WIDTH[props.inputWidth]}rem;
  height: 2.65rem;
  padding: 0 0.9rem;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme['base-input']};
`

export const CardSelectionSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 8px;

  header {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme['purple-standard']};

    div {
      span {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.1rem;
      }

      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.8rem;
      }
    }
  }
`

export const CardOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.button`
  width: 11.16rem;
  height: 3.19rem;
  border-radius: 8px;
  background: ${(props) => props.theme['base-input']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  label {
    color: ${(props) => props.theme['purple-standard']};
  }
`

export const PaymentSection = styled.div`
  height: 31.12rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 2.5rem;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }

  button {
    width: 100%;
    height: 2.87rem;
    border-radius: 8px;
    background: ${(props) => props.theme['yellow-standard']};
    color: ${(props) => props.theme.white};
    border: none;
    font-size: 0.9rem;
    font-weight: bold;
  }
`

export const FinishPaymentSection = styled.div`
  width: 23rem;
  height: 5.75rem;

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      display: flex;
      justify-content: space-between;
    }

    td {
      padding: 0.5rem 0;

      strong {
        font-size: 1.2rem;
      }
    }
  }
`

import styled from 'styled-components'

export const CardContainer = styled.form`
  width: 23rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
  background: ${(props) => props.theme['base-card']};

  img {
    height: 4rem;
    width: 4rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    width: 10.7rem;
    height: 3.82rem;
    gap: 0.3rem;

    footer {
      display: flex;
      gap: 0.3rem;
    }

    input {
      width: 4.5rem;
      height: 2rem;
      background: ${(props) => props.theme['base-button']};
      border: none;
      border-radius: 8px;
      color: ${(props) => props.theme['base-title']};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      width: 5.69rem;
      height: 2rem;
      border-radius: 8px;
      background: ${(props) => props.theme['base-button']};
      border: none;
      font-size: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: light;
      gap: 0.2rem;
      color: ${(props) => props.theme['base-text']};
      padding: 0 2rem;
      cursor: pointer;

      label {
        color: ${(props) => props.theme['purple-standard']};
        cursor: pointer;
      }
    }
  }
`

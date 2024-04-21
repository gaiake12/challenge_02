import styled from 'styled-components'

export const FirstImpressionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34rem;
  width: 100%;
  padding: 0 10rem;
`

export const IconsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: flex-start;

  table {
    border-collapse: collapse;

    td {
      font-size: 1rem;
      padding: 0.4rem;
    }
  }
`

export const TextContainer = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 3.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

const ICONS_COLORS = {
  yellowStandard: 'yellow-standard',
  yellowDark: 'yellow-dark',
  baseTitle: 'base-title',
  purpleStandard: 'purple-standard',
} as const

interface IconsProps {
  iconColor: keyof typeof ICONS_COLORS
}

export const IconsPresentation = styled.div<IconsProps>`
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 10rem;
  gap: 3.37rem;

  strong {
    font-size: 1.8rem;
  }
`

export const CoffeeListContainer = styled.div`
  max-width: 70rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: 7rem;
  margin-bottom: 5rem;
`

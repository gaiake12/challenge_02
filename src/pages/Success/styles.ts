import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0 0 0;
  gap: 2rem;
`
export const HeaderContainer = styled.header`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.9rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const SuccessInformationContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
`

export const SuccessDetails = styled.div`
  display: flex;
  width: 32.87rem;
  height: 16.87rem;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0 32px 0 32px;
  border: 1px solid ${(props) => props.theme['yellow-dark']};
  padding: 2rem;
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

export const InformationSection = styled.div<IconsProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  label {
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
    color: ${(props) => props.theme.white};
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: flex-start;
  }
`

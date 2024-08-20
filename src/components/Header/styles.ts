import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Nunito, sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme.blue};
  }
`

import styled from 'styled-components'

export const HeaderSpecific = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 1rem auto;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-top: -5rem;
  background: ${(props) => props.theme['base-post']};

  h1 {
    margin: 1rem 0;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonRedirect = styled.div`
  color: ${(props) => props.theme.blue};

  a {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoContainer = styled.div`
  max-width: 960px;
  width: 60%;
  margin: 2rem auto;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
`

export const SubData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`

export const Sub = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

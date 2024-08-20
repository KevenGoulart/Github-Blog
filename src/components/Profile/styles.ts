import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;
  display: flex;
  gap: 2rem;
  border-radius: 8px;

  background: ${(props) => props.theme['base-profile']};
  color: ${(props) => props.theme['base-text']};

  img {
    border-radius: 8px;
    width: 10rem;
    height: 10rem;
    margin: 1.5rem 0;
  }
`

export const ProfileTexts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2rem 0;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: white;
  }
`

export const LinkRedirect = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${(props) => props.theme.blue};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  :hover {
    color: ${(props) => props.theme['base-text']};

    a {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
`

export const ProfileInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

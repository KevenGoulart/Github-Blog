import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 1rem auto;
  padding: 1rem 1.5rem;
  border-radius: 8px;
`

export const PostCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;
  }

  div {
    background: ${(props) => props.theme['base-post']};
    width: calc(50% - 0.75rem);
    padding: 1rem 2rem;
    border-radius: 8px;
    box-sizing: border-box;

    h1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span:first-child {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      margin: 0.5rem 0;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
    }
  }
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

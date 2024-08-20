import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { PostsProvider } from './contexts/PostsContext'
import { ProfileProvider } from './contexts/ProfileContext'
import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <ProfileProvider>
        <PostsProvider>
          <Outlet />
        </PostsProvider>
      </ProfileProvider>
    </ThemeProvider>
  )
}

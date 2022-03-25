import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import React, { useContext } from 'react'
import { render } from 'react-dom'
import { ColorThemeContext, ColorThemeProvider } from './ColorThemeContext'
import App from './App'
import './scss/style.scss'
import { useLocalStorage } from '@mantine/hooks'

const root: HTMLElement = (document.getElementById('root') || document.body)

const ProviderWrapper = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  })
  const { colors } = useContext(ColorThemeContext)

  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme, colors, primaryColor: 'brand' }}>
          <App />
        </MantineProvider>
      </ColorSchemeProvider>
  )
}


render(
  <React.StrictMode>
    <ColorThemeProvider>
      <ProviderWrapper />
    </ColorThemeProvider>
  </React.StrictMode>,
root)

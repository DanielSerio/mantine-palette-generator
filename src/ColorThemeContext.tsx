import React, { createContext, Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { MantineThemeColorsOverride, MantineThemeOverride } from '@mantine/core'
import { ColorPalette } from './lib'


interface ColorThemeContextProps extends MantineThemeOverride {
  colors: MantineThemeColorsOverride
  setColors: Dispatch<SetStateAction<MantineThemeColorsOverride>>
}

export const ColorThemeContext = createContext<ColorThemeContextProps>({
  colors: {},
  setColors: () => {}
})

export const ColorThemeProvider = ({ children }: { children: ReactElement }) => {
  const palette = new ColorPalette('#5f3dc4')
  const [colors, setColors] = useState<MantineThemeColorsOverride>(palette.getColorObject())
  return (
    <ColorThemeContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorThemeContext.Provider>
  )
}
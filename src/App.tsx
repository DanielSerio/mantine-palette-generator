import { AppShell, Button, createStyles, MantineTheme, ScrollArea, SimpleGrid, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import React, { useContext } from 'react'
import { ColorThemeContext } from './ColorThemeContext'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import ColorSwatchGroup from './components/ColorSwatchGroup'
import MantineThemeBlock from './components/MantineThemeBlock'
import PaletteForm from './components/PaletteForm'

const useAppShellStyles = (dark: boolean) => createStyles((theme: MantineTheme) => {
  return ({
    root: {
      background: dark ? theme.colors.dark : theme.colors.grey[0]
    }
  })
})

export default function App () {
  const { colorScheme } = useMantineColorScheme()
  const dark: boolean = colorScheme === 'dark'
  const { classes } = useAppShellStyles(dark)()
  const theme = useMantineTheme()
  
  return (
    <AppShell className={classes.root} header={<AppHeader dark={dark} />}>
      <ScrollArea style={{height: 'calc(100vh - 100px)'}}>
        <SimpleGrid breakpoints={[
          {
            spacing: 'xs',
            cols: 1,
            maxWidth: 'sm'
          },
          {
            spacing: 'md',
            cols: 2,
            minWidth: 'sm'
          }
        ]}
        sx={{maxWidth: 700}} mx={'auto'}>
          <div><PaletteForm /></div>
          <div>
            <ColorSwatchGroup name="Brand" colors={theme.colors.brand}/>
            <ColorSwatchGroup name="Accent" colors={theme.colors.accent}/>
            <ColorSwatchGroup name="Dark" colors={theme.colors.dark.slice(1)}/>
            <ColorSwatchGroup name="Grey" colors={theme.colors.grey}/>
          </div>
        </SimpleGrid>
        <MantineThemeBlock />
        <AppFooter />
      </ScrollArea>
    </AppShell>
  )
}

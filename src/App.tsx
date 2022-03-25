import { AppShell, Button, createStyles, MantineTheme, ScrollArea } from '@mantine/core'
import React, { useContext } from 'react'
import { ColorThemeContext } from './ColorThemeContext'
import AppHeader from './components/AppHeader'
import { ColorPalette } from './lib'

const useAppShellStyles = createStyles((theme: MantineTheme) => {
  const dark: boolean = theme.colorScheme === 'dark'
  return ({
    root: {
      background: dark ? theme.colors.dark : theme.colors.grey[0]
    }
  })
})

export default function App () {
  const { classes } = useAppShellStyles()
  
  return (
    <AppShell className={classes.root} header={<AppHeader />}>
      <ScrollArea>
        Content
      </ScrollArea>
    </AppShell>
  )
}

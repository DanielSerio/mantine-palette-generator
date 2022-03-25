import { Container, createStyles, Header, HeaderProps, MantineTheme, Text } from '@mantine/core';
import React from 'react';
import DarkmodeButton from './DarkmodeButton';

const useHeaderStyles = (dark: boolean) => createStyles((t: MantineTheme) => {
  return ({
    root: {
      display: 'flex',
      alignItems: 'center',
      background: dark ? t.colors.dark[9] : t.colors.grey[0]
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '95%'
    }
  })
})


export default function AppHeader({ dark, ...props}: Partial<HeaderProps> & { dark: boolean }) {
  const { classes } = useHeaderStyles(dark)()
  return (
    <header>
      <Header  
        className={classes.root} 
        height={64} 
        {...props}>
        <Container size={'xl'} className={classes.container}>
          <Container>
            <Text 
              m={0} 
              component='h1' 
              size='xl'
              color={'brand'}
              styles={(t: MantineTheme) => ({
                textShadow: `0 0 1px ${t.colorScheme === 'dark' ? '#aaa' : '#555'}`
                
                })}>Mantine Palette</Text>
          </Container>
          <Container>
            <DarkmodeButton />
          </Container>
        </Container>
      </Header>
    </header>
  );
}

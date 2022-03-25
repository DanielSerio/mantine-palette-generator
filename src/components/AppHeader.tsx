import { Container, createStyles, Header, MantineTheme, Text } from '@mantine/core';
import React from 'react';

const useHeaderStyles = createStyles((theme: MantineTheme) => {
  return ({
    root: {
      display: 'flex',
      alignItems: 'center',
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

export default function AppHeader() {
  const { classes } = useHeaderStyles()
  return (
    <header>
      <Header className={classes.root} height={64}>
        <Container size={'xl'} className={classes.container}>
          <Container>
            <Text 
              m={0} 
              component='h1' 
              size='xl'
              color={'brand'}>Mantine Palette</Text>
          </Container>
          <Container>
            darkmode toggle
          </Container>
        </Container>
      </Header>
    </header>
  );
}

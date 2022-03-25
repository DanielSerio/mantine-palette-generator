import React from 'react';
import { Prism } from '@mantine/prism'
import { getThemeString } from '../theme';
import { Container, MantineTheme, Text, useMantineTheme } from '@mantine/core';

export default function MantineThemeBlock() {
  const { colors, colorScheme } = useMantineTheme()
  const isDark: boolean = colorScheme === 'dark'
  const { grey, dark, brand, accent } = colors

 return (
   <Container styles={(t: MantineTheme) => ({ maxWidth: '95vw' })} my={40}>
     <Text mb={'xl'} align='center' mx={'auto'} sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(8,8,8,0.8)'}}>Code</Text>
      <Prism mx={'auto'} styles={{
        root: {
          maxWidth: 410,
        },
        code: {
          fontSize: '0.6rem'
        }
      }} language='typescript' sx={{fontSize: '2px'}}>
          {Boolean(colors && colors.grey && colors.dark && colors.accent) &&
          getThemeString({ grey, dark, brand, accent }) 
          }
      </Prism>
   </Container>
)
}

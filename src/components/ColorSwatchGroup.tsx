import { ColorSwatch, Container, createStyles, Group, MantineTheme, Text, ThemeIcon } from '@mantine/core';
import React from 'react';

interface ColorSwatchProps {
  name: string
  colors: string[]
}

const useColorSwatchGroupStyles = createStyles((t: MantineTheme) => ({
  text: {
    color: t.colorScheme === 'dark' ? t.colors.grey[0] : t.colors.dark[9]
  }
}))

export default function ColorSwatchGroup({ name, colors }: ColorSwatchProps) {
  const { classes } = useColorSwatchGroupStyles()
  return (
    <Container sx={{ width: 'fit-content' }} mx={'auto'}>
      <Text className={classes.text} component='h2'>{name}</Text>
      <Group spacing={'xs'}>
        {colors.map((color: string) => {
          return (
            <ColorSwatch 
              key={color} 
              color={color}
              size={18}/>
          )
        })}
      </Group>
    </Container>
  );
}

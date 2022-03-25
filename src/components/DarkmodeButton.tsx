import { Button, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { Sun, Moon } from 'tabler-icons-react'

export default function DarkmodeButton() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()
  return (
    <Button color={'brand'} variant={'outline'} onClick={() => toggleColorScheme()}>
      {colorScheme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
}

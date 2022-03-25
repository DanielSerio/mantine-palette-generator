import { Button, ColorInput, NumberInput, Radio, RadioGroup, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useContext } from 'react';
import { ColorThemeContext } from '../ColorThemeContext';
import { ColorPalette } from '../lib';

interface FormValues {
  brand: string
  accentDirection: 'left'|'right'
  accentAmount: number
  greySaturation: number
}

export default function PaletteForm() {
  const { setColors } = useContext(ColorThemeContext)

  const form = useForm<FormValues>({
    initialValues: {
      brand: '#5f3dc4',
      accentDirection: 'left',
      accentAmount: 120,
      greySaturation: 6
    }
  })

  const handleSubmit = (values: FormValues) => {
    const {
      brand,
      accentAmount,
      accentDirection,
      greySaturation
    } = values
    const palette = new ColorPalette(brand)

    setColors(palette.getColorObject({
      accentAmount,
      accentDirection,
      greySaturation
    }))
  }
  return (
    <form className="form" onSubmit={form.onSubmit(handleSubmit)}>
      <ColorInput label="Brand Color" {...form.getInputProps('brand')}/>
      <RadioGroup label="Accent Direction" {...form.getInputProps('accentDirection')}>
        <Radio value='left' label="Left"/>
        <Radio value='right' label="Right"/>
      </RadioGroup>
      <NumberInput label="Accent Angle (degrees)" min={90} max={180} {...form.getInputProps('accentAmount')}/>
      <NumberInput label="Grey Saturation" min={1} max={12} {...form.getInputProps('greySaturation')}/>
      <Button my={'xl'} color={'brand'} type="submit">
        <Text style={{textShadow: '0 0 0 black'}}>Submit</Text>
      </Button>
      <Button ml={'md'} my={'xl'} color={'accent'} type="reset">
        <Text style={{textShadow: '0 0 0 black'}}>Reset</Text>
      </Button>
    </form>
  );
}

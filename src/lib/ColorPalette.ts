import { MantineThemeColorsOverride } from "@mantine/core"
import { hexToHSL, HSLToHex } from "../utils"

export type AccentDirection = 'left' | 'right'

export interface ColorObject extends MantineThemeColorsOverride {
  brand: string[]
  accent: string[]
  grey: string[]
  dark: string[]
}

export interface ColorObjectSettings {
  accentDirection: AccentDirection
  accentAmount: number
  greySaturation: number
}

export class ColorPalette {
  private _h: number
  private _s: number
  private _l: number
  private _accentDirection: AccentDirection = 'right'
  private _accentAmount: number = 120
  private _greySaturation: number = 6
  private _lightValues: number[] = [
    97,
    90,
    85,
    80,
    75,
    70,
    65,
    60,
    55,
    50
  ]

  private _greyLightValues: number[] = [
    97,
    92,
    83,
    74,
    65,
    56,
    47,
    38,
    29,
    20
  ]

  private _darkLightValues: number[] = [
    77,
    70,
    63,
    56,
    49,
    42,
    35,
    28,
    21,
    14,
    7
  ]

  constructor(hex: string) {
    [this._h, this._s, this._l] = hexToHSL(hex)
  }

  private forEachLightValue = (callback: (light: number) => void, type?: 'grey'|'dark'): void => {
    let values: number[] = this._lightValues
    if (type === 'grey') values = this._greyLightValues
    if (type === 'dark') values = this._darkLightValues
    for (let i = 0; i < values.length; i += 1) {
      const light = values[i]
      callback(light)
    } 
  }

  private constructBrand = (): string[] => {
    let saturation  = 100
    const brandColors: string[] = []
    const hue: number = this._h

    this.forEachLightValue((light: number) => {
      brandColors.push(HSLToHex([hue, saturation, light]))
      saturation -= 5
    })

    return brandColors
  }

  private constructGreys = (): string[] => {
    const greyColors: string[] = []
    const saturation = this._greySaturation
    const hue: number = this._h

    this.forEachLightValue((light: number) => {
      greyColors.push(HSLToHex([hue, saturation, light]))
    }, 'grey')

    return greyColors
  }

  private constructDark = (): string[] => {
    const darkColors: string[] = []
    const saturation = this._greySaturation
    const hue: number = this._h

    this.forEachLightValue((light: number) => {
      darkColors.push(HSLToHex([hue, saturation, light]))
    }, 'dark')

    return darkColors
  }

  private constructAccent = (): string[] => {
    const accentColors: string[] = []
    let saturation  = 100
    const directionMutator: number = this._accentDirection === 'left' ? -1 : 1
    let hue: number = this._h + (directionMutator * this._accentAmount)
    if (hue < 0) hue += 360
    if (hue >= 360) hue -= 360

    this._lightValues.forEach((light: number) => {
      accentColors.push(HSLToHex([hue, saturation, light]))
      saturation -= 5
    })

    return accentColors
  }


  public getColorObject = (settings?: Partial<ColorObjectSettings>): ColorObject => {
    if (settings) {
      const { 
        accentAmount, 
        accentDirection,
        greySaturation
      } = settings
      if (accentDirection) this._accentDirection = accentDirection
      if (accentAmount) this._accentAmount = accentAmount
      if (greySaturation) this._greySaturation = greySaturation
    }
  
    const brand = this.constructBrand()
    const grey = this.constructGreys()
    const dark = this.constructDark()
    const accent = this.constructAccent()

    return {
      brand,
      accent,
      grey,
      dark
    }
  }
}
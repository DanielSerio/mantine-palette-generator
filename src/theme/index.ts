import { MantineThemeColorsOverride } from "@mantine/core";

export function getThemeString(colors: MantineThemeColorsOverride): string {
  const splitColors = (c: string[]): string => {
    return c.map((v) => `"${v}"`).join(',\n        ')
  }
  
  const colorLineBlock = (name: 'brand'|'accent'|'grey'|'dark' = 'brand'): string => {
    return `${name}: [
        ${splitColors(name === 'dark' ? colors[name].slice(1, 11) : colors[name])}
    ]`
  }
  return `import { MantineThemeOverride } from "@mantine/core";

  export const theme: MantineThemeOverride = {
    primaryColor: 'brand',
    colors: {
      ${colorLineBlock()},
      ${colorLineBlock('accent')},
      ${colorLineBlock('grey')},
      ${colorLineBlock('dark')}
    }
  }`
}
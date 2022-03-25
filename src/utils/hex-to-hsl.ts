export function hexToHSL(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) throw new Error('Invalid hex')
  const { min, max, round } = Math
  let r = parseInt(result[1], 16)
  let g = parseInt(result[2], 16)
  let b = parseInt(result[3], 16)

  r /= 255
  g /= 255
  b /= 255
  const MAX = max(r, g, b)
  const MIN = min(r, g, b)
  const middle: number = (MAX + MIN) / 2
  let h = middle 
  let s = middle 
  let l = middle

  if(MAX == MIN){
      h = s = 0 // achromatic
  } else {
      let d = MAX - MIN
      s = l > 0.5 ? d / (2 - MAX - MIN) : d / (MAX + MIN)
      switch(MAX) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6
  }

  h *= 360
  s = s * 100
  s = round(s)
  l = l * 100
  l = round(l)
  return [h, s, l]
}
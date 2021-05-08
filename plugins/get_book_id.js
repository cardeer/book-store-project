export default ({ app }, inject) => {
  inject(
    'getIdFromColor',
    (r, g, b) => 65536 * (r + 1) + 256 * (g + 1) + (b + 1) - 65792
  )

  inject('extractColorsFromImageData', (data) => {
    return [
      [data[0], data[1], data[2]],
      [data[1196], data[1197], data[1198]],
    ]
  })

  inject('getColorFromId', (id) => {
    id -= 1
    return [Math.floor(id / 65536), Math.floor((id % 65536) / 256), id % 256]
  })
}

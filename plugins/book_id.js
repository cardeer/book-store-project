export default ({ app }, inject) => {
  inject(
    'getIdFromColor',
    (r, g, b) => 65536 * (r + 1) + 256 * (g + 1) + (b + 1) - 65792
  )
}

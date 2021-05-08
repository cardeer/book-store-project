export default {
  totalPrice(state) {
    return state.cartItems.reduce((acc, v) => acc + v.price * v.quantity, 0)
  },
}

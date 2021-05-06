export default {
  addCartItem(state, item) {
    const index = state.cartItems.findIndex((v) => v.id === item.id)
    if (index === -1) {
      state.cartItems.push(item)
    } else {
      state.cartItems[index].quantity++
    }
  },
  removeCartItem(state, itemId) {
    const index = state.cartItems.findIndex((v) => v.id === itemId)
    if (index !== -1) {
      state.cartItems.splice(index, 1)
    }
  },
}

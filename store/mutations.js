export default {
  addCartItem(state, item) {
    const index = state.cartItems.findIndex((v) => v.isbn === item.isbn)
    if (index === -1) {
      state.cartItems.push(item)
    } else {
      state.cartItems[index].quantity++
    }
  },
  removeCartItem(state, isbn) {
    const index = state.cartItems.findIndex((v) => v.isbn === isbn)
    if (index !== -1) {
      state.cartItems.splice(index, 1)
    }
  },
  clearCartItems(state) {
    state.cartItems = []
  },
  setUserId(state, id) {
    state.userId = id
  },
}

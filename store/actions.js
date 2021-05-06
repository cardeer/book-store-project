export default {
  addCartItem({ commit }, item) {
    commit('addCartItem', {
      id: item.id,
      name: item.name,
      quantity: item.quantity,
    })
  },
  removeCartItem({ commit }, itemId) {
    commit('removeCartItem', itemId)
  },
}

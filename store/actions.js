export default {
  addCartItem({ commit }, item, quantity = 1) {
    commit('addCartItem', {
      isbn: item.isbn,
      name: item.name,
      image_url: item.image_url,
      price: item.unit_price,
      quantity,
    })
  },
  removeCartItem({ commit }, itemId) {
    commit('removeCartItem', itemId)
  },
  clearCartItems({ commit }) {
    commit('clearCartItems')
  },
}

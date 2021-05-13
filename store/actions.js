export default {
  async nuxtServerInit({ commit }, app) {
    if (app.$auth.loggedIn) {
      const data = await app.$axios.post('profile', {
        headers: {
          Authorization: app.$auth.strategy.token.get(),
        },
      })
      if (data.status === 200) {
        commit('setUserId', data.data.id)
      }
    }
  },

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

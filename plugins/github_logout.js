export default ({ app }, inject) => {
  inject('githubLogout', async () => {
    const response = await app.$axios({
      method: 'delete',
      url: `https://api.github.com/applications/${process.env.clientId}/token`,
      auth: {
        username: process.env.clientId,
        password: process.env.clientSecret,
      },
      data: {
        access_token: app.$auth.strategy.token.get().split(' ')[1],
      },
    })

    return response
  })
}

<template>
  <div id="navbar">
    <div id="navbar-links">
      <nuxt-link
        v-for="link in links"
        :key="link.title"
        class="navbar-link"
        :to="link.to"
        >{{ link.title }}</nuxt-link
      >
    </div>
    <p id="navbar-title">ISEKAI</p>
    <Button
      v-if="!$auth.loggedIn"
      id="navbar-login"
      background-color="var(--facebook-color)"
      color="var(--white)"
      rounded
      :height="40"
      @click="login"
    >
      <span id="navbar-login-bubble-1"></span>
      <span id="navbar-login-bubble-2"></span>
      <span id="navbar-login-bubble-3"></span>
      <Icon
        id="navbar-login-logo"
        icon="facebook"
        color="var(--white)"
        style="margin-right: 10px"
      />
      <span>Login</span>
    </Button>
    <NavbarUser v-else />
    <NavbarCart id="navbar-cart" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Books',
          to: '/books',
        },
        {
          title: 'Isekai',
          to: '/isekai',
        },
      ],
    }
  },

  methods: {
    login() {
      window.location.href =
        'https://accounts.google.com/o/oauth2/auth?protocol=oauth2&response_type=token&access_type&client_id=322525152965-hbqp3g534551bgrnapf5u7kmu4s07ved.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email&state=g6eKOz7KOR'
    },
  },
}
</script>

<style scoped>
#navbar {
  display: flex;
  position: fixed;
  align-items: center;
  padding: 0 0 0 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  background-image: var(--navbar-color);
  z-index: 9;
}

#navbar-links {
  display: flex;
  align-items: center;
}

.navbar-link {
  padding: 5px 10px;
  color: var(--white);
  border-radius: 100px;
  user-select: none !important;
}

.navbar-link.nuxt-link-exact-active {
  background-color: var(--active-link-background-color);
  color: var(--black);
  font-weight: bold;
}

#navbar-title {
  position: absolute;
  margin: 0 0 0 auto;
  left: 50%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: var(--white);
  letter-spacing: 5px;
  transform: translateX(-50%);
}

#navbar-login,
#navbar-user {
  margin-right: 10px;
  margin-left: auto;
}

#navbar-login > :nth-last-child(-n + 2) {
  position: relative;
}

#navbar-login-bubble-1,
#navbar-login-bubble-2,
#navbar-login-bubble-3 {
  position: absolute;
  top: 100%;
  left: 5px;
  width: 5px;
  height: 5px;
  background-color: var(--white);
  border-radius: 100%;
}

#navbar-login-bubble-1 {
  animation: loginAnimate 1s ease infinite;
}

#navbar-login-bubble-2 {
  left: 50%;
  transform: translateX(-50%);
  animation: loginAnimate 2s ease infinite;
}

#navbar-login-bubble-3 {
  left: 100%;
  transform: translateX(calc(-100% - 5px));
  animation: loginAnimate 3s ease infinite;
}

@keyframes loginAnimate {
  to {
    top: -5px;
  }
}
</style>

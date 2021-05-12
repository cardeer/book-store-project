<template>
  <Layout>
    <div id="login-card">
      <div
        id="left"
        :style="{
          backgroundImage: `url(${require('~/assets/images/login_cover.png')})`,
        }"
      ></div>
      <!-- left -->
      <div id="right">
        <h3 id="login-card-title">Login to ISEKAI</h3>
        <Button
          v-if="!$auth.loggedIn"
          id="login"
          background-color="var(--red)"
          color="var(--white)"
          rounded
          :height="40"
          style="margin-top: auto"
          @click="login"
        >
          <span id="login-bubble-1"></span>
          <span id="login-bubble-2"></span>
          <span id="login-bubble-3"></span>
          <Icon
            id="login-logo"
            icon="google"
            color="var(--white)"
            style="margin-right: 10px"
          />
          <span>Login</span>
        </Button>
      </div>
      <!-- right -->
    </div>
  </Layout>
</template>

<script>
export default {
  layout: 'empty',
  auth: 'guest',
  methods: {
    login() {
      const dev = process.env.NODE_ENV === 'development'
      window.location.href = `https://accounts.google.com/o/oauth2/auth?protocol=oauth2&response_type=token&access_type&client_id=322525152965-hbqp3g534551bgrnapf5u7kmu4s07ved.apps.googleusercontent.com&redirect_uri=http%3A%2F%2F${
        dev ? 'localhost' : '35.247.181.83'
      }%3A3000%2Fcallback&scope=openid%20profile%20email&state=g6eKOz7KOR`
    },
  },
}
</script>

<style scoped>
.layout {
  padding: 0 !important;
  justify-content: center;
  align-items: center;
  background-image: var(--navbar-color);
}

#login > :nth-last-child(-n + 2) {
  position: relative;
}

#login-bubble-1,
#login-bubble-2,
#login-bubble-3 {
  position: absolute;
  top: 100%;
  left: 5px;
  width: 5px;
  height: 5px;
  background-color: var(--white);
  border-radius: 100%;
}

#login-bubble-1 {
  animation: loginAnimate 1s ease infinite;
}

#login-bubble-2 {
  left: 50%;
  transform: translateX(-50%);
  animation: loginAnimate 2s ease infinite;
}

#login-bubble-3 {
  left: 100%;
  transform: translateX(calc(-100% - 5px));
  animation: loginAnimate 3s ease infinite;
}

@keyframes loginAnimate {
  to {
    top: -5px;
  }
}

#login-card {
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #606060;
}

#login-card-title {
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
}

#left {
  flex-grow: 1;
  background-size: cover;
}

#right {
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
}
</style>

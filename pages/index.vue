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
        <h3 id="login-card-title">Welcome to ISEKAI</h3>
        <Button
          v-if="!$auth.loggedIn"
          id="login"
          background-color="var(--github-color)"
          color="var(--white)"
          rounded
          :height="40"
          @click="login"
        >
          <span id="login-bubble-1"></span>
          <span id="login-bubble-2"></span>
          <span id="login-bubble-3"></span>
          <Icon
            id="login-logo"
            icon="github"
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
      this.$auth.loginWith('github')
    },
  },
}
</script>

<style scoped>
.layout {
  padding: 0 20px !important;
  justify-content: center;
  align-items: center;
  background-image: var(--navbar-color);
}

#login {
  min-width: 250px;
  max-width: 250px;
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
  overflow: hidden;
}

#login-card-title {
  margin: 0;
  margin-bottom: 50px;
  text-align: center;
}

#left {
  flex-grow: 1;
  background-size: cover;
  background-position: center;
}

#right {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  max-width: 350px;
}
</style>

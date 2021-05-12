<template>
  <div id="navbar-user" class="clickable" @click="menuActive = !menuActive">
    <div id="navbar-user-name">{{ $auth.user.given_name }}</div>
    <div
      id="navbar-user-menu"
      :style="{ display: menuActive ? 'flex' : 'none' }"
    >
      <span id="navbar-user-arrow"></span>
      <div class="navbar-user-menu-item" @click="logout">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    }
  },

  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style scoped>
#navbar-user {
  position: relative;
  padding: 5px 15px;
  border: 1px solid var(--white);
  border-radius: 100px;
  color: white;
}

#navbar-user-arrow {
  position: absolute;
  top: -8px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: var(--gray);
  transform: rotateZ(45deg);
  clip-path: polygon(0 0, 0 30px, 20px 30px, 20px 0);
  z-index: 8;
}

#navbar-user-menu {
  position: absolute;
  padding: 10px;
  flex-direction: column;
  left: 50%;
  top: calc(var(--navbar-height) + 10px);
  width: calc(100% + 30px);
  height: auto;
  background-color: var(--gray);
  color: black;
  transform: translateX(-50%);
}

.navbar-user-menu-item {
  cursor: pointer;
  user-select: none;
  width: 100%;
  text-align: center;
}
</style>

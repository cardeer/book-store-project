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
    <p id="navbar-title">isekai ohayou</p>
    <NavbarCart id="navbar-cart" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Books',
          to: '/books',
        },
      ],
    }
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
  background-color: var(--primary-color);
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

#navbar-cart {
  margin-left: auto;
}
</style>

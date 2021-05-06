<template>
  <div id="navbar">
    <NavbarCart id="navbar-cart" />
  </div>
</template>

<style scoped>
#navbar {
  display: flex;
  position: fixed;
  padding: 0 0 0 16px;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--navbar-height);
  background-color: var(--primary-color);
  z-index: 9;
}

#navbar-cart {
  margin-left: auto;
}
</style>

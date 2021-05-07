<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: var(--navbar-height);
}
</style>

<template>
  <div id="button" class="clickable" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'var(--white)',
    },
    color: {
      type: String,
      default: 'var(--black)',
    },
  },

  data() {
    return {
      style: {
        backgroundColor: this.backgroundColor,
        color: this.color,
      },
    }
  },
}
</script>

<style scoped>
#button {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 16px;
  text-align: center;
}

#button.disabled {
  background-color: var(--disabled-color) !important;
  color: var(--white) !important;
}
</style>

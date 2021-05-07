<template>
  <div class="button clickable" :style="style" @click="$emit('click')">
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
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
}

.button.disabled {
  background-color: var(--disabled-color) !important;
  color: var(--white) !important;
}
</style>

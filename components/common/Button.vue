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
    rounded: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      style: {
        backgroundColor: this.backgroundColor,
        color: this.color,
        borderRadius: this.rounded ? '1000px' : '0',
        height: this.height ? this.height + 'px' : 'auto',
      },
    }
  },
}
</script>

<style scoped>
.button {
  position: relative;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.button.disabled {
  background-color: var(--disabled-color) !important;
  color: var(--white) !important;
}
</style>

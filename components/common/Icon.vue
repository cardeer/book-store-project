<template>
  <span class="mdi" :class="`mdi-${icon}`" :style="style"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 22,
    },
    color: {
      type: String,
      default: 'var(--black)',
    },
  },

  data() {
    return {
      style: {
        fontSize: this.size + 'px',
        color: this.color,
      },
    }
  },
}
</script>

<template>
  <div class="column" :style="style">
    <slot />
  </div>
</template>

<script>
import layoutMixins from '~/mixins/layout_mixins'

export default {
  mixins: [layoutMixins],
}
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
}
</style>

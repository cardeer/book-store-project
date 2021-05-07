<template>
  <div class="row" :style="style">
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
.row {
  display: flex;
}
</style>

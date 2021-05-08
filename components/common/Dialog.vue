<template>
  <div v-if="value" class="dialog">
    <Column class="dialog-content">
      <Row class="dialog-header" align-items="center">
        <span class="dialog-title">{{ title }}</span>
        <span
          class="clickable"
          style="margin-left: auto"
          @click="$emit('input', false)"
        >
          <Icon icon="close" :size="20" />
        </span>
      </Row>
      <div class="flex-grow-1 scrollbar dialog-body">
        <slot />
      </div>
      <div class="dialog-footer">
        <Row justify-content="flex-end" align-items="center">
          <slot name="footer" />
        </Row>
      </div>
    </Column>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.dialog {
  position: fixed;
  padding: 30px 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  /* overflow: hidden auto; */
}

.dialog-content {
  margin: auto;
  max-width: 600px;
  max-height: 100%;
  background-color: var(--white);
}

.dialog-content > div {
  padding: 16px;
  width: 100%;
}

.dialog-title {
  font-weight: bold;
}

.dialog-header {
  border-bottom: 1px solid var(--input-border-color);
}

.dialog-body {
  overflow: hidden auto;
}
</style>

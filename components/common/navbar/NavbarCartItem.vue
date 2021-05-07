<template>
  <div class="navbar-cart-item">
    <span
      class="navbar-cart-item-remove clickable"
      @click="$emit('removeItem', item.id)"
      ><Icon icon="close"
    /></span>
    <span class="navbar-cart-item-name">{{ item.name }}</span>
    <span class="navbar-cart-item-quantity">x {{ item.quantity }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped>
.navbar-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
}

.navbar-cart-item-name {
  flex-grow: 1;
  margin: 0 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

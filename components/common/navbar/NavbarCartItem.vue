<template>
  <div class="navbar-cart-item">
    <div
      class="navbar-cart-item-remove clickable"
      @click="$emit('removeItem', item.id)"
    >
      <Icon icon="close" />
    </div>
    <div class="navbar-cart-item-name">{{ item.name }}</div>
    <div class="navbar-cart-item-quantity">x {{ item.quantity }}</div>
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
  transition: all 0.3s ease;
}

.navbar-cart-item:hover {
  background-color: var(--lighter-gray);
}

.navbar-cart-item-name {
  flex-grow: 1;
  margin: 0 15px;
  width: 50%;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.navbar-cart-item-quantity {
  flex-grow: 1;
  text-align: right;
}
</style>

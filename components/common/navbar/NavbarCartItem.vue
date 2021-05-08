<template>
  <div class="navbar-cart-item">
    <div
      class="navbar-cart-item-remove clickable"
      @click="$emit('removeItem', item.isbn)"
    >
      <Icon icon="close" />
    </div>
    <div class="navbar-cart-item-name">{{ item.name }}</div>
    <div class="navbar-cart-item-quantity">
      <span style="color: var(--primary-color)">
        {{ item.price }}
      </span>
      THB &times;
      {{ item.quantity }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.navbar-cart-item {
  display: grid;
  grid-template-columns: 25px 1fr 1fr;
  align-items: center;
  padding: 10px 5px;
  transition: all 0.3s ease;
}

.navbar-cart-item:hover {
  background-color: var(--lighter-gray);
}

.navbar-cart-item-name {
  margin: 0 15px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.navbar-cart-item-quantity {
  text-align: right;
}
</style>

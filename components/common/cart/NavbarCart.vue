<template>
  <div id="navbar-cart">
    <nuxt-link to="/cart">
      <Icon id="navbar-cart-icon" icon="cart-outline" color="var(--white)" />
    </nuxt-link>
    <div id="navbar-cart-items-gap"></div>
    <div id="navbar-cart-items-wrapper">
      <div id="navbar-cart-items-arrow"></div>
      <div id="navbar-cart-items-block">
        <div
          v-if="$store.state.cartItems.length > 0"
          id="navbar-cart-items"
          class="scrollbar"
        >
          <NavbarCartItem
            v-for="item in $store.state.cartItems"
            :key="item.id"
            :item="item"
            @removeItem="$store.dispatch('removeCartItem', $event)"
          />
        </div>
        <div v-else id="navbar-cart-items" class="no-items">
          <span>You have no items in cart.</span>
        </div>
        <nuxt-link id="navbar-cart-checkout" to="/cart">
          <Button background-color="var(--primary-color)" color="var(--white)"
            >Checkout</Button
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navbar-cart {
  --width: var(--navbar-height);
  --height: var(--navbar-height);
  --gap-height: 25px;
  --items-block-width: 400px;
  --items-block-height: 300px;

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: var(--height);
  background-color: var(--navbar-cart-background-color);
}

#navbar-cart-icon {
  cursor: pointer;
}

#navbar-cart-items-gap {
  position: absolute;
  top: var(--navbar-height);
  right: 0;
  width: var(--width);
  height: var(--gap-height);
}

#navbar-cart-items-wrapper {
  position: absolute;
  top: calc(var(--navbar-height) + var(--gap-height));
  right: 10px;
  transform: scale(0);
  transition: all 0.3s ease;
}

#navbar-cart:hover > #navbar-cart-items-wrapper {
  transform: scale(1);
}

#navbar-cart-items-arrow {
  position: absolute;
  top: -8px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: var(--gray);
  transform: rotateZ(45deg);
  clip-path: polygon(0 0, 0 30px, 20px 30px, 20px 0);
  z-index: 8;
}

#navbar-cart-items-block {
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 5px;
  top: 0;
  right: 0;
  width: var(--items-block-width);
  height: var(--items-block-height);
  background-color: var(--gray);
  z-index: 10;
}

#navbar-cart-items {
  flex-grow: 1;
  overflow: hidden auto;
}

#navbar-cart-items.no-items {
  padding-top: 20px;
  text-align: center;
}

#navbar-cart-items > :not(:last-child) {
  border-bottom: 1px solid var(--black);
}

#navbar-cart-checkout {
  margin-top: 5px;
}
</style>

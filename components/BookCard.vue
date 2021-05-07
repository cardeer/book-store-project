<template>
  <div class="book-card">
    <div class="book-card-content" :style="style">
      <Overlay />
      <div class="book-card-title bold">
        {{ book.name }}
      </div>
      <div class="book-card-description scrollbar">
        {{ book.description }}
      </div>
      <Row
        class="book-card-price bold"
        justify-content="flex-start"
        align-items="center"
      >
        <span>Price: ${{ book.unit_price }}</span>
      </Row>
      <Row
        class="book-card-footer"
        justify-content="center"
        align-items="flex-end"
      >
        <Button
          class="book-card-add-to-cart-button flex-grow-1"
          background-color="var(--green)"
          style="padding: 5px 16px"
          @click="addToCart()"
          ><Icon icon="cart-plus" style="margin-right: 10px" />Add</Button
        >
        <nuxt-link :to="`/books/view/${book.isbn}`" class="flex-grow-1">
          <Button
            background-color="var(--primary-color)"
            color="var(--white)"
            style="padding: 5px 16px"
            ><Icon
              icon="magnify"
              color="var(--white)"
              style="margin-right: 10px"
            />View</Button
          >
        </nuxt-link>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      style: {
        backgroundImage:
          this.book.image_url !== ''
            ? `url(${this.book.image_url})`
            : `url(https://picsum.photos/250/400)`,
      },
    }
  },

  methods: {
    addToCart() {
      this.$store.dispatch('addCartItem', {
        id: this.book.id,
        name: this.book.name,
        quantity: 1,
      })
    },
  },
}
</script>

<style scoped>
.book-card {
  --padding: 5px 10px;
  position: relative;
  padding: 10px;
}

.book-card-content {
  display: grid;
  position: relative;
  grid-template-rows: 53px 1fr 30px 50px;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: var(--book-card-background-color);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--white);
  border: 1px solid var(--black);
  clip-path: polygon(
    5% 0,
    0 5%,
    0 95%,
    5% 100%,
    95% 100%,
    100% 95%,
    100% 5%,
    95% 0
  );
  overflow: hidden;
  transition: transform 0.3s ease;
}

.book-card-content > .overlay {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.book-card-content > :not(.overlay) {
  position: relative;
}

.book-card-content:hover > .book-card-title ~ div {
  transform: translateY(0);
  visibility: visible;
  opacity: 1;
}

.book-card-content:hover > .overlay {
  opacity: 1;
  visibility: visible;
}

.book-card-title {
  padding: var(--padding);
  background-color: var(--overlay-background-color);
  line-height: 1.4;
  overflow: hidden;
}

.book-card-description {
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--white);
  overflow: hidden auto;
}

.book-card-price {
  padding: var(--padding);
}

.book-card-title ~ div {
  transform: translateY(30px);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}
</style>

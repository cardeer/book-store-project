<template>
  <div class="book-card">
    <div class="book-card-content">
      <Overlay />
      <div class="book-card-title bold">
        {{ bookData.name }}
      </div>
      <div class="book-card-description scrollbar">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores
        nihil hic nisi accusamus explicabo, ipsa aperiam praesentium obcaecati
        repellat autem, natus in mollitia rerum odit iusto illum quae sed?
        Aliquid porro maiores dignissimos beatae dolorem ad sint. Amet odio
        veniam distinctio, eligendi repudiandae voluptates asperiores quod est
        magni tenetur, vero incidunt! Sequi molestias est iste quia nulla, et
        quasi.
      </div>
      <Row
        class="book-card-price bold"
        justify-content="flex-start"
        align-items="center"
      >
        <span>Price: $10</span>
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
        <nuxt-link :to="`/books/view/${bookData.id}`" class="flex-grow-1">
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
    bookData: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch('addCartItem', {
        id: this.bookData.id,
        name: this.bookData.name,
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
  padding: 5px;
}

.book-card-content {
  display: grid;
  position: relative;
  grid-template-rows: 53px 1fr 30px 50px;
  width: 100%;
  height: 100%;
  background-color: var(--book-card-background-color);
  background-image: url(https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/07/Isekai-Anime.jpg);
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

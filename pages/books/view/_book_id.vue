<template>
  <Layout>
    <Container v-if="!$fetchState.pending">
      <h1 class="mt-0 text-center">{{ book.name }}</h1>
      <Row
        justify-content="center"
        align-items="start"
        style="margin: 40px 0 100px 0"
      >
        <div
          id="book-image"
          :style="{ backgroundImage: `url(${book.image_url})` }"
        ></div>
        <Column id="book-details" class="flex-grow-1">
          <p class="detail-text">
            By:
            <nuxt-link class="detail-link" :to="`/books/author/${book.author}`">
              {{ book.author }}
            </nuxt-link>
          </p>
          <p class="detail-text">
            Publisher:
            <nuxt-link
              class="detail-link"
              :to="`/books/publisher/${book.publisher}`"
            >
              {{ book.publisher }}
            </nuxt-link>
          </p>
          <p class="detail-text">
            Genre:
            <nuxt-link
              class="detail-link"
              :to="`/books/category/${book.category}`"
            >
              {{ book.category }}
            </nuxt-link>
          </p>
          <p class="detail-text">Price: {{ book.unit_price }} THB</p>
          <div id="detail-description" style="margin-top: 10px">
            {{ book.description }}
          </div>
          <Row style="margin-top: 20px">
            <Button
              rounded
              :height="45"
              background-color="var(--primary-color)"
              color="var(--white)"
              style="margin-right: 10px; padding: 10px 20px"
              @click="buyNow"
            >
              Buy now
            </Button>
            <Button
              rounded
              :height="45"
              background-color="var(--green)"
              style="padding: 10px 20px"
              @click="$store.dispatch('addCartItem', book)"
            >
              <Icon icon="cart-plus" style="margin-right: 10px" />
              Add to Cart
            </Button>
          </Row>
        </Column>
      </Row>
      <h2 class="text-left">แนะนำ</h2>
      <div class="divider"></div>
      <Row id="recommends" flex-wrap="wrap" style="margin-top: 40px">
        <BookCard
          v-for="recommend in recommends"
          :key="recommend.isbn"
          :book="recommend"
        />
      </Row>
    </Container>
  </Layout>
</template>

<script>
export default {
  fetchOnServer: false,
  data() {
    return {
      book: {},
      recommends: [],
      title: '',
    }
  },

  async fetch() {
    const { data: bookData } = await this.$axios.get(
      `book?isbn=${this.$route.params.book_id}`
    )
    this.book = bookData
    this.title = bookData.name

    const { data: recommends } = await this.$axios.get(
      `book/category?category=${bookData.category}`
    )
    this.recommends = recommends
      .filter((v) => v.isbn !== bookData.isbn)
      .slice(0, 8)
  },

  head() {
    return {
      title: this.title,
    }
  },

  methods: {
    buyNow() {
      this.$store.dispatch('addCartItem', this.book)
      this.$router.push('/checkout')
    },
  },
}
</script>

<style scoped>
#book-image {
  width: 100%;
  max-width: 500px;
  height: 400px;
  background-size: contain;
  background-position: 100% 0;
  background-repeat: no-repeat;
}

#book-details {
  margin-left: 40px;
  max-width: 600px;
}

.detail-text {
  margin: 0;
  margin-bottom: 10px;
}

.detail-link {
  color: var(--primary-color);
}

#recommends > .book-card {
  width: 25%;
}
</style>

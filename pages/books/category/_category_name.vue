<template>
  <Layout>
    <Container>
      <h1 class="mt-0">{{ $route.params.category_name }} Books</h1>
      <div class="divider"></div>
      <Row flex-wrap="wrap" style="margin-top: 20px">
        <BookCard v-for="book in books" :key="book.isbn" :book="book" />
      </Row>
    </Container>
  </Layout>
</template>

<script>
export default {
  fetchOnServer: false,

  data() {
    return {
      books: [],
    }
  },

  async fetch() {
    const { data } = await this.$axios.get(
      `book/category?category=${this.$route.params.category_name}`
    )
    this.books = data
  },
}
</script>

<style scoped>
.book-card {
  width: 25%;
}
</style>

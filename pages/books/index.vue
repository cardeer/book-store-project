<template>
  <Layout>
    <Container>
      <input class="input" type="text" placeholder="Search book" />
      <Row flex-wrap="wrap">
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
    const { data } = await this.$axios.get('books')
    this.books = data
  },
}
</script>

<style scoped>
.book-card {
  width: 25%;
  height: 400px;
}
</style>

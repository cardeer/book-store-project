<template>
  <Layout>
    <Container>
      <Row id="search-box" align-items="center">
        <Icon icon="magnify" style="margin-right: 10px" />
        <input v-model="searchValue" type="text" placeholder="Search book" />
      </Row>
      <Row flex-wrap="wrap" style="margin-top: 20px">
        <BookCard v-for="book in filteredBooks" :key="book.isbn" :book="book" />
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
      searchValue: '',
    }
  },

  async fetch() {
    delete this.$axios.defaults.headers.common.Authorization
    const { data } = await this.$axios.get('books')
    this.books = data
  },

  computed: {
    filteredBooks() {
      const value = this.searchValue.toLowerCase()
      return this.books.filter(
        (v) =>
          v.name.toLowerCase().includes(value) ||
          v.publisher.toLowerCase().includes(value) ||
          v.author.toLowerCase().includes(value)
      )
    },
  },
}
</script>

<style scoped>
.book-card {
  width: 25%;
}

#search-box {
  padding: 10px 16px;
  border: 1px solid var(--black);
}

#search-box > input {
  flex-grow: 1;
  height: 100%;
  border: none;
  outline: none;
  box-shadow: none;
}
</style>

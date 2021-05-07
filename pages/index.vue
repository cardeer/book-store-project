<template>
  <Layout>
    <Container>
      <Row id="books" flex-wrap="wrap">
        <BookCard
          v-for="i in 10"
          :key="i"
          :book-data="{ id: i, name: 'Isekai ' + i }"
        />
      </Row>
    </Container>
  </Layout>
</template>

<style scoped>
#books {
  margin: 20px 16px;
}

.book-card {
  max-width: 300px;
  width: calc(100% / 5);
  height: 400px;
}

@media screen and (max-width: 1025px) {
  .book-card {
    width: calc(100% / 4);
  }
}
@media screen and (max-width: 769px) {
  .book-card {
    width: calc(100% / 3);
  }
}
@media screen and (max-width: 426px) {
  #books {
    justify-content: center !important;
  }

  .book-card {
    width: 100%;
  }
}
</style>

<template>
  <Layout>
    <Container>
      <!-- <div class="section">
        <h1 class="section-title">
          HOT <Icon icon="fire" color="red" :size="30" />
        </h1>
        <div class="divider"></div>
        <Row class="books" flex-wrap="wrap">
          <BookCard
            v-for="i in 8"
            :key="i"
            :book-data="{ id: i, name: 'Isekai ' + i }"
          />
        </Row>
      </div>

      <div class="section">
        <h1 class="section-title">New</h1>
        <div class="divider"></div>
        <Row class="books" flex-wrap="wrap">
          <BookCard
            v-for="i in 8"
            :key="i + 8"
            :book-data="{ id: i + 8, name: 'Isekai ' + (i + 8) }"
          />
        </Row>
      </div> -->
    </Container>
  </Layout>
</template>

<style scoped>
.books {
  margin: 20px 16px;
}

.book-card {
  width: 25%;
  height: 400px;
}

.section-title {
  margin: 0 0 15px 0;
}
</style>

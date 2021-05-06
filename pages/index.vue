<template>
  <Layout>
    <div v-for="i in 10" :key="i" class="clickable" @click="addItem(i)">
      Item {{ i }}
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {
    addItem(i) {
      this.$store.dispatch('addCartItem', {
        id: i,
        name: 'Item' + i,
        quantity: 1,
      })
    },
  },
}
</script>

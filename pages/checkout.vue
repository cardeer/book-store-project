<template>
  <Layout>
    <Container>
      <h1 class="mt-0">Shopping Cart</h1>
      <div class="divider"></div>
      <Row>
        <Column style="margin-top: 20px; flex-grow: 1">
          <table class="table">
            <thead>
              <tr>
                <th class="text-left">Item</th>
                <th class="text-left" width="150">Price</th>
                <th class="text-left" width="50">Quantity</th>
                <th class="text-right" width="150">Total</th>
              </tr>
            </thead>

            <tbody v-if="$store.state.cartItems.length > 0">
              <tr v-for="item in $store.state.cartItems" :key="item.isbn">
                <td class="text-left">
                  <Row class="item-image-wrapper" align-items="center">
                    <div class="item-image">
                      <img
                        :src="item.image_url"
                        alt="book image"
                        loading="lazy"
                      />
                    </div>
                    <span style="margin-left: 10px">{{ item.name }}</span>
                  </Row>
                </td>
                <td class="text-left">{{ item.price }} THB</td>
                <td class="text-left">
                  <Row align-items="center">
                    <Icon icon="close" style="margin-right: 5px" />
                    {{ item.quantity }}
                  </Row>
                </td>
                <td class="text-right">{{ item.price * item.quantity }} THB</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td class="text-center" colspan="4">No items in cart.</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th class="text-right" colspan="4" style="font-size: 20px">
                  Total: {{ $store.getters.totalPrice }} THB
                </th>
              </tr>
            </tfoot>
          </table>
        </Column>

        <form
          v-if="$store.state.cartItems.length > 0"
          id="checkout-form"
          class="form"
        >
          <h2 style="font-weight: normal">Delivery Information</h2>
          <div class="form-group">
            <label>Name</label>
            <input v-model="name" class="input" type="text" />
          </div>

          <div class="form-group">
            <label>Address</label>
            <input v-model="address" class="input" type="text" />
          </div>

          <Button
            background-color="var(--primary-color)"
            color="var(--white)"
            @click="dialog = true"
          >
            Checkout
          </Button>
        </form>
      </Row>
    </Container>

    <Dialog v-model="dialog" title="Your Order Details">
      <p class="mt-0">Please check your order before checkout.</p>
      <p>Name: {{ name }}</p>
      <p>Address: {{ address }}</p>
      <!-- <p>Details</p> -->
      <div class="divider"></div>
      <div
        v-for="item in $store.state.cartItems"
        :key="item.isbn"
        class="order-detail"
      >
        <div>
          {{ item.name }}
        </div>
        <Row align-items="center" style="margin-left: auto">
          <span>{{ item.price }} THB</span>
          <Icon icon="close" style="margin: 0 5px" />
          <span>{{ item.quantity }}</span>
          <span> = {{ item.quantity * item.price }} THB</span>
        </Row>
      </div>
      <p class="mb-0 text-right">Total: {{ $store.getters.totalPrice }} THB</p>

      <template #footer>
        <Button
          background-color="var(--red)"
          color="var(--white)"
          style="margin-right: 5px; padding: 10px 20px"
          @click="dialog = false"
        >
          Cancel
        </Button>
        <Button
          background-color="var(--darker-green)"
          color="var(--white)"
          style="padding: 10px 20px"
          @click="checkout"
        >
          Confirm
        </Button>
      </template>
    </Dialog>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      address: '',
      dialog: false,
    }
  },

  methods: {
    async checkout() {
      await this.$axios.post(
        'makeOrder',
        {
          header: {
            user: 1,
            address: this.address,
          },
          details: this.$store.state.cartItems.map((v, i) => ({
            order_seq: i + 1,
            book_isbn: v.isbn,
            quantity: v.quantity,
            unit_price: v.price,
          })),
        },
        {
          headers: {
            Authorization: this.$auth.strategy.token.get(),
          },
        }
      )
      this.$store.dispatch('clearCartItems')
      this.$router.push('/checkout_finished')
    },
  },
}
</script>

<style scoped>
.item-image-wrapper {
  position: relative;
  overflow: hidden;
}

.item-image {
  position: relative;
  min-width: 100px;
  max-width: 100px;
  min-height: 150px;
  max-height: 150px;
}

.item-image > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#checkout-form {
  margin-left: 10px;
  padding: 0 20px 20px 20px;
  min-width: 350px;
  max-width: 350px;
  height: 100%;
  background-color: var(--gray);
}

.order-detail {
  display: grid;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
}

.order-detail > :first-child {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

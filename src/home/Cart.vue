<template>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-12 col-md-8 col-lg-6 items-card-custom">
        <a
          v-for="item in cart"
          :key="item.id"
          href="#"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <img :src="item.media.source" alt height="60" width="60" />
          <p class="h4">{{ item.name }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unit Price</p>
              <p>{{ item.price.formatted_with_symbol }}</p>
            </div>
            <div class="mr-2">
              <p>Quantity</p>
              <p>{{ item.quantity }}</p>
            </div>
            <div>
              <p>Total Price</p>
              <p>${{ item.price.raw * item.quantity }}</p>
            </div>
          </div>
        </a>
        <div
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <p class="h4">Total</p>
          <div>
            <p>Total Price</p>
            <p>${{ totalPrice }}</p>
          </div>
        </div>
        <button
          @click="checkout()"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >
          Checkout
        </button>
        <button
          @click="toMainPage"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
    ...mapGetters("account", ["user"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.price.raw * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 2000);
    },

    toMainPage() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>
<style>
.items-card-custom {
  padding-right: 0;
}
</style>

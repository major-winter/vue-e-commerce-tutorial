<template>
  <!-- <div style="padding: 25px">
    <div class="container">
      <div class="input-group mb-3">
        <div class="input-group-prepend float-right">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="findProduct"
          >
            Search
          </button>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          v-model.trim="searchedItem"
          v-on:keyup.enter="findProduct"
        />
      </div>
      <div class="row" v-if="searchProducts.length === 0">
        <div
          class="col-6 col-md-6 col-lg-4 mobile"
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
      <div class="row" v-else>
        <div
          class="col-md-4"
          v-for="product in searchProducts"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
      <div>
        <button class="btn btn-info btn-lg" @click="loadMore" v-if="canLoad">
          Load more
        </button>
      </div>
    </div>
  </div> -->

  <!-- From Commerce -->
  <div style="padding: 25px">
    <div class="container">
      <div class="input-group mb-3">
        <div class="input-group-prepend float-right">
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          v-model.trim="searchedItem"
        />
      </div>
      <div class="row" v-if="searchProducts.length === 0">
        <div
          class="col-6 col-md-6 col-lg-4 mobile"
          v-for="product in getCommerceProducts"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>

      <!-- View for searched products -->
      <div class="row" v-else>
        <div
          class="col-md-4"
          v-for="product in searchProducts"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
      <div>
        <button class="btn btn-info btn-lg" v-if="canLoad" @click="loadMore">
          Load more
        </button>
        <p v-else class="end-text">You've reached to the end of the list</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "./ProductCard";
export default {
  data() {
    return {
      searchProducts: [],
      searchedItem: "",
      canLoad: true,
    };
  },
  computed: {
    ...mapGetters("product", ["getCommerceProducts"]),
  },
  watch: {
    searchedItem(newVal) {
      let vm = this;
      newVal.trim() === "" || newVal == null
        ? vm.findProduct()
        : vm.findProduct(newVal);
    },
    getCommerceProducts(newVal) {
      if (newVal.length >= 12) this.canLoad = false;
    },
  },
  components: { ProductCard },
  methods: {
    ...mapActions("product", ["fetchProducts", "removeCart"]),

    //   findProduct() {
    //     let vm = this;
    //     vm.searchProducts = [];
    //     if (vm.searchedItem === "" || vm.searchedItem == null) return;
    //     let products = JSON.parse(localStorage.getItem("products"));
    //     products.forEach((product) => {
    //       if (
    //         product.title.toLowerCase().includes(vm.searchedItem.toLowerCase())
    //       ) {
    //         vm.searchProducts.push(product);
    //       }
    //     });
    //   },

    loadMore() {
      // this.getProducts(6);
      this.fetchProducts(6);
    },
  },
  mounted() {
    // this.getProducts();
    this.fetchProducts();
  },
};
</script>

<style scoped>
.end-text {
  margin-top: 50px;
}
@media screen and (max-width: 531px) {
  .mobile {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>

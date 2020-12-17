<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center mobile" v-if="isLoaded">
      <div class="col-12 col-sm-8 col-lg-3">
        <div class="card text-left shadow-md">
          <img
            class="card-img-top product-detail"
            :src="product.media.source"
            alt
          />
        </div>
      </div>
      <div class="col-12 col-sm-8 col-lg-4 text-left text-justify text-detail">
        <p class="lead text-justify">{{ product.name }}</p>
        <div>
          <p v-html="product.description"></p>
          <p class="h3">Price: {{ product.price.formatted_with_symbol }}</p>
        </div>
        <AddToCart :product="product" v-if="user.cu" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../components/details/AddToCart";
export default {
  data() {
    return {
      isInCardProp: false,
      isLoaded: false,
    };
  },
  watch: {
    product(new_val) {
      if (new_val) this.isLoaded = true;
    },
  },
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["product"]),
  },
  components: { AddToCart },
  methods: {
    ...mapActions("product", ["productDetails", "getProductDetail"]),
  },

  created() {
    let vm = this;
    // this.productDetails(this.$route.params.idProduct);
    vm.getProductDetail(this.$route.params.idProduct);
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 30px;
}
.product-detail {
  transform: scale(0.8);
}

.text-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* .card * {
		max-height: 85vh;
	} */
@media (max-width: 768px) {
  .mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

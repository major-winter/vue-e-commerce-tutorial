<template>
  <router-link
    class="card mb-3 shadow-sm product-card"
    type="button"
		tag="div"
    :to="{ name: 'ProductDetail', params: { idProduct: product.id } }"
  >
    <img :src="product.media.source" class="card-img-top product-image" />
    <div class="card-body">
      <h5 class="card-title text-left text-display">{{ product.name }}</h5>
      <div class="row justify-content-around align-items-baseline">
        <p>Price: {{ product.price.formatted_with_symbol }}</p>
        <router-link
          type="button"
          class="btn btn-primary btn-lg"
          :to="{ name: 'ProductDetail', params: { idProduct: product.id } }"
          >Details</router-link
        >
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style scoped>
.product-card {
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1.03) translateY(-0.2rem);
}

.card .product-image {
  height: 400px;
  transform: scale(0.7);
}

.text-display {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 768px) {
  .card .product-image {
    height: 350px;
    transform: scale(0.8);
  }
}

@media screen and (max-width: 576px) {
  .card .product-image {
    height: 300px;
    /* transform: scale(0.8); */
  }
}
</style>

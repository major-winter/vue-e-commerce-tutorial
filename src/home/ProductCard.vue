<template>
	<div class="card mb-3 shadow-sm">
		<img :src="product.image" class="card-img-top product-image" />

		<div class="card-body">
			<h5 class="card-title text-left text-display">{{ product.title }}</h5>
			<div class="row justify-content-around align-items-baseline">
				<p>Price: {{ product.price }}$</p>
				<router-link
					type="button"
					class="btn btn-primary btn-lg"
					:to="{ name: 'ProductDetail', params: { idProduct: product.id } }"
					>Details</router-link
				>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ProductCard',
		props: ['product'],
	};
</script>

<style scoped>
	.card .product-image {
		height: 400px;
		/* width: 200px; */
		/* zoom: 0.8;	 */
		transform: scale(0.7);
	}

	.text-display {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		-webkit-box-orient: vertical;
	}
</style>

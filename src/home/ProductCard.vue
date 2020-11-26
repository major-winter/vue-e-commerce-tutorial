<template>
	<div class="card mb-3 shadow-sm">
		<img :src="product.image" class="card-img-top product-image" />
		<div class="card-body">
			<h5 class="card-title text-left">{{ product.title }}</h5>
			<div class="row justify-content-around align-items-baseline">
				<p>Price: {{ product.price }}$</p>
				<router-link
					type="button"
					class="btn btn-primary btn-lg"
					:to="'/details/' + product.id"
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
<style>
	.card .product-image {
		height: 400px;
	}
</style>

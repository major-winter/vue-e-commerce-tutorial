<template>
	<div style="padding: 25px;">
		<div class="container">
			<div class="input-group mb-3">
				<div class="input-group-prepend">
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
				/>
			</div>
			<div class="row" v-if="searchProducts.length === 0">
				<div class="col-md-4" v-for="product in products" :key="product.id">
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
		</div>
	</div>
</template>
<script>
	import { mapActions, mapGetters } from 'vuex';
	import ProductCard from './ProductCard';
	export default {
		data() {
			return {
				searchProducts: [],
				searchedItem: '',
			};
		},
		computed: {
			...mapGetters('product', ['products']),
		},
		components: { ProductCard },
		methods: {
			...mapActions('product', ['getProducts', 'addCart', 'removeCart']),
			findProduct() {
				let vm = this;
				vm.searchProducts = [];
				if (vm.searchedItem === '' || vm.searchedItem == null) return;
				let products = JSON.parse(localStorage.getItem('products'));
				products.forEach((product) => {
					if (
						product.title.toLowerCase().includes(vm.searchedItem.toLowerCase())
					) {
						vm.searchProducts.push(product);
					}
				});
			},
		},
		mounted() {
			this.getProducts();
		},
	};
</script>
<style scoped></style>

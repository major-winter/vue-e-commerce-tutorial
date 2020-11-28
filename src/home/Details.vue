<template>
	<div class="container-fluid">
		<div class="row d-flex justify-content-center" v-if="isLoaded">
			<div class="col-6">
				<div class="card text-left shadow-md">
					<img class="card-img-top" :src="product.image" alt />
				</div>
			</div>
			<div class="col-6 text-left text-justify">
				<div class="display-3">{{ product.category }}</div>
				<p class="lead text-justify">{{ product.title }}</p>
				<div>
					<p class="h3">Price: ${{ product.price }}</p>
				</div>
				<AddToCart :product="product" v-if="user.cu" />
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';
	import AddToCart from '../components/details/AddToCart';
	export default {
		data() {
			return {
				isInCardProp: false,
				isLoaded: false,
			};
		},
		computed: {
			...mapGetters('account', ['user']),
			...mapGetters('product', ['product']),
		},
		components: { AddToCart },
		methods: {
			...mapActions('product', ['productDetails']),
		},

		created() {
			let vm = this;
			this.productDetails(this.$route.params.idProduct).then(() => {
				vm.isLoaded = true;
			});
		},
	};
</script>
<style>
	.container-fluid {
		padding: 30px;
	}
	.image-product {
		width: 100%;
	}
	/* .card * {
		max-height: 85vh;
	} */
</style>

<template>
	<div>
		<div>
			<nav class="navbar navbar-expand-lg navbar-dark">
				<router-link class="navbar-brand" to="/">Vue-Shop</router-link>
				<div class="ml-auto">
					<div v-if="Object.keys(this.user).length > 0">
						<img :src="user.SJ" class="img-thumbnail profile-image" alt />
						<router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
							<img
								src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
								width="50"
								alt
							/>
							<span class="badge badge-danger badge-pill">{{
								cart.length
							}}</span>
						</router-link>
						<button class="btn btn-primary" type="button" @click="logOut">
							LogOut
						</button>
					</div>

					<!-- <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login"
						>Login <i class="fab fa-google"></i
					></router-link> -->
					<button
						v-else
						class="btn btn-primary my-2 my-sm-0"
						@click="googleLogin"
					>
						Login <i class="fab fa-google"></i>
					</button>
				</div>
			</nav>
		</div>
		<div class="page-container">
			<router-view />
		</div>
		<div class="fill-space"></div>
		<footer>
			<div class="row">
				<div class="col">
					<h5>Get to Know Us</h5>
					<ul>
						<li>About Us</li>
						<li>Careers</li>
						<li>Investor Relations</li>
					</ul>
				</div>
				<div class="col">
					<h5>Make Money with Us</h5>
					<ul>
						<li>Sell your products</li>
						<li>Sell your apps</li>
						<li>Become an Affiliate</li>
						<li>Advertise your products</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<p>
					Copyright 2020
				</p>
			</div>
		</footer>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'Base',
		computed: {
			...mapGetters('account', ['user']),
			...mapGetters('product', ['cart']),
		},

		methods: {
			...mapActions('account', ['logout', 'login']),
			async googleLogin() {
				const googleUser = await this.$gAuth.signIn();
				// const info = await googleUser.getAuthResponse();
				const profile = await googleUser.getBasicProfile();
				this.login(profile);
			},
			async logOut() {
				const response = await this.$gAuth.signOut();
				this.logout(response);
			},
		},
	};
</script>

<style>
	nav,
	footer {
		background-color: teal;
	}
	.navbar-brand {
		font-weight: bold;
		font-size: 25px;
		color: #ffffff !important;
	}
	.profile-image {
		width: 50px;
		border-radius: 100% !important;
	}
	.page-container {
		padding-top: 81px;
	}
	.col ul {
		list-style: none;
		padding: 0;
	}

	footer {
		position: relative;
		bottom: -460px;
		overflow: hidden;
		padding: 10px;
		font-size: 0.8rem;
	}

	/* .fill-space {
		height: calc(100vh - 587px);
	} */
</style>

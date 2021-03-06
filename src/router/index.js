import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('../layouts/Base.vue'),
		children: [
			{ path: '', component: () => import('../home/Products.vue') },
			{
				path: 'product/:idProduct',
				name: 'ProductDetail',
				component: () => import('../home/Details.vue'),
			},
			{ path: 'cart', component: () => import('../home/Cart.vue') },
		],
	},
	{
		path: '/login',
		component: () => import('../account/Login.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes,
});

export default router;

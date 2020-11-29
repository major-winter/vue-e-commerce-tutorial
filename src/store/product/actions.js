import axios from 'axios';
let limit = 6;

export function getProducts({ commit }, payload) {
	if (payload) limit += payload;
	let url = `https://fakestoreapi.com/products?limit=${limit}`;

	axios
		.get(url)
		.then((response) => {
			console.log(response.data);
			commit('setProducts', response.data);
		})
		.catch((error) => {
			console.log(error);
		});
}

export async function productDetails({ commit }, id) {
	let url = `https://fakestoreapi.com/products/${id}`;

	await axios
		.get(url)
		.then((response) => {
			commit('setProduct', response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
}

export function addCart({ commit, getters }, payload) {
	let cart = getters.cart;
	let data = payload.product;
	data['quantity'] = payload.quantity;
	cart.push(data);
	commit('setCart', cart);
}

export function removeCart({ commit, getters }, id) {
	let cart = [];
	if (id) {
		for (let index = 0; index < getters.cart.length; index++) {
			const element = getters.cart[index];
			if (element.id !== id) {
				cart.push(element);
			}
		}
	}
	commit('setCart', cart);
}

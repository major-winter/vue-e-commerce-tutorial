export function setProducts (state, val) {
	state.products = val;
	localStorage.setItem('products', JSON.stringify(val));
}
export function setProduct (state, val) {
	state.product = val;
}
export function setCart (state, val) {
	state.cart = val;
}
export function setLoad (state, val) {
	state.upLoadingData = val;
}

export function setCommerceProducts (state, val) {
	state.commerceProducts = val
	localStorage.setItem('commerceProducts', JSON.stringify(val));
}

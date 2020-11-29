export function setUserData(state, val) {
	state.userData = val;
	localStorage.setItem('userData', JSON.stringify(val));
}

export function deleteUserData(state, val) {
	val === true
		? (state.userData = {}) && localStorage.setItem('userData', JSON.stringify({}))
		: state.userData;
}

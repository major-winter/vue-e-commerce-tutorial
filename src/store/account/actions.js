// import router from '../../router';

export function login({ commit }, userData) {
	commit('setUserData', userData);
	// router.push('/');
}

export function logout({ commit }, payload) {
	commit('deleteUserData', payload);
	// router.push('/');
}

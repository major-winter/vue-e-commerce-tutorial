import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GAuth from 'vue-google-oauth2';

const gauthOption = {
	clientId:
		'215470174198-566t7lnmm254pjkr7t86s47irotckc5s.apps.googleusercontent.com',
	scope: 'profile email',
	prompt: 'select_account',
};

Vue.use(GAuth, gauthOption);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

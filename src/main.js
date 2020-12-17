import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GAuth from 'vue-google-oauth2';

import Commerce from '@chec/commerce.js';

// Create a new Commerce instance
export const commerce =
	typeof process.env.VUE_APP_CHEC_PUBLIC_KEY !== 'undefined'
		? new Commerce(process.env.VUE_APP_CHEC_PUBLIC_KEY)
		: null;


const apiKey = process.env.VUE_APP_FIREBASE_API_KEY;

const gauthOption = {
	clientId: apiKey,
	scope: 'profile email',
	prompt: 'select_account',
};

Vue.use(GAuth, gauthOption);

Vue.config.productionTip = false;

let firebase = window.firebase;

var firebaseConfig = {
	apiKey: apiKey,
	authDomain: 'vue-ecommerce-be468.firebaseapp.com',
	databaseURL: 'https://vue-ecommerce-be468.firebaseio.com',
	projectId: 'vue-ecommerce-be468',
	storageBucket: 'vue-ecommerce-be468.appspot.com',
	messagingSenderId: 'SENDER_ID',
	appId: '1:643616267628:web:802ca679880c015b682749',
	measurementId: 'G-MEASUREMENT_ID',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

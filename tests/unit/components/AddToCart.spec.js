import { mount, createLocalVue, config } from '@vue/test-utils';
import Vuex from 'vuex';
import AddToCart from '@/components/details/AddToCart.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({});

describe('AddToCart.vue', () => {
	test('snapshot', () => {
		const $store = {
			state: {
				id: 1,
			},
			getters: {},
		};
		const wrapper = mount(AddToCart, {
			mocks: {
				$store,
			},
		});
		expect(wrapper).toMatchSnapshot();
	});
});

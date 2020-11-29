export default function() {
	return {
		userData: localStorage.getItem('userData')
			? JSON.parse(localStorage.getItem('userData'))
			: {},
	};
}

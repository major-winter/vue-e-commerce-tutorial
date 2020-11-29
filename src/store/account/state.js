export default function() {
	return {
		userData: (JSON.parse(localStorage.getItem('userData'))),
	};
}

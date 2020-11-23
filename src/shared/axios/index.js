import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
});

instance.interceptors.request.use(
	function (config) {
		// document.body.classList.add('loading-indicator');
		console.log('request....................', config);
		appendIndicator();
		return config;
	},
	function (error) {
		// document.body.classList.remove('loading-indicator');
		removeIndicator();
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function (response) {
		console.log('response....................', response);
		// document.body.classList.remove('loading-indicator');
		removeIndicator();
		return response;
	},

	function (error) {
		switch (error.response.status) {
			case 400:
				console.log('400');
				break;
			case 401:
				console.log('401');
				break;
			case 403:
				console.log('403');
				break;
			case 404:
				console.log('404');
				break;
			default:
				alert('deafutl');
		}
		// document.body.classList.remove('loading-indicator');
		removeIndicator();
		return Promise.reject(error);
	}
);

const appendIndicator = () => {
	document.body.classList.add('loading-indicator');
	const div = document.createElement('div');
	div.setAttribute('id', 'indicator');
	document.getElementsByTagName('body')[0].appendChild(div);
	const span = document.createElement('span');
	span.classList.add('radius');
	div.appendChild(span);
};

const removeIndicator = () => {
	const div = document.getElementById('indicator');
	div.parentNode.removeChild(div);
	document.body.classList.remove('loading-indicator');
};

export default instance;

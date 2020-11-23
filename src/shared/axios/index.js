import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

toast.configure();

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
		toast.info('Requet is successful!', { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 });
		removeIndicator();
		return response;
	},

	function (error) {
		console.log('error======>', error);
		console.log('error.response======>', error.response);
		if (error.response && error.response.status) {
			if (error.response.status === 400) {
				console.log('400');
			} else if (error.response.status === 401) {
				console.log('401');
			} else if (error.response.status === 403) {
				console.log('403');
			} else if (error.response.status === 404) {
				console.log('404');
			} else {
				console.log('default');
			}
		} else {
			console.log('error');
			// const errorMsg = error;
			// toast.error(`${errorMsg}`, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 5000 });
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

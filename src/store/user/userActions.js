import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';
import axios from 'axios';

const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
		payload: {
			loading: true,
		},
	};
};

const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: {
			loading: true,
			users,
		},
	};
};

const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: {
			loading: false,
			error,
		},
	};
};

// fatch data using axios, allow side effect
const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersFailure); // loading true
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				const users = response.data;
				dispatch(fetchUsersSuccess(users));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchUsersFailure(errorMsg));
			});
	};
};

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, fetchUsers };

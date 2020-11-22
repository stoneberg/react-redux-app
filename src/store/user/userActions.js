import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';

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

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure };

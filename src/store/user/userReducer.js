import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';

const initialState = {
	loading: false,
	users: [],
	error: '',
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				loading: true,
				users: [],
				error: '',
			};
		case FETCH_USERS_SUCCESS:
			return {
				loading: false,
				users: action.payload.users,
				error: '',
			};
		case FETCH_USERS_FAILURE:
			return {
				loading: false,
				users: [],
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default userReducer;

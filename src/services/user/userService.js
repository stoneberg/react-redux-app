import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../../store/user/userActions';
import HTTP from '../../shared/axios';

// fatch data using axios, allow side effect
const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest); // loading true
		HTTP.get('users/1000000')
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

export { fetchUsers };

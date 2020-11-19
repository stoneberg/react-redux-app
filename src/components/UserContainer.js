import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store';

function UserContainer({ fetchUsers, userData }) {
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	return (
		(userData.loading && <h2>Loading...</h2>) ||
		(userData.error && <h2>{userData.error}</h2>) || (
			<div>
				<h2>User List</h2>
				<div>
					{userData &&
						userData.users.length &&
						userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
				</div>
			</div>
		)
	);
}

const mapStateToProps = (state) => {
	return {
		userData: state.user, // root reducer prefix "user"
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

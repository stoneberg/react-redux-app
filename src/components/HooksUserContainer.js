import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../services/user/userService';

function HooksUserContainer() {
	const userData = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
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
		// (userData.loading && <h2>Loading...</h2>) ||
		// (userData.error && <h2>{userData.error}</h2>) || (
		// 	<div>
		// 		<h2>User List</h2>
		// 		<div>
		// 			{userData &&
		// 				userData.users.length &&
		// 				userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
		// 		</div>
		// 	</div>
		// )
	);
}

export default HooksUserContainer;

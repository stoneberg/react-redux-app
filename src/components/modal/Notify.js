import React from 'react';

function Notify(props) {
	return (
		<div>
			<h1>Hello {props.user}, Modalify!</h1>
			<div>
				<button onClick={props.close}>OK</button>
			</div>
		</div>
	);
}

export default Notify;

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<HooksCakeContainer />
				<CakeContainer />
			</div>
		</Provider>
	);
}

export default App;

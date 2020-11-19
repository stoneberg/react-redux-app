import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import configureStore from './store/configureStore';

function App() {
	const store = configureStore();
	return (
		<Provider store={store}>
			<div className='App'>
				<UserContainer />
				<ItemContainer cake />
				<ItemContainer />
				<NewCakeContainer />
				<HooksCakeContainer />
				<CakeContainer />
				<IceCreamContainer />
			</div>
		</Provider>
	);
}

export default App;

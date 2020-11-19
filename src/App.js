import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
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

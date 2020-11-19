import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// return store
export default function configureStore() {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
}

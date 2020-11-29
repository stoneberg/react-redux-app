import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // dispatch를 인수로 가지고 있는 모든 함수 처리

// return store
export default function configureStore() {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
}

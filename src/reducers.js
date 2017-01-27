import { combineReducers } from 'redux';
import { routerReducer } from 'connected-react-router';

export const reducers = combineReducers({
	router: routerReducer
});
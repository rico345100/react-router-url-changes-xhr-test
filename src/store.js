import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { reducers } from './reducers';

export const history = createBrowserHistory();
export const store = createStore(
	reducers,
	compose(
		applyMiddleware(
			routerMiddleware(history),
		),
	),
);

export function redirect(path) {
	history.push(path);
};
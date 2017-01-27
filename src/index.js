import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { store, history } from './store';
import { ConnectedRouter } from 'connected-react-router'
import App from './components/App';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
, document.getElementById('entry'));
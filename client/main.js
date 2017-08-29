import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Meteor } from 'meteor/meteor';

import appReducer from '../imports/ui/reducers';
import App from '../imports/ui/App';

const store = createStore(
	appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

Meteor.startup(() => {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app')
	);
});

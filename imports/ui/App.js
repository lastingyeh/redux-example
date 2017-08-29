import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import widgetActionCreators from './actions/widget-actions';

class App extends Component {
	// get all widgets
	componentDidMount() {
		const { widgetActions } = this.props;

		widgetActions.getWidgets();
	}

	// add widget
	handleForm = e => {
		e.preventDefault();

		const { widgetActions } = this.props;
		const name = this.refs.name.value;

		widgetActions.createWidget({ name });

		this.refs.name.value = '';
	};

	render() {
		const { widgets, widgetActions } = this.props;
		return (
			<div>
				<h1>widgets</h1>
				<ul>
					{widgets
						? widgets.map(w =>
								<li key={w._id}>
									{w.name}
								</li>
							)
						: <li>none</li>}
				</ul>
				<form onSubmit={this.handleForm}>
					<label htmlFor="name">Name: </label>
					<input type="text" name="name" ref="name" />{' '}
					<input type="submit" value="Add Widget" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { widgets } = state;
	return { widgets };
};

const mapDispatchToProps = dispatch => {
	return {
		widgetActions: bindActionCreators(widgetActionCreators, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

class ShoppingList extends React.Component {
	render() {
		return (
			<div className='shopping-list'>
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
		);
	}
}

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', ovalue: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		this.setState({ ovalue: this.state.value });
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.value} onChange={this.handleChange} />
				<input type='text' value={this.state.ovalue} onChange={this.handleChange} />
				<input type='submit' value='Submit' />
			</form>
		);
	}
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		return <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>;
	}
}

const element1 = <ShoppingList name='Mark' />;

const element = <Welcome name='Sara' />;

//prettier-ignore
ReactDOM.render(
	[
		element,
		element1,
		<NameForm />,
		<Toggle />
	],
	document.getElementById('root')
);

//prettier-ignore

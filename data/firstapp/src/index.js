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

const element1 = <ShoppingList name='Mark' />;

const element = <Welcome name='Sara' />;

//prettier-ignore
ReactDOM.render(
	[
		element,
		element1,
		<NameForm />
	],
	document.getElementById('root')
);

//prettier-ignore

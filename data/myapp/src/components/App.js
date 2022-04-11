import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			name: { firstName: 'Jacob', lastName: 'Rose' },
		};
	}

	render() {
		return (
			<div>
				<div>
					{this.state.name.firstName} {this.state.name.lastName}
				</div>
				<button
					onClick={() => {
						this.setState(
							(state, props) => {
								return {
									name: { firstName: 'Harry', lastName: 'Potter' },
								};
							},
							() => {
								// this function is going to run ONLY IF all state changes have been applied
								console.log(this.state);
							}
						);
					}}>
					Change{' '}
				</button>
			</div>
		);
	}
}

export default App;

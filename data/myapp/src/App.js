import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			name: { firstName: 'Jacob', lastName: 'Rose' },
		};
	}
	//prettier-ignore
	render() {
    return (
		<div>
        <div>{this.state.name.firstName} { this.state.name.lastName}</div>
        <button onClick={() => { this.setState({ name: { firstName: 'Robert', lastName: 'Kowalsky'}})} }>Change </button>
        <button onClick={() => { this.setState({ name: { firstName: 'Margaret', lastName: 'Jackson'}})} }>Change 2</button>
		</div>
	);  
	}
}

export default App;

import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			text: 'Hi!',
		};
	}
	//prettier-ignore
	render() {
    return (
		<div>
			<div>{this.state.text}</div>
			<button>Change text</button>
		</div>
	);  
	}
}

export default App;

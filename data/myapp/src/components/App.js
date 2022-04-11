import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				this.setState(
					// when update is complete react have to ReRender again
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				);
			});
	}

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;

// 1 - components
// 2 - render
// 3 - updating
// 4 - if(update) => render AGAIN (it means - reRender)

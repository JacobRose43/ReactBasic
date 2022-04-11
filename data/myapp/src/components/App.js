import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
		console.log('constructor - 1');
	}

	componentDidMount() {
		console.log('component - 3');
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
		console.log('render - 2');

		const filterMonsters = this.state.monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(this.state.searchField);
		});

		return (
			<div className='App'>
				<input
					className='searchBox'
					type='search'
					placeholder='search monsters...'
					onChange={(e) => {
						const searchField = e.target.value.toLowerCase();

						this.setState(() => {
							return { searchField };
						});
					}}
				/>
				{filterMonsters.map((monster) => {
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

import { Component } from 'react';
import CardList from './card-list/card-list.component';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			monsters: [],
			searchField: '',
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
					}
				);
			});
	}

	onSearchChange = (e) => {
		const searchField = e.target.value.toLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className='App'>
				<input
					className='searchBox'
					type='search'
					placeholder='search monsters...'
					onChange={onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;

// 1 - components
// 2 - render
// 3 - updating
// 4 - if(update) => render AGAIN (it means - reRender)

import { Component } from 'react';
import { useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// functional components

const App = () => {
	const [searchField, setSearchField] = useState(''); // [value, setValue]

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				className={'search-box'}
				onChangeHanlder={onSearchChange}
				placeholder={'search'}
			/>
			{/* <CardList monsters={filteredMonsters} /> */}
		</div>
	);
};

// PURE FUNCTION - independent, nothing affects on that function
// IMPURE FUNCTION - create some kind of effect outside of the scope

// class App extends Component {
// 	constructor(props) {
// 		super();
// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => response.json())
// 			.then((users) => {
// 				this.setState(
// 					// when update is complete react have to ReRender again
// 					() => {
// 						return { monsters: users };
// 					}
// 				);
// 			});
// 	}

// 	onSearchChange = (e) => {
// 		const searchField = e.target.value.toLowerCase();

// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monsters Rolodex</h1>
// 				<SearchBox
// 					className={'search-box'}
// 					onChangeHanlder={onSearchChange}
// 					placeholder={'search'}
// 				/>
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;

// 1 - components
// 2 - render
// 3 - updating
// 4 - if(update) => render AGAIN (it means - reRender)

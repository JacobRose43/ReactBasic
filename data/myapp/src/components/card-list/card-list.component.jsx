import { Component } from 'react';

class CardList extends Component {
	render() {
		// console.log(this.props); // pass props for one component to another

		const { monsters } = this.props;

		return (
			<div>
				{monsters.map((monster) => (
					// ROUND BRACKETS, NOT SQUARE
					<h1>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default CardList;

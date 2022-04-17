// import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.style.css';

// first function argument = props
const CardList = ({ monsters }) => {
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				return <Card monster={monster} />;
			})}
		</div>
	);
};

// class CardList extends Component {
// 	render() {
// 		// console.log(this.props); // pass props for one component to another

// 		const { monsters } = this.props;

// 		return (
// 			<div className='card-list'>
// 				{monsters.map((monster) => {
// 					return <Card monster={monster} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;

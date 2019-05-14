import React, {PureComponent} from 'react';

import BlackjackDisplay from './BlackjackDisplay'

const MIN_CARD = 2;
const MAX_CARD = 11;
const CARD_IN_DECK_COUNT = 4;
const STARTING_HAND_COUNT = 2;
const TOTAL_PLAYERS = 2;
class BlackJackContainer extends PureComponent {

	constructor(props) {
		super()


		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		this.setDefaultState()
	}

	setDefaultState() {

		let deck = [];
		let players = [];

		// Initialize Deck
		for (let i =MIN_CARD; i <= MAX_CARD; i++) {
			for (let j = 0; j < CARD_IN_DECK_COUNT; j++) {
				deck.push(i)
			}
		}

		deck = shuffle(deck);

		// Initalize Players
		for (let i =0; i < TOTAL_PLAYERS; i++) {
			players.push({
				hand: [],
				dealer: (i === (TOTAL_PLAYERS - 1)) ? true : false
			})



			// Deal Cards
			for (let j=0; j < STARTING_HAND_COUNT; j++) {
				players[i].hand.push(deck.pop())
			}
		}
		



		this.setState({
			deck: deck,
			players: players,
			loaded: true
		})
	}

	// dealCard() {
	// 	let newDeck = [...deck];

	// 	let newCard = newDeck.pop();

	// 	this.setState({
	// 		deck: newDeck;
	// 	})
	// }

	render() {

		console.log(this)
		// return (

		// 	{this.state.loaded ? 
		// 		(<BlackjackDisplay />) :
		// 		(<div>
		// 			Loading...
		// 		</div>)

		// 	})

		if (this.state.loaded) {
		return (
			<BlackjackDisplay player1={this.state.players[0]} dealer={this.state.players[TOTAL_PLAYERS - 1]}/>
			)
		} else {
			return (<div>
					Loading...
		 		</div>)
		}


	}
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

export default BlackJackContainer
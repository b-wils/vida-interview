import React, {PureComponent} from 'react';

import BlackjackDisplay from './BlackjackDisplay'

const MIN_CARD = 2;
const MAX_CARD = 11;
const CARD_IN_DECK_COUNT = 4;
const STARTING_HAND_COUNT = 2;
const TOTAL_PLAYERS = 2;
const BLACKJACK = 21;
const DEALER_HIT_MAX = 16;

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
				// TODO we could add a player name here
				hand: [],
				dealer: (i === (TOTAL_PLAYERS - 1)) ? true : false
			})



			// Deal Cards
			for (let j=0; j < STARTING_HAND_COUNT; j++) {
				players[i].hand.push(deck.pop())
			}
		}
		
		let end = ''

		for (let i = 0; i < players.length; i++) {
			let handTotal = players[i].hand.reduce((total, cur)=> (total + cur), 0)

			// TODO we can get hard 22 on deal in this implementation count as a win for now
			if (handTotal >= BLACKJACK) {
				end = `player ${i} blackjack`
				break;
			}
		}

		this.setState({
			deck: deck,
			players: players,
			loaded: true,
			currentPlayer: end ? 2 : 0,
			end: end
		})
	}

	// TODO we should abstract this better so dealer can use it
	onPlayerHit() {
		let curPlayer = this.state.players[this.state.currentPlayer]
		let newDeck = [...this.state.deck];
		let newHand = [...curPlayer.hand];
		let newPlayers = [...this.state.players];

		newHand.push(newDeck.pop())

		newPlayers[this.state.currentPlayer] = {...curPlayer, hand:newHand}

		this.setState({
			players: newPlayers,
			deck: newDeck
		}, () => {
				let handTotal = newHand.reduce((total, cur)=> (total + cur), 0)

				// Check for bust
				if (handTotal > BLACKJACK) {
					this.setState({
						end: 'You Bust',
						currentPlayer: TOTAL_PLAYERS
					})
				}
			} 
		)
	}

	onPlayerStay() {

		this.setState({
			currentPlayer: this.state.currentPlayer + 1
		}, () => {
			// Dealers turn
			let curPlayer = this.state.players[this.state.currentPlayer]
			let newDeck = [...this.state.deck];
			let newHand = [...curPlayer.hand];
			let newPlayers = [...this.state.players];

			let dealerHandTotal = newHand.reduce((total, cur)=> (total + cur), 0)

			// Deal cards to dealer while we are 16 or lower
			while (dealerHandTotal <= DEALER_HIT_MAX) {
				newHand.push(newDeck.pop())
				dealerHandTotal = newHand.reduce((total, cur)=> (total + cur), 0)
			}

			newPlayers[this.state.currentPlayer] = {...curPlayer, hand:newHand}

			let playerHandTotal = this.state.players[0].hand.reduce((total, cur)=> (total + cur), 0)

			let end = ''

			if (dealerHandTotal > BLACKJACK) {
				end = 'dealer bust'
			} else if (dealerHandTotal == playerHandTotal) {
				end = 'draw'
			} else if (dealerHandTotal >= playerHandTotal){
				end = 'dealer win'
			} else if (dealerHandTotal <= playerHandTotal){
				// This shoudl be implied true
				end = 'player win'
			}

			this.setState({
				players: newPlayers,
				deck: newDeck,
				end: end
			})
		})
	}

	render() {


		if (this.state.loaded) {
			return (
				<BlackjackDisplay player1={this.state.players[0]} 
								  dealer={this.state.players[TOTAL_PLAYERS - 1]} 
								  currentPlayer={this.state.currentPlayer}
								  onPlayerHit={this.onPlayerHit.bind(this)}
								  onPlayerStay={this.onPlayerStay.bind(this)}
								  onPlayerReset={this.setDefaultState.bind(this)}
								  end={this.state.end}
								  />
			)
		} else {
			return (
				<div>
					Loading...
		 		</div>
		 	)
		}


	}
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
let shuffle = function (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

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
import React from 'react';
import styled from 'styled-components/macro';

import PlayerDisplay from './PlayerDisplay'
import StatusDisplay from './StatusDisplay'
import ActionsDisplay from './ActionsDisplay'

const Blackjack = ({player1, dealer, currentPlayer, onPlayerHit, onPlayerStay, onPlayerReset, end}) => {
  return (
  	<BlackjackDiv>
  		<PlayerDisplay player={dealer} name='Dealer' />
  		<PlayerDisplay player={player1} name='You'/>
  		<ActionsDisplay 
				  onPlayerHit={onPlayerHit}
				  onPlayerStay={onPlayerStay}
				  onPlayerReset={onPlayerReset}
				  currentPlayer={currentPlayer}
  		/>
  		<StatusDisplay currentPlayer={currentPlayer} end={end}/>
  	</BlackjackDiv>
    );
};

const BlackjackDiv = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 300px;
	flex-direction: column;
	margin: 100px;
`

export default Blackjack;
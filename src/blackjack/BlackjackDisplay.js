import React from 'react';
import styled from 'styled-components/macro';

import PlayerDisplay from './PlayerDisplay'

const Blackjack = ({player1, dealer}) => {
  return (
  	<BlackjackDiv>
  		<PlayerDisplay player={dealer} name='Dealer' />
  		<PlayerDisplay player={player1} name='You'/>
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
import React from 'react';
import styled from 'styled-components/macro';

import CardDisplay from './CardDisplay'

const Player = ({name, player}) => {
  return (
  	<PlayerDiv>
  		<PlayerName>
  			{name}
  		</PlayerName>



  		{player.hand.map((card, index) => (
  			<CardDisplay key={index} value={card} />
  		))}

  		<ScoreDisplay>
	  		Current Score:
	  		{player.hand.reduce((total, cur) => {
	  			return total + cur;
	  		}, 0)}
		</ScoreDisplay>

  	</PlayerDiv>
    );
};

const ScoreDisplay = styled.div `
	margin: 5px;
`

const PlayerName = styled.div `
	margin: 5px;
`

const PlayerDiv = styled.div `
	display: flex;
	flex-direction: row;
`

export default Player;
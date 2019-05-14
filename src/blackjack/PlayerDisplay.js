import React from 'react';
import styled from 'styled-components/macro';

import CardDisplay from './CardDisplay'

const Player = ({name, player}) => {
  return (
  	<PlayerDiv>
  		<PlayerName>
  			{name}
  		</PlayerName>

  		{player.hand.map((card) => (
  			<CardDisplay value={card} />
  		))}
  	</PlayerDiv>
    );
};

const PlayerName = styled.div `
	margin: 5px;
`

const PlayerDiv = styled.div `
	display: flex;
	flex-direction: row;
`

export default Player;
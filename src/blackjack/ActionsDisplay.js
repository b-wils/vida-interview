import React from 'react';
import styled from 'styled-components/macro';

// TODO conditional render of actions
const Actions = ({onPlayerHit, onPlayerStay, onPlayerReset, currentPlayer}) => {
  return (
  	<ActionsDiv>
  		<ActionButton onClick={onPlayerHit} disabled={currentPlayer !== 0}> Hit </ActionButton>
  		<ActionButton onClick={onPlayerStay} disabled={currentPlayer !== 0}> Stay </ActionButton>
  		<ActionButton onClick={onPlayerReset} disabled={currentPlayer === 0}> New Game </ActionButton>
  	</ActionsDiv>
    );
};

const ActionButton = styled.button `
	margin: 5px;
`

const ActionsDiv = styled.div `
	margin: 5px;
`

export default Actions;
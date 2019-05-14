import React from 'react';
import styled from 'styled-components/macro';

const Status = ({currentPlayer}) => {
  return (
  	<StatusDiv>
  		It is player {currentPlayer}'s turn
  	</StatusDiv>
    );
};

const StatusDiv = styled.div `
	margin: 5px;
`

export default Status;
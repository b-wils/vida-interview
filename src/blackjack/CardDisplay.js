import React from 'react';
import styled from 'styled-components/macro';

const Card = ({value}) => {
  return (
  	<CardDiv>
  		{value}
  	</CardDiv>
    );
};

const CardDiv = styled.div `
	margin: 5px;
`

export default Card;
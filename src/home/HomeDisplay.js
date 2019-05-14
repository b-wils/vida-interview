import React from 'react';
import styled from 'styled-components/macro';

const Home = ({message}) => {
  return (
  	<HomeDiv>
  		{message}
  	</HomeDiv>
    );
};

const HomeDiv = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	height: 500px;
`

export default Home;
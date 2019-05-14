import React, {PureComponent} from 'react';

import HomeDisplay from './HomeDisplay'

class HomeContainer extends PureComponent {
	render() {
		return (
			<HomeDisplay message='Hello world!' />
			)
	}
}

export default HomeContainer
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import MainMenu from './MainMenu.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			abilities: ['Access to state', 'Utilize components', 'Use FontAwesome and SASS']
		}
	}

	render() {
		return (
		<div>
			<MainMenu />
			<div className="main">

			</div>
		</div>)
	}
}

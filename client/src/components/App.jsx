import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import MyComponent from './MyComponent.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			abilities: ['Access to state', 'Utilize components', 'Use FontAwesome and SASS']
		}
	}

	render() {
		return (<div className="main">
			<h1 className="main__heading">Congratulations! <FontAwesome name="star" /></h1>
			<p className="main__text">You now have a React application! You can:</p>
			<ul className="main__list">{this.state.abilities.map((ability, i) => {
				return <MyComponent key={i} ability={ability} />
			})}</ul>

			<p><em>To change the styles, go to client > dist > styles > style.sass </em></p>
		</div>)
	}
}

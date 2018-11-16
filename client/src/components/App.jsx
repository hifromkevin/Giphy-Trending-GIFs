import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import MainMenu from './MainMenu.jsx';
import Search from './Search.jsx';
import API_KEY from '../../../config/API_KEY.js';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: []
		}
	}

	componentWillMount() {
	fetch('http://api.giphy.com/v1/gifs/trending?api_key=OxyfaFK4scUWNYDQHaQDSoXC0GFWbddt&limit=5')
		.then(response => response.json())
		.then((response) => {
			console.log('res', response);
			this.setState({
				gifs: response.data
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	showMeGifs(gifs) {

	}

	render() {
		return (
		<div className="content">
			<MainMenu />
			<Search />
			<div className="main">
				{console.log('ahhhh!', this.state.gifs)}
          {this.state.gifs.map((gif, index) => {
            return <img src={gif.images.downsized_large.url} key={index} />

          })
          }
			</div>
		</div>)
	}
}

				// {this.state.gifs.map((gif, i) => {
				// 	<img src={gif.images.downsized_large.url} key={i} />
				// })}
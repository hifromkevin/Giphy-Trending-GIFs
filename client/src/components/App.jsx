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
	fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=100`)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			this.setState({
				gifs: response.data
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	render() {
		return (
		<div className="content">
			<MainMenu />
			<Search />
			<div className="main">
          {this.state.gifs.map(gif => {
            return ( <div  key={gif.id}>
            <img src={gif.images.downsized_medium.url} />
            <p>{gif.title}, {gif.rating}, {gif.title}</p>
            <img src={gif.user.avatar_url} width="30px" />
            <p>{gif.username}, {gif.import_datetime}</p>
            </div>)
          })
          }
			</div>
		</div>)
	}
}
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import MainMenu from './MainMenu.jsx';
import Search from './Search.jsx';
import Gif from './Gif.jsx';
import API_KEY from '../../../config/API_KEY.js';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rendered: false,
			gifs: []
		}
	}

	componentWillMount() {
	fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			this.setState({
				rendered: true,
				gifs: response.data
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	searchGifs(term) {
	this.setState({
		rendered: false
	});

		fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${API_KEY}&limit=10`)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			this.setState({
				rendered: true,
				gifs: response.data
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	render() {
		if (this.state.rendered) {	
			return (
			<div className="content">
				<MainMenu />
				<Search />
				<div className="main">
	          {this.state.gifs.map(gif => {
	          	return <Gif gif={gif} key={gif.id} />
	          })
	          }
				</div>
			</div>)
		} 
		return (
			<div className="content">
				<MainMenu />
				<Search />
				<div className="main">LOADING...</div>
			</div>
		)
	}
}


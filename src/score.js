import React,{Component} from 'react';
import * as mdc from 'material-components-web';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './score.css';

class Score extends Component{


	constructor(props){
		super(props);
		this.state = {
			score : [
			],
			isLoaded: false,
		}
	}



	componentDidMount(){
		fetch("https://cricapi.com/api/cricketScore?apikey=VuyDMPX3CHOT2xGg9Aqk1PyVqRm1&unique_id=1034809")
		.then(res => res.json())
		.then(json =>{
			this.setState({
				isLoaded:true,
				score:json,
			})
		})
	}


	
		render(){
				 	console.log("data of live score",this.state.score);

			return (
				<div>
					<div>{JSON.stringify(this.state.score.matchStarted)}</div>

					<div>{JSON.stringify(this.state.score["team-1"])}</div>
					
					<div>{JSON.stringify(this.state.score["team-2"])}</div>

					<div>{JSON.stringify(this.state.score.v)}</div>

					<div>{JSON.stringify(this.state.score.ttl)}</div>
				</div>
				)
		}
	

	
}


export default Score;

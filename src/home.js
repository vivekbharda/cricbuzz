import React,{Component} from 'react';
import * as mdc from 'material-components-web';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './home.css';
import  home from './home';
import score from './score';





class Home extends Component{


	constructor(props){

		super(props);
		this.state = {

			match: [],
			isLoaded: false,


		}

	}
	componentDidMount(){
		console.log("data of live score");
		fetch("https://cricapi.com/api/cricket?apikey=VuyDMPX3CHOT2xGg9Aqk1PyVqRm1")
		.then(res => res.json())
		.then(json =>{
			this.setState({
				isLoaded: true,
				match: json.data,
			})
		})
	}

	render(){


		const {isLoaded,match} = this.state;
		console.log("matches of that day",match);
		if(!isLoaded){
			return (<div>Loading.........</div>)
		}else if (match && match.length>0){
			return(
				// Header
				<div className="header" >
				<h1>Cricbuzz Web_Application</h1>
				<div className="mdc-layout-grid">
				<div className="mdc-layout-grid__inner" >
				{match.map(item=>{

					return <div className="mdc-layout-grid__cell--span-3"
					style={{opacity: 1, transform:`translate3d(0,0px,0)`}}
					ref={ref => this.cardRef = ref}
					id={item.unique_id}
					key={item.unique_id}>
					<div className="card">
					<div className='mdc-card__primary-action ripple'>
					<div className="information">
					<div className="value">{item.title}</div>
					<div className="mdc-button__label">{item.description}</div>
					</div>
					</div>
					</div>
					</div>

				})}
				</div>
				</div>
				<button>
				<Link to="/score">Live Updates</Link>
				</button>
				</div>
				)

		}else{
			return (<div>Loading.........</div>);
		
		}

	}

}
export default Home;



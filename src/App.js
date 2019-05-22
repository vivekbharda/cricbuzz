import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import FacebookLogin from 'react-facebook-login';
import login from './login'
import  home from './home';
import score from './score';



class App extends Component{
  render(){
    return(
      <Router>
      <Route path="/" component={login}/>
      <Route path="/home" component={home}/>
      <Route path="/score" component={score}/>
      </Router>
      );
  }

}
export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { browserHistory } from 'react-router';
import  home from './home';
import score from './score';
import { Container, Flex, Box, Input, Button, Subhead, Text } from 'rebass';

import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// import firebase from 'firebase';
// import fire from './firebase';
// import login from './login';









var provider = new firebase.auth.FacebookAuthProvider();
class Login extends Component {

  constructor(props){

    super(props);
    this.state = ({
      email : '',
      password: '',
      error:null,
    })
  }
  handleInputChange = (event)=>{
    this.setState({[event.target.name]: event.target.value});
  };
    handleSubmit = (event)=>{
      console.log("Method called!!!!!!!!!!!!!");
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }

  render() {
    const {email, password,error} = this.state;

    const responseFacebook = (response) => {
      console.log(response);
      this.props.history.push("/home");

    }

    const responseGoogle = (response) => {
      console.log("response of google account",response);
    }


    return (
      <div>
      <button onClick={this.handleSubmit} >Login with FB and Fire</button>

      <FacebookLogin
      appId="2379820242265005" //APP ID NOT CREATED YET
      fields="name,email,picture"
      callback={responseFacebook}
      />
      <br />
      <br />


      {
        // <GoogleLogin
        //     clientId="251915039472-da65k39nm5kgjqm1riqiujed3bj9jn7v.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        //     buttonText="LOGIN WITH GOOGLE"
        //     onSuccess={responseGoogle}
        //     onFailure={responseGoogle}
        //     />
          }
      </div>
      );
  }
}

export default Login;
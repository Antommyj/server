import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header"
import Surveys from "./Surveys"
import Landing from "./Landing";
import * as actions from '../actions/';
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
      this.props.fetchUser();
  }

  _renderContent(){
      if(this.props.auth === null){
          return;
      }else if(this.props.auth._id === undefined){
          return "You are not logged in";
      }else{
          return "You are logged in with an id of " + this.props.auth._id;
      }
  }

  render() {
    return (
      <div className="container">
          <BrowserRouter>
                <div>
                    <Header/>
                    <p>{this._renderContent()}</p>
                    <Route exact path="/" component={Landing}/>
                    <Route path = "/surveys" component={Surveys}/>
                </div>
          </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { auth : state.auth, credit: state.credit }
};

export default connect(mapStateToProps, actions)(App);


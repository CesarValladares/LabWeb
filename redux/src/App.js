import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { action1 } from './actions/action1'
import { connect } from 'react-redux'
import Datos from './components/Datos';
import Usuarios from './components/Usuarios';

const mapear = dispatch => ({
  action1: () => dispatch(action1('SALUDAR'))
})

const mapearEstado = state =>({
  ...state
})

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      users:[],
      update: true
    }
  }

  componentDidUpdate(){

    console.log("RPOPS", this.props)

    if (this.state.update){
      this.setState({
        users: this.props.reducer1.users,
        update: false
      })
    }
  }

  _setState = (state) => {
    this.setState(state);
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path ="/usuarios" render ={(...props) =>(
              <Usuarios users={this.state.users}/>
            )}/>
          <Route path ="/datos" render ={(...props) =>(
              <Datos {...this.props} setState={this._setState}/>
            )}/>  
          <Redirect from="/" to="/usuarios" />
          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default connect (mapearEstado, mapear)(App);

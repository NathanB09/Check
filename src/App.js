import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Table from './components/Table';
import Signup from './components/Signup';
import History from './components/History'

class App extends Component {
  state = {
    username: ''
  }

  login = (username, token) => {
    this.setState({ username })
    localStorage.setItem('token', token)
  }

  logout = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  render() {
    const { username } = this.state
    const { login, logout } = this
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={props => <Login {...props} login={login} />} />
          <Route path='/signup' component={props => <Signup {...props} login={login} />} />
          <Route path='/table' component={props => <Table {...props} username={username} logout={logout} />} />
          <Route path='/history' component={props => <History {...props} username={username} logout={logout} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;

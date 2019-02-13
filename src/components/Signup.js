import React from 'react';
import Title from './Title';
import './Login.css'

import API from '../API'

const initialState = {
  username: '',
  password: ''
}

class Signup extends React.Component {
  state = initialState

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) {
      alert('Username and Password fields must both be filled in.')
    } else {
      API.signup(this.state)
        .then(data => {
          if (data.error) {
            this.setState(initialState)
            alert(data.error)
          } else {
            this.props.login(this.state.username, data.token)
            this.props.history.push('/table')
            // API.getUserQueries()
            //   .then(console.log)
          }
        })
    }
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { username, password } = this.state
    return (
      <div className="login_wrapper">
        <div className='login_title'>
          <Title />
        </div>
        <div className='login_form'>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder='Username' name="username" value={username} /><br />
            <input onChange={handleChange} type="password" placeholder='Password' name="password" value={password} /><br />
            <button type='submit'>Signup</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Signup;
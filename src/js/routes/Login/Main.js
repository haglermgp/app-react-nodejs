import React, {Component} from 'react'
import axios from 'axios'

export default class Login extends Component{
  constructor(props){
    super(props)
  }

  componendDidMount() {

  }

  componentWillUnmount() {

  }

  login(email, password) {
    axios.post('http://localhost:3000/login', { email, password })
    .then(function (response) {
      debugger
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password"/>
            <div>
              <input type="submit" value="Iniciar Session"/>
            </div>
          </div>
        </form>
      </div>
    )
  }

  _handleSubmit(e) {
    e.preventDefault()
    const email = e.currentTarget.querySelector('input[name=email]').value
    const password = e.currentTarget.querySelector('input[name=password]').value
    this.login(email, password)
  }
}

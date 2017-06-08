import React, {Component} from 'react'

export default class Login extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <form className="" action="/" method="POST">
          <div className="">
            <label htmlFor="email">Email</label>
            <input id="" type="text" name="email" placeholder="Email"/>
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input id="" type="password" name="password" placeholder="Password"/>
            <div>
              <input type="submit" value="Iniciar Session"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

import React, { Component } from "react";
import { userContext } from "../../../context/userContext";

class Home extends Component {

  static contextType = userContext;

  constructor(props) {
    super(props)
      this.state = {
        user: ""
      }
  }
  login = (event) => {
    event.preventDefault();
    const user = event.target.user.value;
    this.setState({ user });
    this.context.logIn(user);
  }
  logout = (event) => {
    event.preventDefault();
    const user = "";
    this.setState({ user });
    this.context.logOut(user);

  }

  render() {
    return (
      <div>
        <h2>Login de usuario</h2>
        <form onSubmit={this.login}>
          <label htmlFor="user">Nombre de usuario:</label><br />
          <input type="text" id='user' name='user' /> <br />
          <button type="submit">LogIn</button>
        </form>
      </div>)
  }
}

export default Home;

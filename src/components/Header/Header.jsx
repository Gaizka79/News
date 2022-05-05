import React, { Component } from "react";
import Nav from './Nav';
import { userContext } from '../../context/userContext';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav/>
        <div>{
          <userContext.Consumer>{
            ({ user, logout }) => {
              return (
                user? 
                <div>
                  <p>hola { user } </p>
                  
                </div>:""
              )
            }
          }
          </userContext.Consumer>}
          
        </div>

      </header>
    )
  }
}

export default Header;
/*
<>
                    <p>Bienvenido { user }</p>  
                  </>:
                  <>
                    <p>Cuando quieras, haces logIn</p>
                  </>
                  */
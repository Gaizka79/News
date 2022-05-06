import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link><br />
        <Link to='/form'>Crear noticia</Link><br />
        <Link to='/list'>Lista de noticias</Link>
      </div>)
  }
}

export default Nav;

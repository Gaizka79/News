import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Form from './Form';
import List from './List';

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news: []
       
    }
  }

  createNew(berria) {
    this.setState({ news: [...this.state.news, berria]});
  }

  render() {
    return (
      <div>
       <h2>Fake News</h2> 
       <h3>Web de noticias</h3>
       <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Form value={(berria)=>this.createNew(berria)} />} path='/form'/>
          <Route element={<List news={this.state.news} />} path='/list'/>
       </Routes>
      
      </div>
    )}
}

export default Main;

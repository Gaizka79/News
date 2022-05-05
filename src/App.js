import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { userContext } from './context/userContext';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [ user, setUser ] = useState("");
  const [ titulo, setTitulo ] = useState("");
  const [ titular, setTitular ] = useState("");
  const [ descripcion, setDescripcion ] = useState("");

  const getNews = (titulo, titular, descripcion) => {
    setTitulo(titulo);
    setTitular(titular);
    setDescripcion(descripcion);
  }

  //login
  const logIn = (name) => {
    setUser(name);
  }

  //logout
  const logOut = () => {
    setUser('');
  }

  const data = {
    user,
    titulo,
    getNews,
    logIn,
    logOut
  }
  
    return (
      <div className="App">
      <BrowserRouter>
      <userContext.Provider value={ data }>
        <Header/>
        <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>        
    </div>
    );
  
}

export default App;

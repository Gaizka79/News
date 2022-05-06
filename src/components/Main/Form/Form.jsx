import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { userContext } from "../../../context/userContext";
import List from "../List";


class Form extends Component {

  static contextType = userContext;

  constructor(props) {
    super(props)
  
    this.state = {
       news: [],
       newNew: ""
    }
  }
addNew = (event) => {
  event.preventDefault();

  const abstract = event.target.titulo.value;
  const lead_paragraph = event.target.titular.value;
  const newNoticia = event.target.noticia.value;

  const newNew = { abstract, lead_paragraph, newNoticia };
  //this.setState.newNew = [this.state.new, ...newNew];
  this.props.value(newNew);
  this.setState({ news: [...this.state.news, newNew]});
  
  this.context.getNews(abstract, lead_paragraph, newNoticia);
};


  render() {
    return (
      <div>
        <h3>Dar de alta una fake new</h3>
        <form onSubmit={this.addNew}>
          <label htmlFor="titulo">Título de la noticia:</label><br />
          <input type="text" id="titulo" name="titulo" /><br />

          <label htmlFor="titular">Titular:</label><br />
          <input type="text" id="titular" name="titular" /><br />

          <label htmlFor="noticia">Noticia:</label><br />
          <input type="text" id="noticia" name="noticia" /><br />

          <button type="submit">Guardar noticia</button>
          


        </form>
      </div>
    )
  }
}

export default Form;

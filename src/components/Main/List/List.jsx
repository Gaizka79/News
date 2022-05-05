require ('dotenv').config();
import React, { Component } from "react";
import axios from 'axios';
import Card from './Card';

class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  componentDidMount = async () => {
    try{
      const temp = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${process.env.REACT_APP_API_NYT}`);
      const newsData = await temp.data.response.docs.slice(0,5);

      console.log("Dentro " + this.state.news.length);
      
      this.setState({ news: [...this.state.news, ...newsData]});
      console.log(newsData);
    }
    catch (err) {
      throw err;
    }
  }

  render() {
    let temp = this.state.news;
    console.log("nuevoooooooo");
    console.log(temp);
    return (
      <div>
      <h3>Listado de noticias</h3>
      {temp.map((berria, i) => <Card value={berria} key={i} />)}
      
        

        
      </div>)
  }
}

export default List;
//<Card value={this.state.news.map()}/>
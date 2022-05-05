import React, { Component } from "react";

class Card extends Component {
  
  
  

  render() {
    const berriak = this.props.value;
    console.log("berrriak");
    console.log(berriak);
    return (
      <div>
        <h3>{berriak.abstract}</h3>
        <p>{berriak.lead_paragraph}</p>
        
      </div>
    )
  }
}

export default Card;

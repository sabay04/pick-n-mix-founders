import React, { Component } from "react";
import Card from "./cards";

class CardCollection extends Component {
  renderCard = () => {
    return this.props.ideas.map(idea => (
      <Card idea={idea} handleClick={this.props.selectedCard} />
    ));
  };
  x;
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">{this.renderCard()}</div>
      </div>
    );
  }
}

export default CardCollection;

import React, { Component } from "react";
import Card from "./cards";

class YourPick extends Component {
  renderCard = () => {
    return this.props.yourPick.map(idea => (
      <Card
        idea={idea}
        handleClick={this.props.removeCard}
        yourPick={this.props.yourPick}
      />
    ));
  };
  render() {
    return (
      <div className="ui segment inverted olive your-pick">
        <h1>Business Idea </h1>
        <div className="ui five column grid">
          <div className="row your-pick-row">{this.renderCard()}</div>
        </div>
      </div>
    );
  }
}

export default YourPick;

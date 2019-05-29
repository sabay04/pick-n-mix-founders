import React, { Component } from "react";

class Card extends Component {
  state = {
    back: true
  };

  handleTap = () => {
    this.props.handleClick(this.props.idea);
  };

  render() {
    return (
      <div className="ui column">
        <div className="ui card" onClick={this.handleTap}>
          {this.props.yourPick ? <div>{this.props.idea}</div> : <h1> ? </h1>}
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import CardCollection from "./cardCollection";
import YourPick from "./yourPick";

const EndPoint = "http://concepting.foundersfactory.com/demo/idea-generator/";

class CardPage extends Component {
  state = {
    industries: [
      "Travel",
      "Banking",
      "Business Supplies and Equipment",
      "Chemicals",
      "Commercial Real Estate",
      "Computer Games",
      "Consumer Electronics",
      "Dairy",
      "Defense & Space",
      "Design",
      "Farming",
      "Higher Education",
      "Investment Banking",
      "Legal Services",
      "Market Research",
      "Media Production",
      "Mining & Metals",
      "Newspapers",
      "Pharmaceuticals",
      "Research",
      "Retail",
      "Think Tanks",
      "Utilities",
      "Writing and Editing"
    ],
    triggers: [
      "Bring an offline behaviour online",
      "Make it a rental",
      "Make it cheaper",
      "Create a marketplace",
      "Create original or exclusive content",
      "Simplify a process",
      "Make it a service / on demand",
      "Make it mobile native",
      "Remove features to launch a simpler product",
      "Target specific segment",
      "Create a full stack offering",
      "Build a community",
      "Make it peer-to-peer",
      "Target an emerging market",
      "Make an intermediary layer",
      "Remove a middleman",
      "Apply blockchain",
      "Democratise something expensive",
      "Look at startups in other markets"
    ],
    businessModels: [
      "Early exit strategy",
      "Pay-what-you-want",
      "Freemium model",
      "Commission-based model",
      "Auction model",
      "Advertisement model",
      "Affiliate fee",
      "Get-one-give-one model",
      "Franchise model",
      "Subscription model",
      "Pay-per-use model",
      "License fees",
      "Single purchase model",
      "Pay-as-you-go model",
      "Razor and blade model",
      "Crowdfunding",
      "Open source model",
      "No frills model"
    ],
    selectedCard: undefined,
    yourPick: []
  };

  setSelectedCard = card => {
    // console.log("Seleted", bot.id);
    this.setState({
      selectedCard: card
    });
    this.addCardtoPick(card);
  };

  removeCardFromPick = card => {
    if (this.state.yourPick.includes(card)) {
      this.setState({
        yourPick: this.state.yourPick.filter(c => c !== card)
      });
    }
  };

  addCardtoPick = card => {
    if (this.state.yourPick.includes(card)) return;
    if (this.state.yourPick.length >= 3) {
      alert("you can only add 3 cards");
      return;
    }

    this.setState({
      yourPick: [...this.state.yourPick, card]
    });
  };

  render() {
    return (
      <div>
        <YourPick
          yourPick={this.state.yourPick}
          removeCard={this.removeCardFromPick}
        />
        <h1>Industries </h1>
        <CardCollection
          ideas={this.state.industries}
          selectedCard={this.setSelectedCard}
        />
        <h1>Triggers </h1>
        <CardCollection
          ideas={this.state.triggers}
          selectedCard={this.setSelectedCard}
        />
        <h1>Business Models</h1>
        <CardCollection
          ideas={this.state.businessModels}
          selectedCard={this.setSelectedCard}
        />
      </div>
    );
  }
}

export default CardPage;

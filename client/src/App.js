import React, { Component } from "react";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

import "bulma/css/bulma.css";

const getAllBikes = () =>
  fetch("/api/bike/")
    .then(res => res.json())
    // console.log(res)
    .catch(error => console.log(error));

const getOrder = () =>
  fetch("/api/order/")
    .then(res => res.json())
    // console.log(res)
    .catch(error => console.log(error));

const addBikeToOrder = bike => {
  console.log("Added Bike");

  console.log(bike);
  fetch("/api/order/", {
    method: "POST",
    body: JSON.stringify(bike),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .catch(error => console.log(error));
};

export default class App extends Component {
  state = {
    bikes: [{}],
    order: {
      email: String,
      cart: []
    }
  };

  componentDidMount() {
    this.getBikesFromServer();
    //this.getOrderFromServer();
  }

  getBikesFromServer() {
    getAllBikes().then(allBikes => {
      console.log(allBikes);
      this.setState({ bikes: allBikes });
    });
  }

  getOrderFromServer() {
    getOrder().then(orderInfo => {
      console.log(orderInfo);
      this.setState({ order: orderInfo });
    });
  }

  render() {
    return (
      <div>
        <Header bikes={this.state.bikes} cart={this.state.order.cart} />
        <Main bikes={this.state.bikes} cart={this.state.order.cart}  />
        <Footer />
      </div>
    );
  }
}

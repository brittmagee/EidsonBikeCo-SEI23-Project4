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

// const removeBike = (cartItem, i) =>{
//   console.log(cartItem)
//   props.cart.splice(cartItem, i)
// }

// const addBikeToOrder = (bike) => {
//   console.log("Added Bike");

//   console.log(bike);
//   fetch("/api/order/", {
//     method: "POST",
//     body: JSON.stringify(bike),
//     headers: { "Content-Type": "application/json" }
//   })
//     .then(res => res.json())
//     .catch(error => console.log(error));
// };

export default class App extends Component {
  state = {
    bikes: [{}],
    order: {
      email: "",
      cart: [],
      // id:"4"
    },
  };

  componentDidMount() {
    this.getBikesFromServer();
    //this.getOrderFromServer();
  }

  getBikesFromServer() {
    getAllBikes().then(allBikes => {
      // console.log(allBikes);
      this.setState({ bikes: allBikes });
    });
  }

  getOrderFromServer() {
    getOrder().then(orderInfo => {
      // console.log(orderInfo);
      this.setState({ order: orderInfo });
    });
  }

  updateEmail =(newEmail) => {
    // console.log(this.state.bikes)
    console.log(newEmail)
    let newOrder = {...this.state.order};
    newOrder.email = newEmail
    // let order = {...this.state.order.email};
    // order = newEmail
    console.log(newOrder)
    this.setState({order: newOrder});
  }

  // addBikeToOrder = (evnt) => {
  //   console.log("Added Bike");
  //   // evnt.preventDefault();

  //   //let newOrder ={...this.state.order}
  //   this.state.order.cart.forEach(bike => {
  //     fetch("/api/orderitem/", {
  //       method: "POST",
  //       body: JSON.stringify({bike: bike.id, order: this.state.order.id}),
  //       headers: { "Content-Type": "application/json" }
  //     })
  //     .then(res => res.json())
  //     .catch(error => console.log(error));
  //     // console.log(newOrder);
  //   })
  // };

  addBikeToOrder = (evnt) => {
    console.log("Added Bike");
    // evnt.preventDefault();
    let newOrder ={...this.state.order}

    console.log(newOrder);
    fetch("/api/order/", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .catch(error => console.log(error));
  };


  render() {
    console.log(this.state);
    return (
      <div>
        <Header 
          bikes={this.state.bikes} 
          cart={this.state.order.cart} 
          email={this.state.order.email}
          addBikeToOrder={this.addBikeToOrder}
          updateEmail={this.updateEmail}
          // cartItem={this.state.cartItem}
        />
        <Main bikes={this.state.bikes} cart={this.state.order.cart}  />
        <Footer />
      </div>
    );
  }
}

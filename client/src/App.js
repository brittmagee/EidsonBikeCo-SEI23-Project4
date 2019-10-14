import React, { Component } from "react";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

import "bulma/css/bulma.css";

// AJAX request to get all bikes from database
const getAllBikes = () =>
  fetch("/api/bike/")
    .then(res => res.json())
    // console.log(res)
    .catch(error => console.log(error));

//AJAX request to get all orders from database
const getOrder = () =>
  fetch("/api/order/")
    .then(res => res.json())
    // console.log(res)
    .catch(error => console.log(error));


export default class App extends Component {
  state = {
    cartItems: 0, //the counter that is visible in teh nav bar shopping cart
    bikes: [{}],
    order: {
      email: "",
      cart: [], //an array of objects that will contain the bike ids
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

  //adds the user email to the bike order
  updateEmail =(newEmail) => {
    // console.log(newEmail)
    let newOrder = {...this.state.order};
    newOrder.email = newEmail
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

  //POST request to add email and bike ids to the "Order" database
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

  //function that activates when user clicks "Add to Cart". Note: Also increments the shopping cart counter
  addBikeToCart = (newBike) => {
    let cartItems = this.state.cartItems+ 1
    let updatedOrder ={...this.state.order}
    updatedOrder.cart = [...this.state.order.cart, newBike]
    console.log(updatedOrder)
    this.setState({order: updatedOrder, cartItems})
  }

  //function that activates when the user deletes an item from the shopping cart. Note: Also decrements the shopping cart counter
  removeBikeFromCart = (cartItem, i) =>{
    // console.log(cartItem)
    let cartItems = this.state.cartItems - 1
    let newOrder ={...this.state.order}
    newOrder.cart.splice(i,1)
    this.setState({order: newOrder, cartItems})
    console.log(newOrder)
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Header 
            bikes={this.state.bikes} 
            cartItems = {this.state.cartItems}
            cart={this.state.order.cart} 
            email={this.state.order.email}
            addBikeToOrder={this.addBikeToOrder}
            updateEmail={this.updateEmail}
            removeBikeFromCart={this.removeBikeFromCart}
        />
        <Main 
            bikes={this.state.bikes} 
            cart={this.state.order.cart}
            addBikeToCart={this.addBikeToCart}  
        />
        <Footer />
      </div>
    );
  }
}

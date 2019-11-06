import React, { Component } from 'react'
import Cart from "./Cart.js"

import 'bulma/css/bulma.css'

//header nav bar design from Bulma
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const minNav = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if (minNav.length > 0) {
  
      // Add a click event on each of them
      minNav.forEach( i => {
        i.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = i.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          i.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});

export default class Header extends Component {
    render() {
        // console.log('this.props', this.props)
        return (
            <div>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <picture>
                                <source srcset="https://static.wixstatic.com/media/05d438_1307244c3c7544269ba38bc8af757173~mv2.jpg/v1/fill/w_360,h_94,al_c,q_80,usm_0.66_1.00_0.01/Logo_C-Justified.webp" type="image/webp"/>
                                <source srcset="https://static.wixstatic.com/media/05d438_1307244c3c7544269ba38bc8af757173~mv2.jpg/v1/fill/w_468,h_124,al_c,q_80,usm_0.66_1.00_0.01/Logo_C-Justified.jpg" type="image/jpeg"/>
                                <img src="https://static.wixstatic.com/media/05d438_1307244c3c7544269ba38bc8af757173~mv2.jpg/v1/fill/w_468,h_124,al_c,q_80,usm_0.66_1.00_0.01/Logo_C-Justified.jpg"/>
                            </picture>
                            {/* <img src="https://static.wixstatic.com/media/05d438_1307244c3c7544269ba38bc8af757173~mv2.jpg/v1/fill/w_360,h_94,al_c,q_80,usm_0.66_1.00_0.01/Logo_C-Justified.webp"/> */}
                        </a>
                        {/* Activates for mobile/small screen viewing */}
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start" margin="0 auto">
                            <a class="navbar-item" href="https://www.edisonbicycles.com/about-2" target="_blank">About</a>
                            <a class="navbar-item" href="https://www.edisonbicycles.com/why-edison" target="_blank">Why Edison</a>
                            <a class="navbar-item" href='https://www.edisonbicycles.com/blog-1'target="_blank">Blog</a>
                            <a class="navbar-item" href='https://www.edisonbicycles.com/contact' target="_blank">Contact</a>
                            <a class="navbar-item" href='https://www.edisonbicycles.com/faq' target="_blank">FAQs</a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">Shop</a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item" >The Pair</a>
                                <a class="navbar-item" >The Black</a>
                                <a class="navbar-item" >The White</a>
                            <hr class="navbar-divider" />
                                <a class="navbar-item"  name='testimonials'>Testimonials</a>
                            </div>
                        </div>
                        </div>
                        <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign In</strong>
                            </a>
                            <a class="button is-light">
                                Cart 
                                <Cart 
                                    cart={this.props.cart} 
                                    email={this.props.email}
                                    bikes={this.props.bikes}
                                    cartItems = {this.props.cartItems}
                                    addBikeToOrder={this.props.addBikeToOrder}
                                    updateEmail={this.props.updateEmail}
                                    removeBikeFromCart={this.props.removeBikeFromCart}
                                />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
                <hr class="navbar-divider" />
            </div>
        )
    }
}

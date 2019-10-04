import React, { Component } from 'react'

import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'

import 'bulma/css/bulma.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


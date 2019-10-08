import React, { Component } from 'react'

import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'

import 'bulma/css/bulma.css'

const getAllBikes = () =>
    fetch('/api/bike/')
        .then(res => res.json())
        // console.log(res)
        .catch(error => console.log(error))

export default class App extends Component {
  state = {
    bikes: [{}]
}

componentDidMount() {
  this.getBooksFromServer()
}

getBooksFromServer() {
  getAllBikes()
      .then(allBikes => {
          console.log(allBikes)
          this.setState( { bikes: allBikes } )
      })
}

  render() {
    return (
      <div>
        <Header bikes={this.state.bikes}/>
        <Main bikes={this.state.bikes}/>
        <Footer />
      </div>
    )
  }
}


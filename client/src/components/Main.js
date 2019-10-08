import React, { Component } from 'react'
import 'bulma/css/bulma.css'

import Title from './Title.js'
import Benefits from './Benefits.js'
import ParallaxDiv from './Parallax.js'
import Bikes from './Bikes.js'
import Testimonials from './Testimonials.js'


export default class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <Benefits />
                <ParallaxDiv />
                    <hr class="navbar-divider" />
                <Bikes bikes={this.props.bikes}/>
                    <hr class="navbar-divider" />
                <Testimonials />
            </div>
        )
    }
}

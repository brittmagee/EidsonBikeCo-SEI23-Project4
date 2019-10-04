import React, { Component } from 'react'
import BikeCard from './BikeCard.js'

const styling = {
    image: {
        margin: "10px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }
}

export default class Bikes extends Component {
    render() {
        return (
            <div style={styling.image}>
                <BikeCard />
                <BikeCard />
                <BikeCard />
            </div>
        )
    }
}

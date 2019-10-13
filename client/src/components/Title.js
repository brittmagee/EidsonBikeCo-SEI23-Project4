import React, { Component } from 'react'
import 'bulma/css/bulma.css'

const styling = {
    image: {
        backgroundImage: "url(https://s3.amazonaws.com/cloud.scoutmob.com/hp/products/11110/product/Edison_Shoot_213-0095.jpg?1518453189)",
        backgroundSize: "100vw",
        display: "block",
        maxWidth: "100%",
        height: "auto",
        opacity: "0.8",
    },
    text: {
        width: "400px",
        color: "white"
    },

}

export default class Title extends Component {
    render() {
        return (
            <div>
                <div class="container is-fullhd" >
                    <div class="notification" style={styling.image}>
                    <section class="section is-bold is-medium"  style={styling.container}>
                        <div class="container">
                            <h1 class="title has-text-primary">Smart.</h1>
                            <h3 class="subtitle is-size-6" style={styling.text}>
                            Designed to eliminate the relentless challenges of traffic and the overwhelming cost of commuting Edison is the world’s most innovative automotive substitute. You’ll have the freedom to go farther and the power to get there faster.
                            </h3>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        )
    }
}

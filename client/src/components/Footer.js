import React, { Component } from 'react'
import ReactDOM from 'react-dom';


import 'bulma/css/bulma.css'

const styling = {
    background:{
        backgroundColor: "hsl(0, 0%, 21%)",
        color: "white",
        height: "380px",
        marginTop: "10px",
        padding: "20px 10px"
    },
    map: {
        height: "250px"
    },
    text:{
        color: "#00D1B2",
    },
    image: {
        height: "180px",
        borderRadius: "15px 50px",
        padding: "10px 0px"
    },
    links:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "70px 20px",
        fontSize: "13pt",
    },
    signature:{
        padding: "20px 0px",
        color: "#00D1B2",
    },
    hover:{
        ':hover': {
            color: "#00D1B2"
        }
    }
}

  

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer" style={styling.background}>
                <div class="columns">
                    <div class="column is-two-fifths">
                        <div class="content has-text-centered" >
                            <a href="https://www.edisonbicycles.com/contact" target="_blank">
                                <h3 style={styling.text}><strong>Come Ride One!</strong></h3>
                            </a>
                            <p>(By Appointment Only)</p>
                            <div class="box" style={styling.map}></div>
                        </div>
                    </div>
                    <div class="column has-text-centered" >
                        <img style={styling.image} src="https://pbs.twimg.com/profile_images/865212850666520576/MNuqD_XS_400x400.jpg"></img>
                        <div style={styling.text}>
                            <p class="is-size-5">1619 Hosea L. Williams Dr.</p>
                            <p class="is-size-5">Atlanta, GA 30317</p>
                            <p>Telephone: 470-588-1619</p>
                            <p>Email: hello@edisonbicycles.com</p>
                        </div>
                    </div>
                    <div class="column has-text-centered">
                        <div class="columns">
                            <div class="column has-text-grey-light" style={styling.links}>
                                <p style={styling.hover}>Shop</p>
                                <p>Blog</p>
                                <p>About Us</p>
                                <p>FAQ</p>
                            </div>
                            <div class="column has-text-grey-light" style={styling.links}>
                                <p>Shipping + Returns</p>
                                <p>Store Policy</p>
                                <p>Payment Methods</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <p>

                        </p>
                        <p style={styling.signature} class="has-text-grey-light">
                            General Assmebly | SEI23 Final Project by: <br></br><a href="https://github.com/brittmagee" target="_blank">Brittani Magee</a>
                        </p>
                    </div>
                </div>
                </footer>
            </div>
        )
    }
}

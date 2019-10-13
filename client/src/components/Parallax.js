import React, { Component } from 'react'
import 'bulma/css/bulma.css'

const styling = {
    background: "#00d1b2",
    padding: 20,
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "#fff",
    textAlign: 'center',
    width: "300px",
    borderRadius: '20px'
};

const parallax = {
    backgroundImage: 'url("https://static.wixstatic.com/media/05d438_99fc428202244057b8df61dd679f23f9~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_2500,h_1666,al_c/05d438_99fc428202244057b8df61dd679f23f9~mv2_d_6720_4480_s_4_2.jpg")',
    height: '400px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export default class ParallaxDiv extends Component {
    render() {
        return (
            <div style={parallax}>
                <div class="has-text-white" style={styling}>Edison: We fly like the Jetsons</div>
            </div>
        )
    }
}


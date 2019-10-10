import React, { Component } from 'react'

import 'bulma/css/bulma.css'

const styling = {
    email: {
        marginTop: "40px",
        textAlign: "center",
        fontSize: "13pt"}
}

export default class Email extends Component {
    state = {
        newEmail: String
    }
    
    componentDidMount() {
        this.setState({newEmail: this.props.email})
    }

    handleChange = async (evnt) => {
        // evnt.preventDefault();
        // this.props.updateEmail(evnt.target.value)
   

        let newEmail = {}
        newEmail[evnt.target.name] = evnt.target.value;
        console.log(this.props)
        await this.setState(newEmail)
        await this.props.updateEmail(this.state.newEmail)
      }


    render() {
        return (
            <div>
                <h3 class="subtitle is-5 has-text-centered" style={styling.email} >Please enter your email to complete order:</h3>
                <form onSubmit={this.props.addBikeToOrder}>
                    <div class="control has-icons-left has-icons-right">
                        <input 
                            onChange={this.handleChange}
                            // value = {this.props.email} 
                            value = {this.state.newEmail} 
                            name ="newEmail"
                            class="input is-info" 
                            type="email" 
                            placeholder="Email..."
                            required
                            />
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right" >
                        <i class="fas fa-check"></i>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}

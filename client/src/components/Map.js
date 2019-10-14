import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react'

import 'bulma/css/bulma.css'

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const styling = {
    width: '100%',
    height: '100%',
    borderRadius: '30px'
  };

const box ={
    backgroundColor: 'hsl(0, 0%, 21%)'
}

class MapImage extends Component {
    render() {
      
        return (
            <div  className="ui placeholder segment" style={box}>
                <Map
                google={this.props.google}
                zoom={15}
                style={styling}
                initialCenter={{ lat: 33.753330, lng: -84.334310}} >
                    <Marker position={{ lat: 33.753330, lng: -84.334310}} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapImage);
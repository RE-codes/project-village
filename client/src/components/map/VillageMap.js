import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'reactstrap';

const MapMarker = () => (
  <div>{<i className="fas fa-map-marker-alt text-danger fa-3x" />}</div>
);

class SidebarMap extends Component {
  state = {
    myCoords: {
      lat: null,
      lng: null
    }
  };

  componentDidMount = () => {
    const success = position => {
      console.log('success returns: ', position);
      this.setState({
        myCoords: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    };
    const err = err => console.error(err);

    navigator.geolocation.getCurrentPosition(success, err);
  };

  // static defaultProps = {
  //   center: {
  //     lat: 35.993953,
  //     lng: -78.898797
  //   },
  //   zoom: 15
  // };

  render() {
    return (
      <Container
        style={{ height: '67vh', marginTop: '2rem', marginBottom: '2rem' }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          center={this.state.myCoords}
          defaultZoom={14}
        >
          <MapMarker
            lat={this.state.myCoords.lat}
            lng={this.state.myCoords.lng}
          />
        </GoogleMapReact>
      </Container>
    );
  }
}

export default SidebarMap;

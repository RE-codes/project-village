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

  componentDidMount = async () => {
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

    await navigator.geolocation.getCurrentPosition(success, err);
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
      <Container style={{ height: '67vh', marginTop: '75px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCUrK2NlmY72Y620bmfkGvJzra1wIN32uw' }}
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

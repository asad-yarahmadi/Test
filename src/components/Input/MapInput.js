import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

class MapInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinates: []
    };

    this.defaultCenter = [-73.448, 45.320];
    this.onMapClick = this.onMapClick.bind(this);

  }

  onMapClick(map, e) {
    const {onChange, name} = this.props
    const {coordinates} = this.state
    const newCoor=[e.lngLat.lng,e.lngLat.lat]
    this.setState({coordinates:newCoor})
    onChange(name, coordinates);
  }

  render() {
    const {coordinates} = this.state
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '20rem',
          width: '50vw',
          margin: 'auto',
          marginBottom:'20px',
        }}
        onClick={this.onMapClick}
        center={coordinates.length > 0 ? coordinates : this.defaultCenter}
      >
        <Layer type="circle" id="marker">
          {coordinates.length > 0 && <Feature coordinates={coordinates} />}
        </Layer>
      </Map>
    );

  }

}

export default MapInput;
import React from 'react';
import { InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker,} from "react-google-maps";
import Geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';

Geocode.setApiKey("AIzaSyD9QcjseP1_Lt3dfkAyxxCk50FTDsai0tM");

class index extends React.Component {

    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 14,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }



    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
              <Marker
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
                position={{ lat: -34.397, lng: 150.644 }}
              />
            </GoogleMap>
          ));

        return (
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9QcjseP1_Lt3dfkAyxxCk50FTDsai0tM&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default index;


import React from 'react';
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"

const chooseLocation = (action) => {
    return function (params) {
        action({
            lat: params.latLng.lat(),
            lng: params.latLng.lng(),
        });
    }
};

const LocationMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div className="map"/>,
        containerElement: <div className="map"/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) => <GoogleMap
        defaultZoom={5}
        defaultCenter={props.location}
        onClick={chooseLocation(props.chooseLocation)}
    >
        <Marker position={props.location}/>
    </GoogleMap>
);

export default LocationMap;
import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Home = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyA2EfH2OSQLNs5ph7DeyfdokWJfkMyLPY4'
    });

  if ( !isLoaded ) return <div>LOADING...</div>

  return (
    <Map />
  )
}

function Map() {
    return (
        <GoogleMap
            zoom={50}
            center={{lat: 44, lng: 77}}
            mapContainerClassName="map-container"
        >
            <Marker 
                position={{ lat: 10, lng: 10 }}
            />
        </GoogleMap>
    )
}

export default Home
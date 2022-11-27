import React, {useEffect, useState} from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const Home = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyA2EfH2OSQLNs5ph7DeyfdokWJfkMyLPY4'
    });

  if ( !isLoaded ) return <div>LOADING...</div>

  return (
    <Map />
  )
}

// const lat = 45.7663994;
// const lng = 21.1814022;


function Map() {
    const [ lat, setLat ] = useState(45.7663994);
    const [ lng, setLng ] = useState(21.1814022);
    return (
        <GoogleMap
            zoom={10}
            center={{lat: lat, lng: lng}}
            mapContainerClassName="map-container"
        >
            <MarkerF

                position={{ lat: lat, lng: lng }}
            />
            <MarkerF
onClick={ () => console.log('adsack')}
                position={{ lat: lat, lng: lng }}
            />

            <h1>asda</h1>
        </GoogleMap>
    )
}

export default Home
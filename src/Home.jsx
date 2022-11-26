import React, {useEffect, useState} from 'react'
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

const lat = 45.7663994;
const lng = 21.1814022;

function Map() {
    const [ position, setPosition ] = useState({
        lat: null, 
        long: null
    });

    useEffect( () => {
        const resp = getLocation();

        setPosition(...resp, {
            lat: resp.coords.latitude,
            long: resp.coords.longitude
        })
        

        console.log(position);
    }, []);


    const successCallback = (position) => {
        console.log(position);
      };
      
      const errorCallback = (error) => {
        console.log(error);
      };
      
      function getLocation() {
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
          console.log('trruu')
      }

      getLocation();

    return (
        <GoogleMap
            zoom={30}
            center={{lat: lat, lng: lng}}
            mapContainerClassName="map-container"
                onClick={ () => getLocation}
        >
            <Marker

                position={{ lat: lat, lng: lng }}
            />
            <Marker
onClick={ () => console.log('adsack')}
                position={{ lat: lat + 0.02, lng: lng + 0.02 }}
            />
        </GoogleMap>
    )
}

export default Home
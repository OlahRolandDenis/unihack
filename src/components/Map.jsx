import { useCallback, useEffect, useState } from 'react';
import { GoogleMap, MarkerF, Marker } from '@react-google-maps/api';
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { SuperClusterAlgorithm } from '@googlemaps/markerclusterer';


import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from '../firebase.config';
import NavBar from './NavBar';

const Map = () => {
    const [ lat, setLat ] = useState(45.76459166484408);
    const [ lng, setLng ] = useState(21.177691381243957);
    const [ pings, setPings ] = useState([]);

    useEffect( () => {
        getLocation();
        getPings()
    }, []);

    const getLocation = async () => {
        if ( !navigator.geolocation )
            return false;
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            },

            () => console.log('unable to detect location')
        )
    }

    const ping = async () => {
        try {
            const docRef = await addDoc(collection(db, "trash"), {
              title: "trash",
              cleaned: false,
              location: {
                latitude: lat,
                longitude: lng
              }
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }    
    }

    const getPings = async () => {
        const querySnapshot = await getDocs(collection(db, "trash"));
        querySnapshot.forEach((doc) => {
          setPings( pings => [...pings], doc.data() )
          console.log(doc.data());
        });

        setPings(pings);
    }

    return (
        <GoogleMap
            zoom={12}
            center={{lat: lat, lng: lng}}
            mapContainerClassName="map-container"
        >

            <NavBar />

            <MarkerF
                position={{lat: lat, lng: lng}}
            >
            </MarkerF>

            <div className='ping_btn'
                onClick={ping}
            >
                <button>Ping Here</button>
            </div>

        </GoogleMap>
    )
}

export default Map
import { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, Marker } from '@react-google-maps/api';

import { collection, addDoc, getDocs, deleteDoc  } from "firebase/firestore"; 
import { db } from '../firebase.config';
import NavBar from './NavBar';

const Map = () => {
    const [ lat, setLat ] = useState(45.76459166484408 + 0.2);
    const [ lng, setLng ] = useState(21.177691381243957 + 0.2);
    const [ pings, setPings ] = useState([]);
    // const pings = [];

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
    const localPings = []

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

            localPings.push(docRef);
            console.log(pings);
          } catch (e) {
            console.error("Error adding document: ", e);
          }    
    }

    const getPings = async () => {
        const querySnapshot = await getDocs(collection(db, "trash"));
        querySnapshot.forEach((doc) => {
          localPings.push(doc.data());
        });

        setPings(localPings);
        console.log(localPings);
    }

    return (
        <GoogleMap
            zoom={12}
            center={{lat: lat, lng: lng}}
            mapContainerClassName="map-container"
        >

            <NavBar />

            { pings.map( ping => (
                <MarkerF
                    key={Math.random()}
                    position={{lat: ping.location.latitude, lng: ping.location.longitude}}
                >
                </MarkerF>
            ))}

            <div className='ping_btn'
                onClick={ping}
            >
                <button>Ping Here</button>
            </div>

        </GoogleMap>
    )
}

export default Map
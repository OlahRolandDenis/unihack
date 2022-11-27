import React, {useEffect, useState} from 'react'
import Map from './Map';
import { useLoadScript } from '@react-google-maps/api';

const Home = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyA2EfH2OSQLNs5ph7DeyfdokWJfkMyLPY4'
    });

  if ( !isLoaded ) return <div>LOADING...</div>

  return (
    <>
        <Map />
    </>

  )
}

export default Home
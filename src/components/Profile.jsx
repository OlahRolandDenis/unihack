import React, {useEffect, useState} from 'react'
import profile from "../image/a.png";
import { Link } from 'react-router-dom';

function Profile(){
    return(
        <div className="profile">
            <Link to="/home">
              <button> Back </button>
            </Link>
            <div className='smt'>
            <div className='imgs'>
                        <div className='container-img'>
                          <img src={profile} alt="profile" className="profile" />

                        </div>

            </div>
            <div className='text'>
                <h2>EMAIL</h2>
                <h2>POINTS: 5</h2>
            </div>

            </div>
           
        </div>

    );
}
export default Profile;
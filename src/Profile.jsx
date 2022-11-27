import React, {useEffect, useState} from 'react'
import profile from "./image/a.png";
function Profile(){
    return(
        <div className="profile">
            <button> Back </button>
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
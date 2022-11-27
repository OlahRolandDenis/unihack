import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import profile from "../image/a.png";
import email from "../image/email.jpg";
import pass from "../image/pass.png";

function SignUp(){
    return(

        <div className='signup'>
            <div className='sub-main'>
                <div>
                    <div className='imgs'>
                        <div className='container-image'>
                          <img src={profile} alt="profile" className="profile" />

                        </div>

                    </div>
                </div>
                <div>
                    <h1>Login Page</h1>
                    <div>
                        <img src={email} alt="email" className="email"/>
                        <input type="text"  placeholder="email" className="name"/>
                    </div>
                    <div className="second-input">
                        <img src={pass} alt="pass" className="pass"/>
                        <input type="password"  placeholder="password" className="name"/>
                    </div>
                    <div className="login-button">
                    <Link to="/home">Login</Link>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default SignUp;
import React from 'react';
import auth from '../../../firebase.init';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';


import google from "../../../images/google.png"
import { useLocation, useNavigate } from 'react-router-dom';


const Socailmedia = () => {
    const location = useLocation();
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, GoogleError] = useSignInWithGoogle(auth);
    
    if(googleUser){
        navigate(from,{replace:true})
       
    }
    return (
        <div>
            <div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '1px' }} className="bg-primary w-25"></div>
                    <p className='mt-3 px-2'>Or</p>
                    <div style={{ height: '1px' }} className="bg-primary w-25"></div>
                </div>

                <button onClick={() => signInWithGoogle()} className='from-google my-2' type="submit">
                    <div className='img-google'>
                        <span><small><img src={google} alt="" /></small> Sign Up with Google</span>
                    </div>
                </button>
               
            </div>
        </div>
    );
};

export default Socailmedia;
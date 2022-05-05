import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Socailmedia from '../socailmedia/Socailmedia';

const Signup = () => {
    const [showpass,setShowpass] = useState(false);
    const [error,setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        passerror,
      ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });

    const hendelSignup = event =>{
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmpassword = event.target.confirmpassword.value;

        if(password !== confirmpassword){
            setError('password does not match')
        }
        
        createUserWithEmailAndPassword(email, password)


    }
    if(user){
        navigate(from, { replace: true })
        console.log(user);
    }

    return (
        <div className='from-container'>
            <form onSubmit={hendelSignup}>
                <div>
                    <h3 className='from-title text-primary text-center'>Please SignUP</h3>
                    <div className="input-group">
                        <input type="text" name="name" id="" required placeholder='Enter your Name' />
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input name="password" type={showpass ? "text" : "password"} id="" required placeholder='Enter Password' />

                    </div>
                    <div className="input-group">
                        <input name="confirmpassword" type={showpass ? "text" : "password"} id="" required placeholder='Enter Password' />

                    </div>

                    <input type="checkbox" name="" id="" onClick={() => setShowpass(!showpass)} /> <span>see password</span>

                    <p>
                        {
                            loading && <div className='spinner'><Spinner animation="border" variant="warning"  /></div>
                        }
                    </p>
                    
                    <p className='text-center text-danger'>{error}</p>
                    <input className='from-submit bg-primary' type="submit" value="SignUP" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                       Already have an accout <Link className='form-link' to='/login'>LogIn</Link>
                    </div>
                    
                </div>



                <Socailmedia></Socailmedia>
                <ToastContainer />

            </form>
        </div>
    );
};

export default Signup;
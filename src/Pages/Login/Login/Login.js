import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Socailmedia from '../socailmedia/Socailmedia';
import "./Login.css"

const Login = () => {
    const [showpass,setShowpass] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const logInUser = event =>{
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;
        
        signInWithEmailAndPassword(email,password)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='from-container'>
            <form onSubmit={logInUser}>
                <div>
                    <h3 className='from-title text-primary text-center'>Please Login</h3>
                    <div className="input-group">
                        <input type="email"  name="email" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input   name="password" type={showpass ? "text" : "password"} id="" required placeholder='Enter Password' />
                        
                    </div>
                    
                    <input type="checkbox" name="" id="" onClick={()=>setShowpass(!showpass)}/> <span>see password</span>

                    <p>
                        {
                            loading && <div className='spinner'><Spinner animation="border" variant="warning"  /></div>
                        }
                    </p>
                    {errorElement}
                    <input className='from-submit bg-primary' type="submit" value="Login" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <Link className='form-link' to='/signup'>Create new account !  </Link>
                    </div>
                    <div>
                        <button className='form-link btn btn-link' >Forget Password !</button>
                        {/* onClick={hendelForgetPssword} */}
                    </div>
                </div>

                

                 <Socailmedia></Socailmedia>
                {/* <ToastContainer /> */}

            </form>
        </div>
    );
};

export default Login;
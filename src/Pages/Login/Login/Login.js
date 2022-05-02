import React, { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword,  } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import Socailmedia from '../socailmedia/Socailmedia';
import "./Login.css"

const Login = () => {
    const [showpass,setShowpass] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

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

    const hendelForgetPssword = async() =>{
        const email = EmailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            alert("email sent");
            console.log("email send");
        }
        else{
            toast('enter your email')
            console.log("emailnot send");
        }

    }
    
    
    if (loading || sending) {
        return <Loading></Loading>
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
                        <input type="email"  name="email" ref={EmailRef} id="" required placeholder='Enter your Email' />
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
                        <button className='form-link btn btn-link' onClick={hendelForgetPssword}>Forget Password !</button>
                        
                    </div>
                </div>

                

                 <Socailmedia></Socailmedia>
                <ToastContainer></ToastContainer>

            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import Socailmedia from '../socailmedia/Socailmedia';
import "./Login.css"

const Login = () => {

    const logInUser = event =>{

    }

    return (
        <div className='from-container'>
            <form onSubmit={logInUser}>
                <div>
                    <h3 className='from-title text-primary text-center'>Please Login</h3>
                    <div className="input-group">
                        <input type="email"  name="" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input   name="" id="" required placeholder='Enter Password' />
                        {/* type={showpass ? "text" : "password"} */}
                    </div>
                    
                    {/* <input type="checkbox" name="" id="" onClick={()=>setShowpass(!showpass)}/> <span>see password</span> */}

                    {/* <p>
                        {
                            loading && <div className='spinner'><Spinner animation="border" variant="warning"  /></div>
                        }
                    </p>
                    {errorElement} */}
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
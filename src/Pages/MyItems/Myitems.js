import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Login/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Myitems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        // const url = `https://hidden-fortress-66686.herokuapp.com/product?email=${user.email}`

        const getMyItems = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://hidden-fortress-66686.herokuapp.com/product?email=${email}`
            // const url = `http://localhost:4000/product?email=${email}`


            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setProducts(data);
            }
            catch (error) {
                toast(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }

        }
        getMyItems()

    }, [user])



    return (
        <div style={{height:"100%"}}>
            <div className='container'>
                <h4 className='text-center m-3 text-success'>This is my items</h4>
                <div className='row container'>
                    {
                        products?.map(product => <div className='col-md-4'>
                            <div class="card text-center align-items-center mb-3" style={{ width: "18rem" }}>
                                <img src={product?.img} class="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-primary">{product?.name}</h5>
                                    <p class="card-text text-info">{product?.decreption}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-danger">Price : {product.price}</li>
                                    <li class="list-group-item text-warning">total stoted : {product.quantity}</li>
                                </ul>
                                <div class="card-body">
                                    <Link to='/manage' class="card-link text-decoration-none fw-bold text-info">manage Item</Link>
                                    <Link to='/manage' class="card-link text-decoration-none text-success fw-bold">Add new Item</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Myitems;
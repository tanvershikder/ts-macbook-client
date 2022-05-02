import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Myitems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `http://localhost:4000/product?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user])

    console.log(products);

    return (
        <div className='container '>
            <h4 className='text-center m-3 text-success'>This is my items</h4>
            <div className='row'>
                {
                    products?.map(product => <div className='col-md-4'>
                        <div class="card text-center align-items-center" style={{width: "18rem"}}>
                            <img src={product?.img} class="card-img-top" style={{height: "200px"}} alt="..."/>
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
        </div>
    );
};

export default Myitems;
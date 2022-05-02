import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Login/Loading/Loading';
import './Inventory.css'

const Inventory = () => {
    const { user } = useAuthState(auth)
    const { id } = useParams();
    const [macbook, setMackbook] = useState();

    useEffect(() => {
        const url = `http://localhost:4000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMackbook(data))
    }, [macbook])

    if (!user) {
        <Loading></Loading>
    }
    let updatequantity = Number(macbook?.quantity);


    const manageDelivary = () => {
        // const name = macbook;
        if (updatequantity > 0) {
            updatequantity = updatequantity - 1;

            const quantity = { updatequantity }

            console.log(quantity);

            const url = `http://localhost:4000/products/${id}`
            console.log(url);
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(quantity)

            })
                .then(res => res.json())
                .then(data => {
                    console.log("success", data)
                    // toast("update quntity");
                })

        }
        if (updatequantity <= 0) {
            const updatequantity = "stock Out"
            const quantity = { updatequantity }
            const url = `http://localhost:4000/products/${id}`
            console.log(url);
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(quantity)

            })
                .then(res => res.json())
                .then(data => {
                    console.log("success", data)
                    // toast("update quntity");
                })
        }
    }


    const addProduct = (event) => {
        event.preventDefault()
        const nowQuantity = Number(event.target.quantity.value);
        updatequantity = nowQuantity + updatequantity;
        const quantity = { updatequantity };

        const url = `http://localhost:4000/products/${id}`
        console.log(url);
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(quantity)

        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                // toast("update quntity");
            })
    }



    return (
        <div className=''>
            <div className=''>
                <div className=' my-3'>
                    <div className="card container text-center invrntoryCard " style={{ width: "20rem" }} >
                        <img src={macbook?.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">price: {macbook?.price}</p>
                            <p>quantity : {macbook?.quantity}</p>
                            <p>Supliear email: {macbook?.email}</p>
                        </div>
                        <div>
                            <button className='dellivaryButton' onClick={manageDelivary}>delivered</button>

                        </div>
                        <div>
                            <form onSubmit={addProduct} className='m-5'>
                            <h5>Update Quantity</h5>
                                <input type="number" name='quantity' className='mb-3'/>
                                <button className='button'>Store Product</button>
                                <Link to='/addproduct' className='btn btn-warning mt-2'>Add new product</Link>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Inventory;
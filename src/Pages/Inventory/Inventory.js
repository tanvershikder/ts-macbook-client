import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Login/Loading/Loading';

const Inventory = () => {
    const { user } = useAuthState(auth)
    const { id } = useParams();
    // console.log(id);

    const [macbook, setMackbook] = useState();

    useEffect(() => {
        const url = `http://localhost:4000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMackbook(data))
    }, [id])

    // console.log(macbook);
    if (!user) {
        <Loading></Loading>
    }
    let quantity = Number(macbook?.quantity);
    // console.log(macbook?.quantity);

    const manageDelivary = () => {

        if (quantity > 0) {
            // quantity = String(quantity - 1);
            quantity =quantity - 1;

            // console.log(quantity);

            const url = `http://localhost:4000/products/${id}`
            fetch(url,{
                method:"PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(quantity)
               
            })
                .then(res => res.json())
                .then(data => {
                    console.log("success",data)
                    console.log("update quntity");
                })

        }
        else {
            return console.log("finished");
        }
        // setQuantity(getquantity)
        
    }


    const addProduct = () => {

    }



    return (
        <div>
            <div className='align-middle'>
                <div className="card text-center" style={{ width: "18rem" }}>
                    <img src={macbook?.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">price: {macbook?.price}</p>
                        <p>quantity : {macbook?.quantity}</p>
                        <p>Supliear email: {macbook?.email}</p>
                    </div>
                    <div>
                        <button onClick={manageDelivary}>delivered</button>
                        <button onClick={addProduct}>add products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
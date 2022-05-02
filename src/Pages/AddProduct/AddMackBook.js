import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AddMackBook = () => {
    const [user] = useAuthState(auth);
    const navigae = useNavigate()
    // console.log(user.email);

    const addProduct = event => {
        event.preventDefault()

        const email = event?.target?.email?.value;
        const name = event?.target?.productname?.value;
        const price = event?.target?.price?.value;
        const quantity = event?.target?.quantity?.value;
        const decreption = event?.target?.decreption?.value;
        const img = event?.target?.img?.value;

        const product = {
            email,name, price, quantity, decreption, img
        }


        fetch('http://localhost:4000/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then((data) => console.log(data));

            alert("your mackbook add successfully")
            navigae('/')
        console.log(product);
        

    }
    return (
        <div className='from-container'>
            <form onSubmit={addProduct}>
                <div>
                    <h3 className='from-title text-primary text-center'>ADD YOUR PRODUCT</h3>
                    <div className="input-group">
                        <input type="email" name="email" id="" required placeholder='' value={user.email} />
                    </div>
                    <div className="input-group">
                        <input type="text" name="productname" id="" required placeholder='Enter Name or model' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="price" id="" required placeholder='Enter price' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="quantity" id="" required placeholder='Enter Quantity' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="decreption" id="" required placeholder='Enter small decreption' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="img" id="" required placeholder='image url' />
                    </div>

                    <input className='from-submit bg-primary' type="submit" value="Add your Product" />
                </div>
            </form>
        </div>
    );
};

export default AddMackBook;
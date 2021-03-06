import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddMackBook = () => {
    const [user] = useAuthState(auth);
    const navigae = useNavigate()
    // console.log(user.email);

    const addProduct = event => {
        event.preventDefault()

        const email = event?.target?.email?.value;
        const name = event?.target?.productname?.value;
        const supliername = event?.target?.suplier?.value;
        const price = event?.target?.price?.value;
        const quantity = event?.target?.quantity?.value;
        const decreption = event?.target?.decreption?.value;
        const img = event?.target?.img?.value;

        const product = {
            email,name, price, quantity, decreption, img,supliername
        }

        const url = "https://hidden-fortress-66686.herokuapp.com/products";

        fetch(url, {
            method: 'POST',
            headers: {
                'authorization':`${user.email} ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                toast(data.success)
                event.target.reset()
            });

            
            
        console.log(product);
        

    }
    return (
        <div className='from-container managemain'>
            <form onSubmit={addProduct}>
                <div>
                    <h3 className='from-title text-primary text-center'>ADD YOUR PRODUCT</h3>
                    <div className="input-group">
                        <input type="email" name="email" id="" required placeholder='' value={user.email} />
                    </div>
                    <div className="input-group">
                        <input type="text" name="suplier" id="" required placeholder='Enter the suplier name'  />
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

                    <input className='from-submit bg-warning' type="submit" value="Add your Product" />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddMackBook;
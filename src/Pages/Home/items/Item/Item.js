import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ mackbook }) => {
    const navigate = useNavigate()
    console.log(mackbook);

    const hendelInventory = (id) =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col-md-4'>
            <div className="card" style={{width:"18rem"}}>
                <img src={mackbook?.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{mackbook?.name}</h5>
                        <p className="card-text text-center">{mackbook?.decreption}</p>
                        <div className='d-flex justify-content-between'>
                            <p>price :{mackbook?.price}</p>
                            <p>Qunatity : {mackbook?.quantity}</p>   
                        </div>
                        <p className='text-center'>supliername : {mackbook?.supliername}</p>
                        <button onClick={()=>hendelInventory(mackbook?._id)} className="btn btn-primary">Update Products</button>
                    </div>
            </div>
        </div>
    );
};

export default Item;
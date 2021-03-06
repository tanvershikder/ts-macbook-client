import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GrUpdate } from "@react-icons/all-files/gr/GrUpdate";

const Item = ({ mackbook }) => {
    const navigate = useNavigate()
    // console.log(mackbook);

    const hendelInventory = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col-md-4 mb-3'>

            <div className="card h-100 shadow cardbg" style={{ width: "19rem" }}>
                <img src={mackbook?.img} className="card-img-top cardimg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center mcname">{mackbook?.name}</h5>
                    <p className="card-text text-center mctext">{mackbook?.decreption}</p>
                    <div className='d-flex justify-content-between'>
                        <p className='mcprice'>Price :{mackbook?.price}</p>
                        <p className='quantity'>Qunatity : {mackbook?.quantity}</p>
                    </div>
                    <p className='text-center mcsuplier'>Suplier : {mackbook?.supliername}</p>
                    <div className="text-center"> 
                        <button onClick={() => hendelInventory(mackbook?._id)} className="btn btn-warning text-center mcUpdate">Update Products  <span><GrUpdate/></span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
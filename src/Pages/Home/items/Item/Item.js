import React from 'react';

const Item = ({ mackbook }) => {
    return (
        <div className='col-md-4'>
            <div className="card" style={{width:"18rem"}}>
                <img src={mackbook.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{mackbook.name}</h5>
                        <p className="card-text text-center">{mackbook.decreption}</p>
                        <div className='d-flex justify-content-between'>
                            <p>price :{mackbook.price}</p>
                            <p>Qunatity : {mackbook.quantity}</p>
                        </div>
                        <p className='text-center'>supliername : {mackbook.supliername}</p>
                        <a href="#" className="btn btn-primary">Update Products</a>
                    </div>
            </div>
        </div>
    );
};

export default Item;
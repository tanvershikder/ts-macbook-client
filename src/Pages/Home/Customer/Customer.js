import React, { useEffect, useState } from 'react';
import './Customer.css'

const Customer = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('customer.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='container reviewcontainer mt-5'>
            <h3 className='text-center m-2'>This is Review section</h3>

            <div className='row container text-center align-center'>
                {
                    reviews.map(review => <div className='col-md-3 '>
                        <div class="card  reviewCard" style={{width: "12rem"}}>
                            <img src={review.img} class="card-img-top cardimgreview" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title text-center cutomername">{review.name}</h5>
                                    <p class="card-text customercomment">{review.comment}</p>
                                    <p className='star'>star {review.star}</p>
                                </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Customer;
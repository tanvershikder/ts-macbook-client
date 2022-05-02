import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Customer.css'

const Customer = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('customer.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='container reviewcontainer mt-md-5'>
            <h3 className='text-center my-md-2'>This is Review section</h3>

            <div className='row container text-center align-center'>
                {
                    reviews.map(review => <div className='col-md-4 reviewcontainer'>
                        <Card className='align-items-center m-md-3 m-sm-1' style={{ width: '280px', height: "300px", marginRight: "5px" }}>
                            <div className='backgroundEffect'>
                                <Card.Img className='cardimgreview' variant="top" src={review.img} />
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Text>
                                        {review.comment}
                                    </Card.Text>
                                    <p className='star'>{review.star}</p>
                                </Card.Body>
                            </div>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Customer;
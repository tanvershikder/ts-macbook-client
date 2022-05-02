import React from 'react';
import { Carousel } from 'react-bootstrap';
import Customer from './Customer/Customer';
import SendReview from './SendReview/SendReview'
import './Home.css';
import Items from './items/Items';
import mark3 from '../../images/mack3.jpg'
import mark1 from '../../images/mack1.jpg'
import mark2 from '../../images/mack2.jpg'


const Home = () => {
    return (
        <div>
            <div >
                <Carousel className='w-100'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={mark3}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={mark2}
                            alt="Second slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={mark1}
                            alt="Third slide"
                        />
                        
                    </Carousel.Item>
                </Carousel>
            </div>
            <Items></Items>
            <Customer></Customer>
            <SendReview></SendReview>
        </div>
    );
};

export default Home;
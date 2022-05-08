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
            <div className='mt-5'>
                <Carousel className='w-100'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://s.yimg.com/os/creatr-uploaded-images/2021-10/fc27e1e0-350a-11ec-8d7e-26deaf2f6d2b"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000"
                            alt="Second slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg'
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
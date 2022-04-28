import React from 'react';
import './Home.css';
import Items from './items/Items';

const Home = () => {
    return (
        <div>
            <div className='homeBanner'>
                <div className='text-center justify-content-center'>
                    <h1 className=''>WelCome to ts-MackBook shop</h1>
                    <h3>Get your Fevorite mackBook here</h3>
                </div>
            </div>
            <Items></Items>
        </div>
    );
};

export default Home;
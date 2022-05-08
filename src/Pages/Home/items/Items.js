import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import './item.css'

const Items = () => {
    const [mackbooks, setMackbooks] = useState([]);

    useEffect(() => {
        const url = "https://hidden-fortress-66686.herokuapp.com/products";


        fetch(url)
            .then(res => res.json())
            .then(data => setMackbooks(data))
    }, [])
    const newMackBook = mackbooks.slice(0, 6)
    return (
        <div className='mt-5 p-3'>
            <h3 className='text-center mb-3  mctitle'>Collection of Mackbook</h3>
            <div className='row clloection '>
                {
                    newMackBook.map(mackbook => <Item key={mackbook?._id} mackbook={mackbook}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;
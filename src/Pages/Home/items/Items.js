import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const Items = () => {
    const [mackbooks,setMackbooks] = useState([]);

    useEffect(()=>{
        const url = "http://localhost:4000/products";

        fetch(url)
        .then(res=>res.json())
        .then(data => setMackbooks(data))
    },[])
    const newMackBook = mackbooks.slice(0,6)
    return (
        <div className='row'>
            {
                newMackBook.map(mackbook => <Item key={mackbook?._id} mackbook={mackbook}></Item>)
            }
        </div>
    );
};

export default Items;
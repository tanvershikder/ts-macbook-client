import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const Items = () => {
    const [mackbooks,setMackbooks] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setMackbooks(data))
    },[])
    const newMackBook = mackbooks.slice(0,6)
    return (
        <div className='row'>
            {
                newMackBook.map(mackbook => <Item mackbook={mackbook}></Item>)
            }
        </div>
    );
};

export default Items;
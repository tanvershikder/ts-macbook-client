import React from 'react';

const ManageList = ({ mackbook,hendeldelete}) => {
    console.log(mackbook);




    return (

        <tr className=''>
            <th scope="row">{mackbook.quantity}</th>
            <td>{mackbook.name}</td>
            <td>{mackbook.email}</td>
            <td className='text-primary pointer' onClick={()=>hendeldelete(mackbook._id)} role={"button"}>delete</td>
        </tr>
    );
};

export default ManageList;
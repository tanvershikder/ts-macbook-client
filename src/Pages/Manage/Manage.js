import React, { useEffect, useState } from 'react';
import ManageList from './ManageList/ManageList';
import './Manage.css'

const Manage = () => {
    const [mackbooks, setMackbooks] = useState([]);

    useEffect(() => {
        const url = "https://hidden-fortress-66686.herokuapp.com/products";

        fetch(url)
            .then(res => res.json())
            .then(data => setMackbooks(data))
    }, [])

    const hendeldelete = id => {

        const procide = window.confirm("are you sure ? you want to delete ?")
        if (procide) {
            console.log(id);
            const url = `https://hidden-fortress-66686.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log("deleted");
                        const restproduct = mackbooks.filter(mackbook => mackbook._id !== id)
                        setMackbooks(restproduct)
                    }
                })
        }

    }

    return (
        <div style={{height:"100%"}}>
            <div className='container ps-3 h-100'>

                <table class="table table-dark table-striped tableStyle managemain">
                    <thead>
                        <tr>
                            <th scope="col">Quantity</th>
                            <th scope="col">Model</th>
                            <th scope="col">Suplier</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mackbooks.map(mackbook => <ManageList key={mackbook._id} mackbook={mackbook} hendeldelete={hendeldelete}></ManageList>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Manage;
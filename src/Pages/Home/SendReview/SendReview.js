import { Button } from 'bootstrap';
import React from 'react';
import './SendReview.css'

const f = () => {
    return (
        <div className='container sendReviewContainer p-4'>
            <h4 className='text-center m-3'>Send Your Review</h4>
             <form className='text-center'>
                 <input type="text" className='mb-2 rounded w-50' name="decreption" id="" placeholder='Enter Your decrerptiuon'/><br></br>
                 <input type="text" className='mb-2 rounded w-50' placeholder='Enter Your email' /><br></br>
                 <input type="text" className='mb-2 rounded w-50' name="" id="" placeholder='send your star'/><br></br>
                 <input type="text" className='mb-2 rounded w-50' placeholder='Enter Your name'/> <br></br>
                 <input type="button" className='btn btn-warning' value="Send Your Review" />
             </form>
        </div>
    );
};

export default f;
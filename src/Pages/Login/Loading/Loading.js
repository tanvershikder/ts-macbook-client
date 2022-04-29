import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container text-center mt-5 align-middle'>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;
import React from 'react';

const Blog = () => {
    return (
        <div className='container' style={{ marginTop: "100px" }}>
            <h3 className='text-center text-warning'>This is our Blog section</h3>


            <div>
                <h4 className='mt-3 text-primary'>Difference between javascript and nodejs ?</h4>
                <p><strong>NodeJS :</strong>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Some of the javascript frameworks are RamdaJS, TypedJS, etc.Javascript is used in frontend development </p>
                <p><strong>JavaScript :</strong>
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance . Nodejs is written in C, C++ and Javascript. Nodejs is used in server-side development</p>
            </div>
            <div>
                <h4 className='text-primary'> Differences between sql and nosql databases.</h4>
                <p>
                    <strong>SQL:</strong>
                    SQL is structure Query Lenguage . <br />
                    1/ is a popular open-source relational database management system (RDBMS) that is developed, distributed and supported by Oracle Corporation. <br />
                    2/In MySQL, each individual records are stored as rows in a table . <br />
                    3/table is used to store rows (records) of similar type. <br /><br />
                </p>
                <p>
                    <strong>NOSQL :</strong>
                    MongoDB is what is called a NOSQL database. <br />
                    1/MongoDB is an open-source database developed by MongoDB, Inc. MongoDB stores data in JSON-like documents that can vary in structure. It is a popular NoSQL database. <br />
                    2/In MongoDB, each individual records are stored as Documents. <br />
                    3/Documents belonging to a particular class or group as
                    stored in a collection. <br />
                    
                </p>
            </div>
            <div>
                <h4 className='text-primary'> What is the purpose of jwt and how does it work ?</h4>
                <p>
                    <strong>JWT: </strong>
                    jwt means json web token . Json webtoken is use for user access.it is an open standard used to share security information between two parties — a client and a server.Each JWT contains encoded JSON objects, including a set of claims. <br />
                    JWTs are used as a secure way to authenticate users and share information.
                </p>
            </div>

        </div>
    );
};

export default Blog;
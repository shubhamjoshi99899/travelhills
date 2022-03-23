import React from 'react'
import '../error.css'
import Error404 from '../error';
import Navbar from '../navbar';
import Footer from '../footer'
const Error = () => {
    return (
        <div>
            <Navbar />
            <Error404 />
            <Footer />
        </div>
    )
}

export default Error
